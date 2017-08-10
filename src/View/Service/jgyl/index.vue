<style scoped lang="scss">
  @import "../../../assets/css/sass/base.scss";
  dl,table,p{margin: 0;padding: 0}
  .shop-head-box{margin-top: 10px;background: #fff;padding: 10px 0 1px;}
  .menu{overflow: hidden;background: #fff;height: 50px;}
  .menu .menu-left{float: left;width: 50%; }
  .menu .menu-right{float: right;width: 40%;height: 30px;margin: 10px}
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
          <dd class="main" :class="['nav'+index,index==0?'on':'']"  @click="link(index,item.mainId,item.servClass)" v-for="(item,index) in Nav"  v-text="item.mainName"></dd>
          <!--<dd class="other" :class="name=='SmartHome'?'on':''" @click="routeGo('SmartHome')">智能居家</dd>
          <dd class="other" :class="name=='daigou'?'on':''" @click="routeGo('daigou')">代购代买</dd>
          <dd class="other" :class="name=='outpatients'?'on':''" @click="routeGo('outpatients')">出行和门诊挂号</dd>
          <dd class="other" :class="name=='payment'?'on':''" @click="routeGo('payment')">生活缴费</dd>-->
        </dl>
        <template v-if="navIndex!=null && sNav.length>0">
          <dl>
            <dt  :class="sublistIndex==-1?'act':''" @click="subALL"  style="cursor: pointer">全部</dt>
            <dd v-for="(item,index) in sNav" v-text="item.subName" @click="OnSublist(index,item.subId)"  :class="sublistIndex==index?'act':''"  style="margin-right: 15px"></dd>
          </dl>
        </template>
      </div>
    </div>

    <router-view :defId="defId" :cl="'jgyl'"></router-view>

  </div>
</template>


<script>
  import api from  '../../../fetch/api'
  export default {
    data(){
      return{
        name:'lifecare',
        Nav:[],     //二级栏目
        navIndex:0,  //二级栏目默认选中的索引
        sublistIndex:-1,  //三级栏目默认选中的索引
        defId:'',   //默认的二级栏目id
        sid:'',    //三级栏目选中id
        mainId:'',  //二级栏目选中id
        sNav:[],  //三级栏目
        servClass:'' , //栏目类型
      }
    },
    watch: {
      '$route' (to, from) {
        this.name= this.$route.name
      }
    },
    mounted(){
      this.name= this.$route.name
      this.getNva()
    },
    methods:{
      link(i,id,type){
        this.mainId=id
        this.navIndex=i
        this.servClass=type
        $('.nav'+this.navIndex).addClass('on').siblings().removeClass('on')

        this.sublistIndex=-1
        this.go({id:id})
        this.sNav=this.Nav[this.navIndex].sublist
      },
      routeGo(path){
        $('.mainClass dd.main').removeClass('on')
        this.$routeGo(path)
        this.navIndex=null
      },
      getNva(){
        var _this=this;
        api.get('organization/dirs')
          .then(function(rsp){
            _this.Nav=rsp.data
            _this.defId=rsp.data[_this.navIndex].mainId
            _this.sNav=rsp.data[_this.navIndex].sublist
            _this.servClass=rsp.data[_this.navIndex].servClass

            _this.go({id:_this.defId})
          })
      },
      OnSublist(i,sid){
        this.sublistIndex=i
        this.sid=sid
        this.go({id:this.mainId,sid:this.sid})
      },
      subALL(){
        this.sublistIndex=-1
        this.sid=''
        this.go({id:this.mainId})
      },
      go(pamars){
        console.log(this.servClass)
        pamars.type=this.servClass
          this.$routeGo('/jjyl/jigou',pamars,true)

      }
    }
  }
</script>

