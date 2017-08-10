<template>
  <div class="life">
    <div class="list-box"  v-if="list.length>0">
     <!-- <div class="sort">

            <table class="table table-bordered">
              <tr>
                <td class="all"  @click="sort(0)" >综合排序</td>
                <td class="price" @click="sort(1)" :class="com==1?'on':''">价格
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-paixu" v-if="sort_price"></use>
                    <use xlink:href="#icon-paixu2" v-else></use>
                  </svg>
                </td>
               &lt;!&ndash; <td class="distance" @click="sort(2)"  :class="com==2?'on':''">距离
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-paixu" v-if="sort_distance"></use>
                    <use xlink:href="#icon-paixu2" v-else></use>
                  </svg>
                </td>
                <td class="credit" @click="sort(3)"  :class="com==3?'on':''">信誉
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-paixu" v-if="sort_credit"></use>
                    <use xlink:href="#icon-paixu2" v-else></use>
                  </svg>
                </td>&ndash;&gt;
              </tr>
            </table>

            <div class="search">
              <Input v-model="value13">
              <Button slot="append" icon="ios-search"></Button>
              </Input>
            </div>
          </div>-->


      <div class="list-con">
        <div class="li">
            <div v-if="list.length<1">
              <p>暂无商品</p>
            </div>
                <div v-else class="list" v-for="item in list"  @click="yuyue(item.servClass,item.marServItem_ID)">
                    <div class="img">
                      <img :src="item.attaUrl" alt="">
                    </div>
                    <div class="info">
                      <p class="title" v-text="item.servItemTitle"></p>
                      <p class="class" v-text="item.itemMainName+'-'+item.itemSubName"></p>
                      <p class="serName">服务标题：<span v-text="item.servItemName"></span></p>
                    </div>
                    <div class="yy">
                      <p class="address" style="height: 25px">
                        <!--<svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-location"></use>
                        </svg>
                        不详-->
                      </p>
                      <p class="cost">￥<span v-text="item.minPrice==item.maxPrice?(item.minPrice)/100:(item.minPrice)/100+'~'+(item.maxPrice)/100"></span></p>
                      <p class="order" >直接预约</p>
                    </div>
                </div>
        </div>
      </div>

      <div class="page">
        <Page :total="total" :page-size="page_size" show-elevator className="page-pos" @on-change="page" :current="pages"></Page>
      </div><!--page-->
    </div>
    <div v-else>
      <p>暂无商品...</p>
    </div>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>


<script>
  import api from  '../../../../fetch/api'
  export default{
    props:['defId','cl'],
      data(){
          return{
              sort_price:true , //默认降序
              sort_distance:true,
              sort_credit:true,
              com:0,
              value13:'',
              total:0, //总共多少条
              page_size:20,  //每页几条数据
              pages:1,  //当前页
              mainId:'',  //二级栏目id
              ItemSub:'',  //三级栏目id
              list:{}  ,   //当前栏目列表
              type:'',  //栏目类型
            spinShow:true
          }
      },
      methods:{
        sort(id){
          this.com=id
          if(id==0){
            this.com=0
          }
            if(id==1){
                this.sort_price=!this.sort_price
            }
            if(id==2){
              this.sort_distance=!this.sort_distance
            }
            if(id==3){
              this.sort_credit=!this.sort_credit
            }
        },
        page(n){
          this.pages=n
          this.getlist()
        },
        getlist(){
          var _this=this;
          var pamars={
            ServItemMain:this.mainId,
            ServItemSub:this.ItemSub,
            pageIndex:this.pages,
            pageSize:this.page_size,
            ServClass:4
          }
          api.get('family/MallList',pamars)
            .then(function(rsp){
                _this.spinShow=false
              _this.list=rsp.data.list
              _this.total=rsp.data.totalCount
            })
        },
        detail(type,id){
            //服务类别：1 自营服务，4 服务市场，5 需求市场，6 劳务市场（淘阿姨） 7爱家优选
          switch(type)
          {
            case 4:
              this.$routeGo('/SerDetail',{id:id},true)
              break;
            case 6:
              this.$routeGo('/LWdetail',{id:id},true)
              break;
            default:
              break;
          }
        },
        yuyue(type,id){
        var _this=this;
          switch(type)
          {
            case 4:
              if(_this.cl){
                this.$routeGo('/SerApp',{id:id,type:type,cl:_this.cl},true)
              }else {
                this.$routeGo('/SerApp',{id:id,type:type},true)
              }

              break;
            case 6:
              this.$routeGo('/LWappointment',{id:id},true)
              break;
            default:
              break;
          }
        }
      },
    mounted(){
      this.mainId=this.$route.query.id?this.$route.query.id:this.defId;
      this.ItemSub=this.$route.query.sid?this.$route.query.sid:'';
      this.type=this.$route.query.type
      this.pages=1
      if(this.mainId!=''){
        this.getlist()
      }



    },
    watch: {
      '$route' (to, from) {
        console.log(this.defId)
        this.mainId=this.$route.query.id?this.$route.query.id:this.defId;
        this.ItemSub=this.$route.query.sid?this.$route.query.sid:'';
        this.type=this.$route.query.type
        this.pages=1
        this.getlist()
      }
    },
  }
</script>
<style lang="scss" scoped="">
  @import "../../../../assets/css/sass/base.scss";

  .life{background: #fff;padding: 10px 20px;margin: 10px 0;min-height: 100%}

  .list-box .sort{font-size:$fontSize01;overflow: hidden}
  .list-box .sort table{width: 300px;float: left}
  .list-box .sort td{padding: 5px;text-align: center;border:1px solid #ccc;cursor: pointer}
  .list-box .sort td.on{background:$MainColor;color: #fff }
  .list-box .sort td.all{background: #ccc}
  .list-box .li{display: flex;justify-content: space-between;flex-wrap: wrap}
  .list-box .li .list{height: 102px;border:1px solid #ccc;margin-bottom:10px;overflow: hidden ;width: 560px;float: left;cursor: pointer}
  .list-box .li .list .img{float: left;width: 100px;height:100px;background: url("../../../../assets/static_hq/img/demo.png") no-repeat;background-size: contain}
  .list-box .li .list .img img{height: 100px;width: 100px;}
  .list-box .li .list .yy{text-align: right;float: right;margin-right: 10px;width: 160px}
  .list-box .li .list .info{float: left;margin:0 10px;width: 250px;}
  .list-box .li .list .info .title{font-size: 14px;color: #333;line-height: 30px;cursor: pointer;height: 30px;overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;}
  .list-box .li .list .info .class,.list-box .li .list .info .serName{font-size: 12px;color: #666}
  .list-box .li .list .yy .address{line-height: 30px;overflow: hidden;float: none;display: block;box-shadow: none}
  .list-box .li .list .yy .address svg{font-size: 20px;color: $ComColor03 }
  .list-box .li .list .yy .cost{color: $MainColor}
  .list-box .li .list .yy .order{background: $ComColor03;color: #fff;text-align: center;cursor: pointer;width: 80px;height: 28px;line-height: 28px;float: right;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  .search{width: 300px;float: right}

  .page{margin-top: 20px}
</style>
