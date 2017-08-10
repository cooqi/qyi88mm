<template style="clear: both;">

  <div style="clear: both;background-color: #ffffff;padding: 20px 0;overflow: hidden;margin-top: 20px">
        <ul class="nav-ul">
            <li name=2  class="nav-li nav-li2 active" @click="selectEvent(2,'新闻公告')"> <a >新闻公告</a></li>
            <li name=3  class="nav-li nav-li3" @click="selectEvent(3,'养老政策') "> <a>养老政策</a></li>
            <li name=4  class="nav-li nav-li4" @click="selectEvent(4,'服务培训')"> <a>服务培训</a></li>
            <!--<li name=5  class="nav-li nav-li5" @click="selectEvent(5)"> <a>政府购买服务</a></li>-->
            <!--<li name=6  class="nav-li nav-li6" @click="selectEvent(6)"> <a>社区居家养老服务中心</a></li>-->
        </ul>
    <div class="con_box">
      <h3 v-text="title"></h3>
      <ul class="list">
        <li v-for="item in Dates" @click="selectNews(item.publish_ID)">
            <p>
              {{item.title}}
              <span>
              {{item.createTime}}
            </span>
            </p>
        </li>
      </ul>

      <div class="right-div-page" style="margin-top: 30px;">
        <div class="right-page">
          <Page :total=total show-total  @on-change="pageChange"></Page>
        </div>
      </div>

    </div>




  </div>
</template>
<script>
  import api from '../../fetch/api'
  export default {
   data(){
        return{
          total:100,
          num:2,
          Dates:{},
          nowpage:1,
          title:'新闻公告'
        }
   },
    methods:{
      selectEvent(n){
          this.nowpage=1;
          $('.nav-li'+n).addClass('active').siblings().removeClass('active')
          this.getdate(n)
      },
      pageChange(n){
          this.nowpage=n
          this.getdate()
      },
      getdate(n){
        var pamars={
          'pubType':n?n:2,
          'pageIndex':this.nowpage,
          'pageSize':10
        };
        var _this=this;
        api.get('govserv/publish',pamars)
          .then(function (rsp) {
            _this.Dates= rsp.data.newslist;
            _this.total=rsp.data.totalCount
          })
      },
      selectNews(n){
        this.$routeGo('govDetail',{'id':n},true)
      }
    },
    mounted(){
       this.num=this.$route.query.id?this.$route.query.id:this.num;
       $('.nav-li'+this.num).addClass('active').siblings().removeClass('active')
      this.getdate(this.num)
    }

  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/sass/base.scss";
  .nav-ul{width: 220px;float: left}
  .con_box{width: 850px;float: right;margin-right: 20px}
  .con_box h3{border-bottom: 2px solid $MainColor;line-height: 50px;margin: 0;font-size: 18px;font-weight: bold}
  .con_box .list li{height: 40px;line-height: 40px;border-bottom: 1px dashed #ccc;cursor: pointer;padding: 0 5px}
  .con_box .list li:hover{color: $ComColor03;background: #f2f2f2;}
  .con_box .list li span{display: inline-block;float: right;color: #666;font-size: 12px}

  .ul-list{
    border: solid #582362 1px;
  }

  .li-list{

    height: 30px;
  }

  .nav-ul{
    background-color: #ffffff;
    margin-left: 40px;

  }

  .nav-li {
    margin-bottom: 4px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    /*border-bottom: 0.5px solid #838383;*/
    background-color: #eff7ff;
    cursor: pointer;

  }
  .nav-li a{
     /*font-size: $fontSize04;*/
     /*color: $MainColor;*/
     color: #424242;
    font-size: 16px;
   }

  .nav-li a:hover{
    /*font-size: $fontSize04;*/
    /*color: $ComColor03;*/

    color: #0e99ed;
    text-decoration: none;
  }


  .nav-ul  .active {
    /*background-color: $ComColor03;*/
    background-color: #f8fbff;
  }
  .nav-ul  .active a{
    font-size: 16px;
      color: #0e99ed;
  }

.page{
  position: relative;
  height: 50px;
  right: 0px;
  left: 0px;
  bottom: 10px;
  z-index: 0;
  /*background-color: red;*/
}
.right-col{
  margin:0 auto;
}
  .right-div-page{
    margin-left: 20px;


    text-align: center;
  }
  .right-page{
    margin:0 auto;
    /*background-color: #0000fe;*/
    width: 500px;
    height: 40px;
    line-height: 50px;

  }

</style>
