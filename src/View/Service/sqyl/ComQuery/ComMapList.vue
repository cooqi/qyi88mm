<style lang="scss" scoped>
  @import "../../../../assets/css/sass/base.scss";
  /*去掉BMap信息样式*/
  .BMap_cpyCtrl{ display: none;}
  .anchorBL { display: none;}
  .map-mbox {
    width: 100%;
    padding: 30px 0;
    margin: 0;
    min-height: 654px;
    background-color: #fff;
  }

  .map-box {
    clear: both;
    width: 100%;
    padding: 0 10px;
    margin: 0;
    /*border: 1px solid #ccc;*/
  }

  .map-lt {
    float: left;
    width: 25%;
    height: 520px;
    padding: 0 15px 0 0;
    position: relative;
  }

  .map-lt .title {
    border-left: 4px solid #0e99ed;
  }

  .map-lt > .title > span {
    font-size: $fontSize02;
    color: #000;
    font-weight: bold;
    display: inline-block;
    padding-left: 10px;
  }

  .map-rt {
    float: right;
    width: 75%;
    height: 540px;
  }

  /*店铺列表*/
  ul#shopList {
    list-style: none;
    padding-left: 15px;
    height: 520px;
    overflow-y: scroll;
  }

  /*shops scrollbar start*/
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ul#shopList::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #fff;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ul#shopList::-webkit-scrollbar-track {
    /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
    border-radius: 8px;
    background-color: #e2e2e2;
  }

  /*定义滑块 内阴影+圆角*/
  ul#shopList::-webkit-scrollbar-thumb {
    border-radius: 8px;
    /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);*/
    background-color: #ccc;;
  }

  /*shops scrollbar end*/

  ul#shopList li {
    list-style: none;
    /*padding-top: 20px;*/
    padding: 10px 0;
    border-bottom: 1px dotted #e2e2e2;
  }

  ul#shopList li:first-child {
    padding-top: 20px;
  }

  ul#shopList li:last-child {
    border: 0;
  }

  .shop-box {
    width: 100%;
    font-size: 15px;
  }

  .shop-lt {
    float: left;
    height: auto;
    width: 40%;
    color: #000;
    text-align: left;
  }

  .shop-rt {
    float: right;
    width: 50%;
    color: #0e99ed;
    text-align: right;
    cursor: pointer;
    padding-right: 5px;
  }

  .shop-address {
    font-size: $fontSize01;
    color: #7e7e7e;
    padding-top: 5px;
  }

  /*分页*/
  .map-lt .page {
    position: absolute;
    bottom: 0;
    margin: auto;
  }

  .map-lt .page > ul {
    margin-bottom: 0;
  }
</style>

<template>
  <div>
    <SqylSubNav></SqylSubNav>
    <div class="content">
      <div class="map-mbox">
        <div class="map-box">
          <!--店铺列表-->
          <div class="map-lt">
            <div class="title">
              <span>汉阳区服务网点</span>
            </div>
            <div v-if="shops.length>0">
              <ul id="shopList">
                <li v-for="(item,index) in shops">
                  <div class="shop-box" style="overflow: hidden">
                    <div class="shop-lt">{{item.family_Name}}</div>
                    <div class="shop-rt" @click="onDetail(item.family_ID)">查看详情 ></div>
                  </div>
                  <div class="shop-address clearfix">地址：{{item.addrInfo}}</div>
                </li>
              </ul>
            </div>
            <div v-else>
              <p>暂无店铺信息...</p>
            </div>
          </div>
          <!--map-->
          <div class="map-rt">
            <MapView :m="giveData"></MapView>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>

<script>
  import SqylSubNav from '../../../../components/SqylSubNav.vue'
  import MapView from '../../../../components/Map.vue'
  import {mapGetters, mapActions} from 'vuex'
  import api from '../../../../fetch/api.js'
  export default{
    data(){
      return {
        shops: [],
        total: 200,
        pageSize: 10,
        pageIndex: 1,
        giveData: {  //vue2.0将数据定位对象的形式，实现父子组件的通信
          height: '100%',
          longitude: 114.2241881304,
          latitude: 30.5608298566
        },
        spinShow:true
      }
    },
    components: {
      SqylSubNav,
      MapView
    },
    mounted(){
      this.getData();
    },
    methods: {
      onDetail(id){
        this.$routeGo('sqylDetail', {shopId: id});
      },
      getData(){
        var that = this;
        //ajax
        api.get('ZhengfuFamilypension/FamilypensionScreemOneApi', {}).then(function (res) {
          that.shops = res.data;
          that.spinShow=false
        });
      }
    }

  }
</script>
<style scoped>

</style>
