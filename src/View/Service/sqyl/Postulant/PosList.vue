<style lang="scss" scoped>
  @import "../../../../assets/css/sass/base.scss";

  .mbox {
    width: 100%;
    padding: 30px 0;
    background-color: #fff;
    min-height: 654px;
    /*height: -moz-calc((100% - 298px) * 0.75);
    height: -webkit-calc((100% - 298px) * 0.75);
    height: calc((100% - 298px) * 0.75);*/
  }

  .box {
    clear: both;
    padding: 0 20px 10px;
    margin: 0;
  }

  .lt {
    float: left;
    width: 200px;
    padding: 0;
  }

  .rt {
    margin-left: 240px;
    /*width: 85%;*/
    height: auto;
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

  .btnReply {
    font-size: $fontSize03;
    text-align: center;
    padding: 10px 0;
    margin: 20px 0 0;
    width: 100%;
    color: #0e99ed;
    background-color: #eff7ff;
    border: 1px solid $ComColor01;
    cursor: pointer;
  }

  /*右边列表*/
  .rt .title {
    font-size: $fontSize03;
    color: #000;
    padding: 0 0 30px;
    border-bottom: 1px solid #e2e2e2;
  }

  ul#personList, ul#personList1 {
    list-style: none;
    -webkit-padding-start: 0;
    overflow: hidden;
  }

  ul#personList li, ul#personList1 li {
    list-style: none;
    float: left;
    width: -moz-calc((100% - 90px) / 4);
    width: -webkit-calc((100% - 90px) / 4);
    width: calc((100% - 90px) / 4);
    margin-right: 30px;
    margin-top: 15px;
    height: 330px;
    border: 1px solid #f5f5f5;
    padding: 3px;
  }

  ul#personList li p {
    margin: 0;
  }

  ul#personList li div:nth-child(1), ul#personList1 li div:nth-child(1) {
    text-align: center;
  }

  ul#personList li div:nth-child(1) > img, ul#personList1 li div:nth-child(1) > img {
    width: 100%;
    font-size: 0;
    vertical-align: middle;
  }

  ul#personList li p:nth-child(2), ul#personList1 li p:nth-child(2) {
    font-size: $fontSize03;
    color: #424242;
    padding: 20px 0 10px;
  }

  ul#personList li p:nth-child(3), ul#personList1 li p:nth-child(3) {
    font-size: 14px;
    color: #9d9d9d;
  }
  ul#personList img{width: 100%;height: 215px;}
</style>
<template>
  <!--志愿者列表/分为社区、高校、社会-->
  <div>
    <SqylSubNav></SqylSubNav>
    <div class="content">
      <div class="mbox">
        <div class="box">
          <div class="lt">
            <div id="PostNav">
              <div :class="cate==1?'selected':''" @click="loadData(1)">社区志愿者</div>
              <div class="hr"></div>
              <div :class="cate==2?'selected':''" @click="loadData(2)">高校志愿者</div>
              <div class="hr"></div>
              <div :class="cate==3?'selected':''" @click="loadData(3)">社会志愿者</div>
              <!--<li :class="cate==4?'selected':''" @click="loadData(4)">志愿者项目</li>-->
            </div>
            <div class="btnReply" @click="$routeGo('posjoin')">申请加入志愿者队伍</div>
          </div>
          <div class="rt">
            <div class="title">{{cateName}}</div>
            <div v-if="projects.length>0">
              <ul id="personList">
                <li v-for="(item,index) in projects" :style="(index+1)%4==0?'margin-right:0':''">
                  <div>
                    <img :src="item.logUrl" v-show="item.logUrl!==''">
                    <img src="../../../../assets/static_dby/img/demo.png" v-show="item.logUrl===''">
                  </div>
                  <p>{{item.name | isNullOrEmpty('', 10, item.name)}}</p>
                  <p>{{item.address | isNullOrEmpty('暂无描述', 50, item.address)}}</p>
                </li>
              </ul>
              <div class="clearfix"></div>
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
  import {mapGetters, mapActions} from 'vuex'
  import api from '../../../../fetch/api.js'
  export default{
    data(){
      return {
        cate: 1,
        cateName: '社区志愿者',
        projects: []
      }
    },
    components: {
      SqylSubNav
    },
    mounted(){
      this.loadData(this.$route.query.cate == undefined ? this.cate : this.$route.query.cate);
    },
    methods: {
      loadData(t) {
        var that = this;
        that.cate = t;
        if (that.$route.query.cate !== undefined) {
          that.$routeGo('/sqzyz', {cate: t}, true);
        }

        switch (t) {
          case 1:
            that.cateName = '社区志愿者';
            break;
          case 2:
            that.cateName = '高校志愿者';
            break;
          case 3:
            that.cateName = '社会志愿者';
            break;
          default:
            that.cateName = '社区志愿者';
            break;
        }
        that.projects = [];
        //ajax
        api.get('ZhengfuFamilypension/Gov_VolunteerApi', {
          'Family_ID': '0000000000000000'
        }).then(function (res) {
          var data = res.data;
          for (var i = 0; i < data.length; i++) {
            if (data[i].volunteerType == t) {
              that.projects.push(data[i]);
            }
          }
        });
      }
    },
    watch: {
      '$route' (to, from) {
        //console.log(this.$route.query.cate)
      }
    },

  }

</script>
