<template>
  <div id="app">
    <div class="oreder_main">
      <div style="width: 99%;height: 42px;border-bottom: 1px solid #e2e2e2;">
      <ul class="nav nav-pills orderlist">
        <li  role="presentation"  :class="orederState==0 ||!orederState ?'active':''" @click="$routeGo('orderList',{'orederState':0},true)"><a>所有订单</a></li>
        <li  role="presentation"  :class="orederState==1?'active':''" @click="$routeGo('orderList',{'orederState':1},true)"><a>等待付款</a></li>
        <li  role="presentation"  :class="orederState==2?'active':''" @click="$routeGo('orderList',{'orederState':2},true)"><a>等待服务</a></li>
        <li  role="presentation"  :class="orederState==3?'active':''" @click="$routeGo('orderList',{'orederState':3},true)"><a>服务确认</a></li>
        <li  role="presentation"  :class="orederState==4?'active':''" @click="$routeGo('orderList',{'orederState':4},true)"><a>已完成</a></li>
      </ul>
      </div>
      <div style="width: 99%;height: auto;margin-top: 20px">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../../../assets/css/sass/base.scss";
  .oreder_main  .nav-pills ul li :hover{
    border-bottom: 2px solid $MainColor;
    background-color: #fff;
  }
  .nav-pills > li.active > a, .nav-pills > li.active > a:focus, .nav-pills > li.active > a:hover{
    color: $MainColor;
    background-color: #fff;
    border-bottom: 2px solid $MainColor;
  }

  .oreder_main ul{
    width: 980px;
    height: 50px;


  }
  .oreder_main .nav-pills  li{
    text-align: center;
    width: 19%;
    color: #000;



  }
  .oreder_main  .nav-pills li a{
    color: #000;
    border-radius: 0px;
  }

</style>
<script>
  export default {
    name:'app',
    data(){
      return{
        orederState:0
      }
    },
    watch:{
      '$route' (to, from) {

        this.orederState=this.$route.query.orederState?this.$route.query.orederState:0;
      }
    },
    methods:{



    },
    mounted(){

    }



  }
</script>
