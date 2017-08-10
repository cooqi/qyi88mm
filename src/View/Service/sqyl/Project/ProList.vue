<style lang="scss" scoped>
  @import "../../../../assets/css/sass/base.scss";

  .activity-index-box {
    min-height: 654px;
    background-color: #fff;
  }

  .sqxm {
    padding: 10px;
  }

  /*服务项目*/
  .sqxm-list {
    margin: 0 auto;
    padding: 0;
  }

  .sqxm-row {
  }

  .sqxm-row .sqxm-box {
    list-style: none;
    float: left;
    width: -moz-calc((100% - 90px) / 4);
    width: -webkit-calc((100% - 90px) / 4);
    width: calc((100% - 90px) / 4);
    padding: 6px;
    margin: 30px 30px 0 0;
  }

  .sqxm-row .sqxm-box:nth-child(1),
  .sqxm-row .sqxm-box:nth-child(2),
  .sqxm-row .sqxm-box:nth-child(3),
  .sqxm-row .sqxm-box:nth-child(4) {
    margin-top: 0;
  }

  .sqxm-row .sqxm-box img {
    width: 100%;
    height: 200px;
  }

  .sqxm-row .sqxm-box h3 {
    font-size: 15px;
    color: #424242;
    line-height: 20px;
    height: 40px;
    overflow: hidden;
    padding: 0px 10px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .sqxm-row .sqxm-box p {
    color: #9d9d9d;
    overflow: hidden;
    padding: 0px 10px;
  }

  .sqxm-row .sqxm-box p span.sqxm-date {
    float: left;
  }

  .sqxm-row .sqxm-box p span.sqxm-go {
    float: right;
  }

  .sqxm-row .sqxm-box {
    cursor: pointer;
    background: #f2f2f2;
    /*padding-bottom: 5px;*/
  }

  .sqxm-row .sqxm-box:hover {
    box-shadow: 2px 2px 12px 1px #a8daff;
  }

  .sqxm-row .sqxm-box:hover p span.sqxm-go {
    color: #0e99ed;
  }

  /*分类菜单*/
  dl, table, p {
    margin: 0;
    padding: 0
  }

  .shop-head-box {
    /*margin-top: 10px;*/
    background: #fff;
    padding: 20px 0 1px;
  }

  .menu {
    overflow: hidden;
    background: #fff;
    height: 50px;
  }

  .menu .menu-left {
    float: left;
    width: 50%;
  }

  .menu .menu-right {
    float: right;
    width: 40%;
    height: 30px;
    margin: 10px
  }

  .classify {
    margin-bottom: 15px;
    padding: 0 10px
  }

  .classify dl {
    overflow: hidden;
    border: 1px solid #f2f2f2;
    color: #806f66;
    margin-top: 3px;
    font-size: $fontSize01
  }

  .classify dl dt {
    background: #F7F5F5;
    float: left;
    width: 60px;
    text-align: center;
    margin-right: 15px;
    height: 30px;
    line-height: 30px;
  }

  .classify dl dd {
    float: left;
    margin-right: 10px;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
  }

  .classify dl dd.on {
    color: $MainColor;
  }

  .classify dl dd.act {
    font-weight: bold
  }

  .classify dl.mainClass dd {
    margin-right: 40px
  }
</style>

<template>
  <div>
    <SqylSubNav></SqylSubNav>
    <div class="activity-index-box">
      <div class="content">
        <div class="easyLife">
          <div class="shop-head-box">
            <div class="classify">
              <table width="100%" style="margin-top: 10px">
                <tr>
                  <td style="background: #F7F5F5;text-align: center"><p :class="sublistIndex==-1?'act':''" @click="loadData('0000000000000000',1)" style="cursor: pointer;width: 60px;line-height: 35px;color: #806f66;">
                    全部</p></td>
                  <td>
                    <dl style="padding: 0 5px;margin: 0">
                      <dd class="main" :class="['nav'+index,index==navIndex?'on':'']" @click="link(index,item.family_ID)"
                          v-for="(item,index) in comms" v-text="item.family_Name"></dd>
                    </dl>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="sqxm">
          <div class="sqxm-list" v-if="projects.length>0">
            <div>
              <ul class="sqxm-row">
                <li class="sqxm-box" v-for="(item,index) in projects"
                    :style="(index+1)%4==0?'margin-right:0':''">
                  <img :src="item.logoUrl" :alt="item.title">
                  <h3>{{item.title | isNullOrEmpty('', 10, item.title)}}</h3>
                  <p><span class="sqxm-data">{{item.CreateTime}}</span><span class="sqxm-go"
                                                                             @click="$routeGo('sgxmdetail',{id:item.id})">查看</span>
                  </p>
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
          </div>
          <div v-else>
            <p>暂无社工项目...</p>
          </div>
        </div>
      </div>
    </div>

    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>

<script>
  import SqylSubNav from '../../../../components/SqylSubNav.vue'
  import api from '../../../../fetch/api.js'
  export default{
    data(){
      return {
        comms: [],
        projects: [],
        Nav: [],
        navIndex: -1,
        sublistIndex: -1,
        spinShow:true
      }
    },
    mounted(){
      this.loadData('0000000000000000');
      this.loadComm();
    },
    components: {
      SqylSubNav
    },
    methods: {
      loadComm: function () {
        var that = this;
        api.get('ZhengfuFamilypension/FamilypensionScreemOneApi', {}).then(function (res) {
          that.comms = res.data.filter(function (x) {
            return x.pensionType== 1;
          });
          that.spinShow=false
        });
      },
      loadData: function (id) {
        var that = this;
        $('dd.main').removeClass('on')
        that.projects = [];
        api.get('ZhengfuFamilypension/Gov_ommunityApi', {Family_ID: id}).then(function (res) {
          var data = res.data;
          for (var i = 0; i < data.length; i++) {
            if (data[i].pubType == 2) {
              that.projects.push(data[i]);
            }
          }
        });
      },
      link(i, id, type){
        this.navIndex = i
        $('.nav' + this.navIndex).addClass('on').siblings().removeClass('on')

        this.sublistIndex = -1;
        //ajax
        this.loadData(id);
      }
    }
  }
</script>
