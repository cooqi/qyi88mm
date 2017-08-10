<style lang="scss" scoped>
  @import "../../../../assets/css/sass/base.scss";

  .detail {
    padding: 40px 0 80px;
  }

  .box {
    height: 578px;
  }

  .lt {
    float: left;
    width: 500px;
  }

  .rt {
    margin-left: 540px;
  }

  /*返回*/
  .back {
    height: 58px;
    padding-left: 10px;
    margin-bottom: 66px;
    border-left: 4px solid #0e99ed;
  }

  .back p:nth-child(1) {
    font-size: $fontSize04;
    color: #0e99ed;
    cursor: pointer;
  }

  .back p:nth-child(2) {
    font-size: $fontSize02;
    color: #000;
  }

  /*公司信息*/
  .company {
    border-top: 1px solid $ComColor01;
    border-bottom: 1px solid $ComColor01;
    margin-bottom: 10px;
    background-color: #fefefe;
  }

  .company dl {
    padding: 20px 0 20px 20px;
  }

  .company dl dt {
    float: left;
    width: 104px;
  }

  .company dl dt img {
    width: 84px;
    height: 84px;
  }

  .company dl dd {
    margin-left: 124px;
  }

  .company dl dd p:nth-child(1) {
    font-size: $fontSize04;
    color: #0e99ed;
  }

  .company dl dd p:nth-child(1) span, .company dl dd p:nth-child(2), .company dl dd p:nth-child(3) {
    font-size: $fontSize02;
    color: #000;
  }

  .map-detail {
    width: 500px;
    height: 236px;
    border: 2px solid #e2e2e2;
  }

  /*公司图文描述*/
  .rt .title p, .service-title-box p {
    font-size: $fontSize04;
    color: #0e99ed;
  }

  .rt .title p span, .company-intro p:nth-child(2), .service-title-box p span {
    font-size: $fontSize02;
    color: #000;
  }

  .rt .title p span, .service-title-box p span {
    margin-left: 10px;
  }

  .company-intro, .company-pics {
    padding: 20px;
    border-top: 1px solid $ComColor01;
    background-color: #fefefe;
  }

  .company-intro p {
    text-align: justify
  }

  .company-pics {
    border-bottom: 1px solid $ComColor01;
  }

  .company-pics .pics {
  }

  .company-pics .pics img {
    width: 300px;
    height: 254px;
  }

  .company-pics .pics img:first-child {
    margin-right: 15px
  }

  /*服务项目*/
  .service-list {
    margin: 0 auto;
    border-top: 1px solid $ComColor01;
    border-bottom: 1px solid $ComColor01;
    padding: 20px;
    background-color: #eef2f7;
    /*filter:alpha(Opacity=30);-moz-opacity:0.3;opacity: 0.3;*/
  }

  .service-title-box {
    overflow: hidden;
    padding: 0 0 20px;
  }

  .service-row {
  }

  .service-row .service-box {
    list-style: none;
    float: left;
    width: -moz-calc((100% - 90px) / 4);
    width: -webkit-calc((100% - 90px) / 4);
    width: calc((100% - 90px) / 4);
    padding: 0;
    margin: 30px 30px 0 0;
    background: none !important;
  }

  .service-row .service-box:nth-child(1),
  .service-row .service-box:nth-child(2),
  .service-row .service-box:nth-child(3),
  .service-row .service-box:nth-child(4) {
    margin-top: 0;
  }

  .service-row .service-box img {
    width: 100%;
    height: 200px;
  }

  .service-row .service-box p {
    font-size: $fontSize02;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0px 10px;
  }

  .service-row .service-box p:nth-child(2) {
    margin-top: 10px;
  }

  .service-row .service-box p span.price {
    float: left;
    font-size: $fontSize03;
    color: #389bd7;
  }

  .service-row .service-box p span.go {
    float: right;
    font-size: $fontSize02;
    color: #fff;
    background-color: $ComColor03;
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
  }

  .service-row .service-box {
    cursor: pointer;
    background: #f2f2f2;
    padding-bottom: 5px;
  }

  .service-row .service-box:hover {
    box-shadow: 2px 2px 12px 1px #a8daff;
  }

</style>

<template>
  <div>
    <SqylSubNav></SqylSubNav>
    <div class="content">
      <div class="detail">
        <div class="box">
          <div class="lt">
            <div class="back">
              <p @click="$routeGo('sqyl')">返回上级</p>
              <p>侨亚社区服务网点</p>
            </div>
            <div>
              <h4>侨亚社区服务公司</h4>
              <div class="company">
                <dl>
                  <dt><img :src="info.logoUrl"/></dt>
                  <dd>
                    <p>基本信息<span> Basic Info</span></p>
                    <p>门店信息：<span>{{info.addrInfo}}</span></p>
                    <p>服务次数：<span>20次</span></p>
                  </dd>
                </dl>
              </div>
              <div class="map-detail">
                <div id="mapDetail" style="width: 100%;height: 100%;"></div>
              </div>
            </div>
          </div>
          <div class="rt">
            <div class="company-intro">
              <div class="title">
                <p>公司简介<span>Company Profile</span></p>
              </div>
              <p>
                侨亚社区养老服务中心以“公益、共建、和谐、服务”为经营理念，致力于建设成社区老人“养老之家”与“养老顾问”。侨亚社区养老服务中心以“公益、共建、和谐、服务”为经营理念，致力于建设成社区老人“养老之家”与“养老顾问”。侨亚社区养老服务中心以“公益、共建、和谐、服务”为经营理念，致力于建设成社区老人“养老之家”与“养老顾问”。侨亚社区养老服务中心以“公益、共建、和谐、服务”为经营理念，致力于建设成社区老人“养老之家”与“养老顾问”。针对社区健康群体开侨亚社区养老服务中心以
              </p>
            </div>
            <div class="company-pics">
              <div class="title">
                <p>公司概况<span>Pictures</span></p>
              </div>
              <div class="pics">
                <img src="../../../../assets/static_dby/img/demo.png"/>
                <img src="../../../../assets/static_dby/img/demo.png"/>
              </div>
            </div>
          </div>
        </div>
        <div class="service-list">
          <div class="service-title-box">
            <p>自营项目<span>Company Project</span></p>
          </div>
          <ul class="service-row">
            <li class="service-box" @click="serDetail(4,'D21AOO3359A0000A')" v-for="(item,index) in 10"
                :style="(index+1)%4==0?'margin-right:0':''">
              <img src="../../../../assets/static_dby/img/demo.png" alt="">
              <p>家政服务-住家保姆</p>
              <p>3年护理经验，主要负责为两位老人做饭、做家务</p>
              <p><span class="price">￥3400/月</span><span class="go">直接预定</span></p>
            </li>
          </ul>
          <!--<div class="list-row">
            <div class="list-box" @click="$routeGo('sqhddetail',{id:1})">
              <img src="../../../../assets/static_dby/img/demo.png" alt="">
              <p>家政服务-住家保姆</p>
              <p>3年护理经验，主要负责为两位老人做饭、做家务</p>
              <p><span class="price">￥3400/月</span><span class="go">直接预定</span></p>
            </div>
          </div>-->
          <div class="clearfix"></div>
        </div>
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
        isShow: true,
        info: {},
        map: {
          longitude: 0,
          latitude: 0,
          addr: ''
        }
      }
    },
    mounted(){
      this.loadDetail();
    },
    components: {
      SqylSubNav
    },
    methods: {
      loadDetail(){
        var that = this;
        //ajax
        api.get('ZhengfuFamilypension/FamilypensionDetApi', {
          'Family_ID': that.$route.params.shopId
        }).then(function (res) {
          if (res.data.length > 0) {
            that.info = res.data[0];
            that.map.longitude = that.info.addrInfoX;
            that.map.latitude = that.info.addrInfoY;
            that.map.addr = that.info.addrInfo;
            that.renderMap();
          }
        });
      },
      renderMap(){
        // 百度地图API功能
        var m_point = new BMap.Point(this.map.longitude, this.map.latitude);
        var content = this.map.addr;

        var mp = new BMap.Map("mapDetail");
        mp.centerAndZoom(m_point, 15);

        // 复杂的自定义覆盖物
        function ComplexCustomOverlay(point, text, mouseoverText) {
          this._point = point;
          this._text = text;
          this._overText = mouseoverText;
        }

        ComplexCustomOverlay.prototype = new BMap.Overlay();
        ComplexCustomOverlay.prototype.initialize = function (map) {
          this._map = map;
          var div = this._div = document.createElement("div");
          div.style.position = "absolute";
          div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
          div.style.backgroundColor = "#EE5D5B";
          div.style.border = "1px solid #bc3b3a";
          div.style.color = "#fff";
          div.style.height = "20px";
          div.style.padding = "0 5px";
          div.style.whiteSpace = "nowrap";
          div.style.MozUserSelect = "none";
          div.style.fontSize = "12px"
          var span = this._span = document.createElement("span");
          div.appendChild(span);
          span.appendChild(document.createTextNode(this._text));
          var that = this;

          var arrow = this._arrow = document.createElement("div");
          arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
          arrow.style.position = "absolute";
          arrow.style.width = "11px";
          arrow.style.height = "10px";
          arrow.style.top = "18px";
          arrow.style.left = "10px";
          arrow.style.overflow = "hidden";
          div.appendChild(arrow);
          mp.getPanes().labelPane.appendChild(div);

          return div;
        }
        ComplexCustomOverlay.prototype.draw = function () {
          var map = this._map;
          var pixel = map.pointToOverlayPixel(this._point);
          this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + 10 + "px";
          this._div.style.top = pixel.y - 50 + "px";
        }

        // 创建标注
        var marker = new BMap.Marker(m_point);
        mp.addOverlay(marker);

        //将自定义标注加入到地图
        var myCompOverlay = new ComplexCustomOverlay(m_point, content);
        mp.addOverlay(myCompOverlay);
      },
      serDetail(cate, servID){
        if (cate == 4) {
          this.$routeGo('/SerApp', {id: servID, type: cate}, true);
        } else if (cate == 6) {
          this.$routeGo('/LWappointment', {id: servID}, true);
        }
      }
    }
  }
</script>
