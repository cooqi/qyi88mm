<style lang="scss">
  @import "../../../../assets/css/sass/base.scss";

  .activity-index-box1 {
    min-height: 654px;
    background-color: #fff;
    padding: 30px 10px;
  }

  .box {
    clear: both;
    width: 100%;
  }

  .lt {
    float: left;
    width: 200px;
  }

  .rt {
    margin-left: 240px;
  }

  /*左边导航*/
  #PostNav {
    position: relative;
    -webkit-padding-start: 0;
  }

  #PostNav div {
    list-style: none;
    font-size: $fontSize03;
    text-align: center;
    color: #424242;
    background-color: #eff7ff;
    height: 50px;
    line-height: 50px;
    width: 100%;
    cursor: pointer;
  }

  #PostNav .selected {
    color: #0e99ed;
    background-color: #f8fbff;
    border-left: 5px solid #0e99ed;
  }

  #PostNav .hr {
    height: 3px;
    padding: 0;
    background-color: #fff;
  }

  /*新闻列表，图文（小）*/
  .activity-list1 {
  }

  .activity-row1 {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px dotted #ccc;
    /*padding-bottom: 10px;*/
    margin: 0 auto 10px;
  }

  .activity-row1:last-child {
    border: 0;
  }

  .activity-row1 .activity-lbox {
    width: 100px;
    height: 100px;
    transition: all .4s;
    position: relative;
    text-align: center;
    vertical-align: middle;
  }

  .activity-row1 .activity-lbox img {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -45px;
    margin-top: -45px;
  }

  .activity-row1 .activity-rbox {
    width: -moz-calc(100% - 100px);
    width: -webkit-calc(100% - 100px);
    width: calc(100% - 100px);
    transition: all .4s;
    cursor: pointer;
  }

  .activity-row1 .activity-rbox h3 {
    font-size: 15px;
    color: #424242;
    line-height: 20px;
    /*height: 40px;*/
    overflow: hidden;
    padding: 0px 10px;
    margin-top: 5px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .activity-row1 .activity-rbox p {
    color: #9d9d9d;
    overflow: hidden;
    padding: 0px 10px;
  }

  .activity-row1 .activity-rbox p:nth-child(2) {
    margin: 0;
  }

  .activity-row1:hover {
    background-color: #e2e2e2;
  }
</style>
<template>
  <div>
    <SqylSubNav></SqylSubNav>
    <div class="activity-index-box1">
      <div class="content">
        <div class="box">
          <div class="lt">
            <div id="PostNav">
              <div :class="cate==1?'selected':''" @click="loadData(1)">节假日活动</div>
              <div class="hr"></div>
              <div :class="cate==2?'selected':''" @click="loadData(2)">主题活动</div>
            </div>
          </div>
          <div class="rt">
            <div v-if="activitys.length>0">
              <div class="activity-list1">
                <div class="activity-row1" v-for="(item,index) in activitys"
                     @click="$routeGo('sqhddetail',{id:item.publish_ID})">
                  <div class="activity-lbox">
                    <img :src="item.logoUrl" :alt="item.title">
                  </div>
                  <div class="activity-rbox">
                    <h3>{{item.title | isNullOrEmpty('', 30, item.title)}}</h3>
                    <p><span class="news-time">{{item.createTime}}</span></p>
                    <p>{{item.descript | isNullOrEmpty('暂无描述', 120, item.descript)}}</p>
                  </div>
                </div>
              </div>
              <div class="page">
                <Page :total="total" :page-size="pageSize" show-elevator className="page-pos" @on-change="pageChange"
                      :current="pageIndex"></Page>
              </div>
            </div>
            <div v-else>
              <p>暂无活动...</p>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
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
        cate: 1,
        activitys: {},
        total: 0,
        pageSize: 10,
        pageIndex: 1
      }
    },
    mounted(){
      this.loadData(this.$route.params.type ? this.$route.params.type : this.cate);
    },
    components: {
      SqylSubNav
    },
    methods: {
      pageChange: function (curPageIndex) {
        this.pageIndex = curPageIndex;
        this.loadData(this.cate);
      },
      loadData: function (t) {
        var that = this;
        that.cate = t;

        //ajax
        api.get('govserv/publish', {
          'pubType': t,
          'pageIndex': that.pageIndex,
          'pageSize': that.pageSize
        }).then(function (res) {
          //页面为1选中
          /*$('.right-page li').each(function (index, item) {
           if (index == 1) {
           $(this).addClass('ivu-page-item-active')
           }
           if ($(this).hasClass('ivu-page-item-active')) {
           $(this).removeClass('ivu-page-item-active');
           }
           })*/
          if (res.code == 200) {
            that.activitys = res.data.newslist;
            that.total = res.data.totalCount;
          }
        });
      }
    },
    watch: {
      '$router'(to, from){

      }
    }
  }

</script>
