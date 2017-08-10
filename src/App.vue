<template>
  <div id="app">
    <!--<Affix>-->
        <headNav v-show="head_nav_show"></headNav>
    <!--</Affix>-->
   <!-- <banner v-if="$route.name=='index'"></banner>-->
    <div :class="$route.name=='index'?'':'content'">
     <!-- <transition
                    name="custom-classes-transition"
                    enter-active-class="animated fadeInLeft"
      >-->
        <router-view></router-view>

      <!--</transition>-->
    </div>
        <FooterNav v-show="foot_nav_show"></FooterNav>

      <transition name="fade">
        <ComAddress  v-if="addressShow"></ComAddress>
      </transition>

  </div>
</template>

<script>
  import FooterNav from './components/FooterNav.vue'
  import headNav from './components/HeadNav.vue'
  import banner from './components/banner.vue'
  import ComAddress from './components/address.vue'
  import { mapGetters,mapActions } from 'vuex'

  import api from './fetch/api'

  export default {
    name: 'app',
    data(){
      return{
        date:{},
        name:'',
        hotDate:{},
        ylDate:{},
        trainDate:{}
      }
    },
    computed:{
      ...mapGetters([
        'head_nav_show',
        'foot_nav_show',
        'addressShow'
      ])
    },
    components:{
      FooterNav,
      headNav,
      banner,
      ComAddress
    },
    methods:{
      ...mapActions([
        'headNavShow',
        'footNavShow',
        'login'
      ])
    },
    mounted(){
      this.headNavShow(this.$route.meta.headNav)
      this.footNavShow(this.$route.meta.footNav)
      this.login(this.$route.meta.login)
      if(this.$route.name=='index'){
        $('html, body').css({
          'overflow' : 'hidden',
          'height' : '100%'
        });
      }else {
        $('html, body').css({
          'overflow' : 'auto',
          'height' : '100%'
        });
      }
    },
    watch: {
      '$route' (to, from) {
        this.headNavShow(this.$route.meta.headNav)
        this.footNavShow(this.$route.meta.footNav)
        this.login(this.$route.meta.login)
        if(this.$route.name=='index'){
          $('html, body').css({
            'overflow' : 'hidden',
            'height' : '100%'
          });
        }else {
          $('html, body').css({
            'overflow' : 'auto',
            'height' : '100%'
          });
        }
      }
    },

  }

</script>

<style>
@import "assets/css/base_style.css";
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>

