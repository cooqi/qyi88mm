<style lang="scss" scoped>
  @import "../../../../assets/css/sass/base.scss";

  .news-Content {
    background: #fff;
    padding: 20px 10px 30px;
    font-size: $fontSize02;
  }

  .news-Content p {
    line-height: 200%;
  }

  .news-Content img {
    max-width: 100%;
    display: block;
    margin: auto;
  }

  .news-Content .title {
    text-align: center;
    font-size: $fontSize04;
    font-weight: bold
  }

  .news-Content .time {
    text-align: center;
    font-size: $fontSize01;
    color: #666;
    border-width: 1px 0 1px 0;
    border-style: dotted;
    border-color: #ccc;
    padding: 10px 0
  }
</style>

<template>
  <div>
    <SqylSubNav></SqylSubNav>
    <div class="content">
      <div class="news-Content">
        <h3 class="title">{{title}}</h3>
        <h4 class="time">发布时间：<span>{{createTime}}</span> | <span><a
          href="javascript:window.print();">打印本页</a></span>
        </h4>
        <div v-html="description"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import SqylSubNav from '../../../../components/SqylSubNav.vue'
  import api from '../../../../fetch/api.js'
  export default{
    data(){
      return {
        title: '',
        createTime: '',
        description: ''
      }
    },
    mounted(){
      console.log(this.$route.params.id)
      this.loadDetail();
    },
    components: {
      SqylSubNav
    },
    methods: {
      loadDetail(){
        var that = this;
        api.get('ZhengfuFamilypension/SelGov_ommunitydes', {
          ID: that.$route.params.id
        }).then(function (res) {
          var news = res.data;
          that.title = news.title;
          that.createTime = news.CreateTime;
          that.description = news.descript;
        });
      }
    }
  }
</script>
