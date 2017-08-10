<style lang="scss">
  @import "../assets/css/sass/base.scss";

  #subNav {
    height: 50px;
    overflow: hidden;
    text-align: center;
    /*background-color: #389bd7;*/
    background: url("../assets/static_dby/img/navbg.png") repeat-x;
    font-size: $fontSize02;
    /*box-shadow: 0 1px 6px 2px rgba(0, 0, 0, 0.1)*/
  }

  .subheadnav {
    height: 100%;
    margin-left: 300px;
  }

  @media screen and (min-width: 1300px) {
    .subheadnav {
      height: 100%;
      margin-left: 460px;
    }
  }

  .subheadnav .nav {
    height: 50px;
  }

  .subheadnav .nav-pills > li.active > a, .subheadnav .nav-pills > li.active > a:focus, .subheadnav .nav-pills > li.active > a:hover {
    color: #fff;
    /*background-color: #50b2ed;*/
    background: url("../assets/static_dby/img/highlighted.png");
  }

  .subheadnav .nav-pills > li > a, .subheadnav .nav-pills > li > a:focus, .subheadnav .nav-pills > li > a:hover {
    color: #fff;
    background: none;
  }

  .subheadnav .nav > li > a {
    padding: 15px;
  }
</style>
<template>
  <div id="subNav">
    <div class="subheadnav">
      <div class="content">
        <ul class="nav nav-pills">
          <li role="presentation" :class="active=='fwwd'?'active':''" @click="changeSubTab('fwwd')"><a>服务网点</a></li>
          <li role="presentation" :class="active=='sqhd'?'active':''" @click="changeSubTab('sqhd')"><a>社区活动</a></li>
          <li role="presentation" :class="active=='sgxm'?'active':''" @click="changeSubTab('sgxm')"><a>社工项目</a></li>
          <li role="presentation" :class="active=='sqzyz'?'active':''" @click="changeSubTab('sqzyz')"><a>社区志愿者</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        active: ''
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.name == 'posjoin') {
          this.active = 'sqzyz';
        } else {
          this.active = this.$route.name
        }
      }
    },
    mounted(){
      if (this.$route.matched[0].name == 'posjoin') {
        this.active = 'sqzyz';
      } else if (this.$route.matched[0].name == 'sqyl' || this.$route.matched[0].name == 'sqylDetail') {
        this.active = 'fwwd';
      } else if (this.$route.matched[0].name == 'sqhdlist' || this.$route.matched[0].name == 'sqhddetail') {
        this.active = 'sqhd';
      } else if (this.$route.matched[0].name == 'sgxmdetail') {
        this.active = 'sgxm';
      } else {
        this.active = this.$route.name
      }
    },
    methods: {
      changeSubTab: function (tabName) {
        this.active = tabName;
        this.$routeGo(tabName);
      }
    }
  }
</script>

