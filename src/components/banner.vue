<style lang="scss">
  @import "../assets/css/sass/base.scss";
  .banner{width: 100%;min-width: 1100px;height: 450px}
  .banner img{display:block;margin:auto;cursor: pointer}
  .ivu-carousel-dots li button{background: none;width: 14px;height: 14px;border:2px solid #e5e5e5;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
  }

  .ivu-carousel-dots li.ivu-carousel-active>button{background: $MainColor;width: 14px}
</style>
<template>
  <div class="banner">
  <Carousel autoplay v-model="value2">
    <Carousel-item v-for="item in bannerDate" :key="item.publish_ID">
      <div class="demo-carousel">
        <img :src="item.logoUrl" alt="" @click="routG(item.publish_ID)">
      </div>
    </Carousel-item>
  </Carousel>
  </div>
</template>
<script>
  import api from '../fetch/api'
  export default {
    data () {
      return {
        value2: 0,
        bannerDate:{}
      }
    },
    methods:{
      banner(){
        var pamars={
          'pubType':1,
          'pageIndex':1,
          'pageSize':5
        };
        var _this=this;
        api.get('govserv/publish',pamars)
          .then(function (rsp) {
            _this.bannerDate= rsp.data.newslist;
          })
      },
      routG(id){
        this.$routeGo('govDetail',{'id':id},true)
      }
    },
    mounted(){
        this.banner()
    }
  }
</script>
