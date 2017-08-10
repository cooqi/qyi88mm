<template>
  <div id="app">
    <div class="main" style="height: auto;width: 100%; background-color: #fff">
      <div class="main_content">
        <div class="main_title" >
         <ol>
           <li>个人中心</li>
         </ol>
        </div>
    <div class="main_left"  >
     <ul class="nav  nav-stacked" >
       <!-- <li  id="jump" role="presentation" :class="active=='info'?'active':''" @click="$routeGo('info')"><a>我的信息</a></li>-->
        <li  class="jump" role="presentation" :class="active=='account'?'active':''" @click="$routeGo('account')"><a>我的账户</a></li>
        <li class="jump" role="presentation" :class="active=='order'?'active':''" @click="$routeGo('orderList')"><a>我的订单</a></li>
        <li class="jump" role="presentation" :class="active=='bank'?'active':''" @click="$routeGo('bank')" ><a>我的银行卡</a></li>
        <li class="jump" role="presentation" :class="active=='address'?'active':''" @click="$routeGo('address')"><a>我的地址</a></li>
        <li class="jump" role="presentation" :class="active=='update'?'active':''" @click="$routeGo('update')"><a>修改个人信息</a></li>
       <li class="jump" role="presentation" :class="active=='EvaluateList'?'active':''" @click="$routeGo('EvaluateList')"><a>我的评价</a></li>
      </ul>
    </div>

    <div style="float: right;width: 80%;margin-bottom: 80px">
      <router-view ></router-view>
    </div>

    </div>

    </div>
  </div>
</template>
<script>
  import { mapGetters,mapActions } from 'vuex'
  export default{
      name:"app",
    data(){
          return {
            active:'account'
          }


    },
    watch: {
      '$route' (to, from) {
        this.active=this.$route.name;

      }
    },
    methods:{


    },
    mounted(){

      this.active=this.$route.name;
    }

  }


</script>
<style  lang="scss">
  @import "../../../assets/css/sass/base.scss";
  .nav-stacked > li.active > a, .nav-stacked > li.active > a:focus, .nav-stacked > li.active > a:hover{
    border-left: 4px solid $MainColor;
    color: $MainColor;
    background-color: #f8fbff;
  }

  .main .main_content{
    clear: both; height: auto; margin-top: 20px; overflow: hidden;
  }
  .main .main_title{
    width: 1140px;
    height: auto;
    margin-top: 20px;
    margin-left: 30px;

  }
  .main .main_left {

    width: 20%;
    height: auto;
    padding: 1px;
    overflow: hidden;
    float: left


  }

  .main .main_left ul{
    margin: 10px 30px;
    width: auto;
    height: auto;
    overflow: hidden;

  }
  /*.main .main_left ul a{
    color: #000;
  }*/
  .main .main_left .jump{
    font-size: 16px;
    color: #424242;


  }
    /* .main .main_left ul .first{
       border-top: hidden;

     }*/
 .main_left ul li {

   width: 100%;
   height: 50px;
 }
  .main_left ul li a{
    line-height: 30px;
    text-align: center;
    color: #424242;
    background-color: #eff7ff;


  }
  .main_left ul li a:hover ,.main_left ul li a:active{
    background-color: #fff;

  }




</style>
