<style lang="scss">
  @import "../../../../assets/css/sass/base.scss";

</style>
<template>
  <div>
    <SqylSubNav></SqylSubNav>
    <div>
      文体娱乐列表
    </div>
  </div>
</template>
<script>
  import SqylSubNav from '../../../../components/SqylSubNav.vue'
  import { mapGetters,mapActions } from 'vuex'
  export default{
    data(){
      return{
        data:{},
        name:''
      }
    },
    components:{
      SqylSubNav
    }

  }
</script>
