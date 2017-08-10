<style scoped lang="scss">
  @import "../../../../assets/css/sass/base.scss";
  dl,table,p{margin: 0;padding: 0}


  .shop-box{margin-top: 10px}
  .shop-box .sort{font-size:$fontSize01;overflow: hidden;}
  .shop-box .sort table{width: 300px;background: #fff;}
  .shop-box .sort td{padding: 5px;text-align: center;border:1px solid #ccc;cursor: pointer}
  .shop-box .sort td.on{background:$MainColor;color: #fff }
  .shop-box .sort td.all{background: #ccc}

  .shop-list{margin: 10px 0;justify-content:flex-start;flex-wrap: wrap;overflow: hidden;
    display: -webkit-flex;
    display: flex;
  }
  .shop-list .list{width: 230px;background: #fff;padding: 7px;cursor: pointer;border:1px solid #eee;transition: all .4s;margin: 5px}
  .shop-list .list img{width: 100%;height: 210px;background: url("../../../../assets/static_hq/img/demo.png") no-repeat;background-size: cover}
  .shop-list .list h3{font-size: 14px;color: #333;line-height: 20px;height: 60px;overflow: hidden}
  .shop-list .list .price{ font-size: 16px;color: #666}
  .shop-list .list .price span{ font-size: 18px;color:$ComColor03;font-weight: bold}
  .shop-list .list .sales{font-size: 14px;color: #999}
  .shop-list .list:hover{border:1px solid $ComColor01;box-shadow: 0 0 6px 3px rgba(103,103,103,.2)}

  .page{overflow: hidden;position: relative;height: 50px}

  .shop-head-box{margin-top: 10px;background: #fff;padding: 10px 0 1px;}
  .classify{margin-bottom: 15px;padding: 0 10px}
  .classify dl{overflow: hidden;border:1px solid #f2f2f2;color: #806f66;margin-top: 3px;font-size: $fontSize01}
  .classify dl dt{background: #F7F5F5;float: left;width: 60px;text-align: center;margin-right: 15px;height: 30px;line-height: 30px;}
  .classify dl dd{float: left;margin-right: 10px;cursor: pointer;height: 30px;line-height: 30px;}
  .classify dl dd.on{color: $MainColor;  }
  .classify dl dd.act{font-weight: bold}
  .classify dl.mainClass dd{margin-right:40px}

</style>
<template>
  <div class="easyLife">
    <div class="shop-head-box">
      <div class="classify">
        <dl class="mainClass">
          <dt>分类</dt>
          <dd class="main" @click="link(index,item.mainId,item.servClass)" v-for="(item,index) in Nav"  v-text="item.mainName"></dd>
          <dd class="other on">代购代买</dd>
          <!--<dd class="other" :class="name=='SmartHome'?'on':''" @click="routeGo('SmartHome')">智能居家</dd>
          <dd class="other" :class="name=='daigou'?'on':''" @click="routeGo('daigou')">代购代买</dd>
          <dd class="other" :class="name=='outpatients'?'on':''" @click="routeGo('outpatients')">出行和门诊挂号</dd>
          <dd class="other" :class="name=='payment'?'on':''" @click="routeGo('payment')">生活缴费</dd>-->
        </dl>
        <template v-if="navIndex!=null && sNav.length>0">
          <dl>
            <dt></dt>
           <!-- <dt  :class="sublistIndex==-1?'act':''" @click="subALL" style="cursor: pointer" >全部</dt>-->
            <dd v-for="(item,index) in sNav" v-text="item.mainName" @click="OnSublist(index,item.mainId,item.sublist[0].subId)"  :class="sublistIndex==index?'act':''"  style="margin-right: 15px"></dd>
          </dl>
        </template>
      </div>
    </div>

    <div class="shop-box">
     <!-- <div class="sort">
        <table class="table table-bordered">
          <tr>
            <td class="all" @click="sort(0)" >综合排序</td>
            <td class="price" @click="sort(1)" :class="com==1?'on':''">价格
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paixu" v-if="sort_price"></use>
                <use xlink:href="#icon-paixu2" v-else></use>
              </svg>
            </td>
            <td class="sales" @click="sort(2)"  :class="com==2?'on':''">销量
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paixu" v-if="sort_sales"></use>
                <use xlink:href="#icon-paixu2" v-else></use>
              </svg>
            </td>
          </tr>
        </table>
      </div>-->

      <div class="shop-list">
          <div class="list" @click="deatil(item.item_ID)" v-for="item in list">
            <img :src="item.logoUrl" alt="">
            <h3 class="name">{{item.itemTitle | titelSHOP}}</h3>
              <p class="price">￥<span v-text="item.minPrice/100"></span></p>
              <p class="sales">销量<span v-text="item.sellCount"></span>件</p>
          </div>
      </div>

      <div class="page">
        <Page :total="total" :page-size="page_size" show-elevator className="page-pos" @on-change="page" :current="pages"></Page>
      </div>

    </div>
  </div>
</template>


<script>
  import api from  '../../../../fetch/api'
  export default {
    data () {
      return {
        theme1: 'light',
        value13: '',
        sort_price:true , //默认降序
        sort_sales:true,
        com:0,
        total:100, //总共多少条
        page_size:20 , //每页几条数据
        Nav:[],     //二级栏目
        navIndex:0,  //二级栏目默认选中的索引
        sublistIndex:0,  //三级栏目默认选中的索引
        defId:'',   //默认的二级栏目id
        sid:'',    //三级栏目选中id
        mainId:'',  //二级栏目选中id
        sNav:[],  //三级栏目
        servClass:'' , //栏目类型
        list:[],
        pages:1
      }
    },
    methods:{
      sort(id){
        this.com=id
        if(id==1){
          this.sort_price=!this.sort_price
        }
        if(id==2){
          this.sort_sales=!this.sort_sales
        }
        if(id==0){
          this.com=0
        }
      },
      page(num){
          this.pages=num
          this.getlist()
      },
      link(i,id,type){
        this.mainId=id
        this.navIndex=i
        this.servClass=type
        $('.nav'+this.navIndex).addClass('on').siblings().removeClass('on')
        this.sublistIndex=-1
        this.go({id:id})
      },
      routeGo(path){
        $('.mainClass dd.main').removeClass('on')
        this.$routeGo(path)
        this.navIndex=null
      },
      getNva(){
        var _this=this;
        api.get('family/dirs')
          .then(function(rsp){
            _this.Nav=rsp.data
            _this.servClass=rsp.data[_this.navIndex].servClass
          })
      },
      OnSublist(i,mainId,sid){
        this.sublistIndex=i
        this.mainId=mainId
        this.sid=sid
        this.pages=1
        this.getlist()
      },
      subALL(){
        this.sublistIndex=-1
        this.sid=''
      },
      go(pamars){
        pamars.type=this.servClass
        this.$routeGo('/jjyl/lifecare',pamars,true)
      },
      getSubNav(){
        var _this=this;
        api.get('family/malldirs')
          .then(function(rsp){
            _this.sNav=rsp.data
            _this.defId=rsp.data[_this.navIndex].mainId
            _this.getlist()
          })
      },
      getlist(){
        var _this=this;
        var pamars={
          ServItemMain:this.mainId!=''?this.mainId:this.defId,
          ServItemSub:this.sid,
          pageIndex:this.pages,
          pageSize:this.page_size,
          ServClass:7
        }
        api.get('family/MallList',pamars)
          .then(function(rsp){
            _this.list=rsp.data.list
            _this.total=rsp.data.totalCount
          })
      },
      deatil(id){
          this.$routeGo('/service/detail',{Item_ID:id},true)
      }
    },
    mounted(){
        this.getNva()
      this.getSubNav()
    }
  }
</script>

