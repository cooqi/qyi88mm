<style lang="scss" scoped>
  @import "../assets/css/sass/base.scss";
  .headnavtop ,.headnavtop .content{background: #fff!important;}
  .head-top{height: 35px;line-height: 35px;border-bottom: 1px solid #ccc;}
  .head-top p{text-align: right;font-size: 13px;}
  .head-top p span{cursor: pointer}
  .head-top p span:hover{color: $MainColor}
  .headnav{height: 80px;overflow: hidden;font-size: 15px;box-shadow: 0 1px 6px 2px rgba(0,0,0,0.1);}
  .headnav .logo{height: 40px;float: left;margin-top: 20px}
  .headnav .nav{float: left;margin-left: 15px;height: 40px;margin-top: 20px}
  .nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover{
    color: $MainColor;
    background: none;
    border-bottom: 2px solid $MainColor;
    border-radius: 0;
    background: none;
  }

  .nav-pills>li>a{color:#787878}

  .login{float: right;line-height: 80px;color: $MainColor;cursor: pointer;font-size: 14px}
  .login span:hover{text-decoration: underline}
</style>
<template>
  <div class="headnavtop" :style="$route.name=='index'?'height: 80px;position: fixed;top:0;left: 0;z-index: 999;width: 100%;':''">
    <div class="headnav">
      <div class="content">
        <img src="../assets/img/log_01.png" alt="" class="logo">
        <ul class="nav nav-pills">
          <li  role="presentation" :class="active=='index'?'active':''"><a href="/">首页</a></li>
          <li  role="presentation"  :class="active=='jjyl'?'active':''" @click="$routeGo('jjyl')"><a>居家养老</a></li>
          <li  role="presentation"  :class="active=='jgyl'?'active':''" @click="$routeGo('jgyl')"><a>机构养老</a></li>
          <li  role="presentation"  :class="active=='sqyl'?'active':''" @click="$routeGo('sqyl')"><a>社区养老</a></li>
          <li  role="presentation"  :class="active=='yyrh'?'active':''" @click="$routeGo('yyrh')"><a>医养融合</a></li>
          <li  role="presentation"  :class="active=='hlys'?'active':''" @click="$routeGo('hlys')"><a>活力养生</a></li>
        </ul>
        <div class="login">
          <p v-if="centerShow">
            <span @click="$routeGo('user')">个人中心</span>
            <span @click="loginOut">| 退出</span>
          </p>
          <p v-else>
            <span @click="$routeGo('login')">登录 | 注册</span>
          </p>
      </div>
    </div>
  </div>
    <Modal
      v-model="show"
      title="退出登录"
      @on-ok="ok">
      <p>确定退出登录</p>
    </Modal>
  </div>
</template>

<script>
  import { mapGetters,mapActions } from 'vuex'
export default{
    data(){
      return{
       // active:'',
        show:false,
      }
    },
  computed:{
    ...mapGetters([
      'token',
      'navOn',
      'centerShow',
      'active'
    ])
  },
  watch: {
    '$route' (to, from) {
        console.log(this.$route.matched[0].name)
      this.NavLink(this.$route.name)
      if(this.$route.matched[0].name=='jjyl'||this.$route.matched[0].name=='daigou'){
        this.NavLink('jjyl')
      }
      if(this.$route.matched[0].name=='jgyl'){
        this.NavLink('jgyl')
      }
      if(this.$route.matched[0].name=='yyrh'){
        this.NavLink('yyrh')
      }
      if(this.$route.matched[0].name=='hlys'){
        this.NavLink('hlys')
      }
      if(this.$route.matched[0].name=='sqhd'||this.$route.matched[0].name=='sgxm'||this.$route.matched[0].name=='sqzyz'){
        this.NavLink('sqyl')
      }
    }
  },
  mounted(){
    this.NavLink(this.$route.name)
    if(this.$route.matched[0].name=='jjyl'||this.$route.matched[0].name=='daigou'){
      this.NavLink('jjyl')
    }

    if(this.token!=''){
        this.centerShow=true
    }else{
      this.centerShow=false
    }
  },
  methods:{
    ...mapActions([
      'clear_token',
      'NavLink'
    ]),
    ok () {
      this.clear_token();
      this.$routeGo('login')
    },
    loginOut(){
        this.show=true
    }
  }
}
</script>

