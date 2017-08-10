<style lang="scss" scoped>
  /*详情页面*/
  @import "../../assets/css/sass/base.scss";

  .life{
    background: #fff;
    margin: 30px auto;
    padding: 30px;
  }
  .life > h4 {
    line-height: 40px;
    margin-bottom: 30px;
    font-size: 17px;
    font-weight: normal;
    color: #666;
    border-bottom: 2px solid #eee;
  }
  .life > h4 > span {
    margin-left: 10px;
    font-size: 17px;
    font-weight: normal;
    color: #ccc;
    vertical-align: -1px;
  }

  .details {
    height: auto;
    margin-bottom: 30px;
    overflow: hidden;
  }
  .details dl {
    float: left;
    height: auto;
    overflow: hidden;
  }
  .details dl dt {
    float: left;
    width: 150px;
    height: 160px;
    margin: 0 20px 20px 20px;
    overflow: hidden;
  }
  .details dl dt img {
    width: 100%;
  }
  .details dl dd {
    line-height: 30px;
    margin-left: 200px;
    text-align: left;
    color: #666;
  }
  .details dl dd.tittle_id {
    color: #333;
  }
  .details dl dd.address i {
    margin-left: 30px;
    font-style: normal;
    color: #f19725;
    cursor: pointer;
  }
  .details dl dd p {
    display: inline-block;
    width: 200px;
    height: 9px;
    line-height: 30px;
    margin-left: 14px;
    margin-right: 10px;
    vertical-align: middle;
    background-color: #f0f0f0;
    border-radius: 9px;
  }
  .details dl dd > div {
    display: inline-block;
  }
  #map {
    display: none;
    width: 96%;
    height: 400px;
    margin: 20px auto;
    background-color: #2bb2f1;
  }
  .company {
    padding: 0 20px 20px;
    height: auto;
    overflow: hidden;
  }
  .company dl {
    float: left;
    height: auto;
    margin-bottom: 20px;
    text-align: center;
    overflow: hidden;
  }
  .company dl dt {
    width: 90px;
    height: 90px;
    overflow: hidden;
  }
  .company dl dt img {
    width: 100%;
  }
  .company dl dd {
    line-height: 40px;
    color: #f19725;
    cursor: pointer;
  }
  .company p {
    line-height: 30px;
    text-indent: 29px;
    color: #666;
  }
  .company .images {
    display: none;
    clear: both;
    width: 100%;
    height: auto;
    margin: 20px 0;
    overflow: hidden;
  }
  .company .images img {
    width: 100%;
  }

  .list {
    height: auto;
    margin: 0 10px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
  }
  .list .list-img {
    float: left;
    width: 100px;
    height: 100px;
  }
  .list .list-img img {
    width: 100%;
    height: 100%;
  }
  .list-box{
    margin-left: 130px;
    color: #666;
    font-size: 14px;
    font-family: 微软雅黑,宋体;
  }
  .list-top{
    height:40px;
    line-height: 40px;
    margin-bottom: 10px;
  }
  .list-bottom .last{
    float: right;
    padding: 2px 10px;
    margin: 1px;
    color: #fff;
    background-color: #f19725;
  }
</style>


<template>
  <div class="life">
    <h4>店铺详情 <span>STOP DETAILS</span></h4>

    <div class="details">
      <dl>
        <dt><img src="../../assets/static_zc/img_zc/demo.png" alt=""></dt>
        <dd class="tittle_id">侨亚社区服务公司</dd>
        <dd class="address">门店地址： <span>湖北省 武汉市 武昌区 秦园路社区</span> <i @click='show()'>查看地图</i></dd>
        <dd>服务次数： <span data-bind="text:store().Evals">20</span>次</dd>
      </dl>
    </div>

    <h4>公司简介 <span>COMPANY PROFILE</span></h4>
    <div class="company">
      <p data-bind="html:store().Introduce">侨亚社区养老服务中心以“公益、共建、和谐、服务”为经营理念，致力于建设成社区老人“养老之家”与“养老顾问”。针对社区健康群体开展以老年社交、康复护理为主集中养老服务；针对社区家庭养老开展以“爱家养老”互联网平台为技术支撑的生活照料、上门护理为主的社会专业养老服务；针对特定群体提供个性化的政府购买服务解决方案；针对医养需求矛盾，通过整合老年病专业治疗、防治的本地化医疗资源，以社区康复门诊服务为基础，建立“预防保健—疾病治疗—慢病康复—老年护理”的整合型医疗保健体系，提供急症转诊、社区护理、预防保健及社区康复等四大专业康复护理服务。</p>
    </div>
    <div id="map"></div>

    <h4>自营项目 <span>INDEPENDENT PROJECTS</span></h4>
    <ul>
      <li  class="list">
        <div class="list-img">
          <img src="../../assets/static_zc/img_zc/demo.png" alt="">
        </div>
        <div class="list-box">
          <div class="list-top">
            <div style="float: left;">机构养老-蔡甸养老院</div>
            <div style="float: right; color:#f19725;">￥<span>400</span></div>
          </div>
          <div class="list-bottom">
            <div style="float: left">
              服务标题：<span>蔡甸养老院</span>
            </div>
            <div class="last">
              直接预定
            </div>
          </div>
        </div>
      </li>
      <li  class="list">
        <div class="list-img">
          <img src="../../assets/static_zc/img_zc/demo.png" alt="">
        </div>
        <div class="list-box">
          <div class="list-top">
            <div style="float: left;">机构养老-蔡甸养老院</div>
            <div style="float: right; color:#f19725;">￥：400</div>
          </div>
          <div class="list-bottom">
            <div style="float: left">
              服务标题：<span>蔡甸养老院</span>
            </div>
            <div class="last">
              直接预定
            </div>
          </div>
        </div>
      </li>
      <li  class="list">
        <div class="list-img">
          <img src="../../assets/static_zc/img_zc/demo.png" alt="">
        </div>
        <div class="list-box">
          <div class="list-top">
            <div style="float: left;">机构养老-蔡甸养老院</div>
            <div style="float: right; color:#f19725;">￥：400</div>
          </div>
          <div class="list-bottom">
            <div style="float: left">
              服务标题：<span>蔡甸养老院</span>
            </div>
            <div class="last">
              直接预定
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import api from  '../../fetch/api'
  export default{
    data(){
      return{
        isShow:true,
        ServClass:'',
        Item_ID:'',
        data:{}
      }
    },
    methods: {
      show:function(){
        this.isShow = !this.isShow;
        if(this.isShow){
          $('#map').show();
        }else{
          $('#map').hide();
        }
      },
      getdata(){
        var _this=this;
        var pamars={
          Item_ID:this.Item_ID,
          ServClass:this.ServClass,
        }
        api.get('family/Malldetail',pamars)
          .then(function(rsp){
            _this.data=rsp.data
          })
      }
    },
    mounted(){
      this.Item_ID=this.$route.query.id
      this.ServClass=this.$route.query.type
      this.getdata()
    }
  }
</script>
