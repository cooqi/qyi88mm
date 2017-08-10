<style>
  .markerContent {
    margin: 0 0 5px 0;
    font-size: 12px;
    overflow-y: scroll;
    height: 138px;
  }

  /*shops scrollbar start*/
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #fff;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
    border-radius: 5px;
    background-color: #e2e2e2;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);*/
    background-color: #ccc;;
  }

  /*shops scrollbar end*/


  .BMapLabel {
    max-width: none;
  }

</style>
<template id="child-map">
  <div id="map" :style="style"></div>
</template>

<script>
  import api from '../fetch/api'
  import {utils} from '../config/utils'
  export default{
    data(){
      return {
        style: {
          width: '100%',
          height: this.m.height
//          height:this.m.height+'px'
        }
      }
    },
    props: ['m'],
    mounted(){
      var that = this;
      var map = new BMap.Map("map", {enableMapClick: false});
      var point = new BMap.Point(this.m.longitude, this.m.latitude);
      map.centerAndZoom(point, 13);
      map.enableScrollWheelZoom();
      map.enableKeyboard();
      var that = this;
      //ajax
      api.get('ZhengfuFamilypension/FamilypensionScreemOneApi', {}).then(function (res) {
        var shops = res.data;
        var x = 0, y = 0;
        $.each(shops, function (i, obj) {
          x = obj.addrInfoX, y = obj.addrInfoY;
          point = new BMap.Point(x, y);

          //创建覆盖物
          var sContent = "<div id='opts'><h4 style='margin:0 0 5px 0;padding:5px;'>" + obj.family_Name + "<a style='display: inline-block;font-size: 14px;margin-left: 5px;' href='javascript:;' id='shopInfo' data-id='" + obj.family_ID + "'>详情</a></h4>"
          sContent += "<p style='margin:0 0 5px 0;font-size:13px;'>联系电话：" + obj.phone + "</p>"
          sContent += "<p style='margin:0 0 5px 0;font-size:13px;'>地址：" + obj.addrInfo + "</p>"
          sContent += "<p class='markerContent'>简介：" +(utils.isEmpty(obj.explain)?'暂无描述':obj.explain)+ "</p>"
          sContent += "</div>";
          var fourOpts = {
            width: 300,
            height: 200
          }
          var marker = new BMap.Marker(point);
          var infoWindow = new BMap.InfoWindow(sContent, fourOpts);  // 创建信息窗口对象
          map.addOverlay(marker);
          marker.addEventListener("click", function () {
            this.openInfoWindow(infoWindow);
            //处理infoWindow中的元素事件
            document.querySelector('#shopInfo').onclick = function () {
              that.shopDetail(this.getAttribute('data-id'));
            }
          });
          //添加标注
          var label = new BMap.Label(obj.family_Name,{offset:new BMap.Size(20,-10)});
          marker.setLabel(label);
        });

      });
    },
    methods: {
      shopDetail(id){
        this.$routeGo('sqylDetail', {shopId: id});
      }
    }
  }
</script>
