<style lang="scss" scoped>
  @import "../../assets/css/sass/base.scss";

  i{
    font-style: normal;
  }
  dl,dt,dd{
    font-weight: normal;
  }
  label{
    font-weight: normal;
  }
  .life{
    background: #fff;
    margin: 30px auto;
    padding: 30px;
    font-family: 微软雅黑,宋体;
  }
  .life > h4 {
    line-height: 40px;
    margin-bottom: 30px;
    font-size: 17px;
    font-weight: normal;
    color: #666;
    border-bottom: 2px solid #eee;
  }
  .box{
    height: auto;
    margin-bottom: 30px;
    overflow: hidden;
  }
  .box li{
    float: left;
    margin-right: 10px;
    font-size: 15px;
    color: #646363;
  }
  .box li:last-child{
    color: #999;
  }
  .produce {position: relative; height: auto; margin-bottom: 20px; overflow: hidden;}
  .produce > div {margin-left: 305px; margin-bottom: 18px; color: #666;}
  .produce .img {float: left; width: 275px; height: 325px; margin: 0; overflow: hidden;}
  .produce .img img {width: 100%;}
  .produce > div label {width: 80px; margin-right: 10px; vertical-align: top;}
  .produce > div > dl dt {font-size: 24px; color: #333;}
  .produce > div > dl dd {margin-top: 10px; color: #999;}
  .produce > div > dl dd span {margin-right: 20px;}
  .produce > div > dl dd span i {font-style: normal;}
  .produce > div > ul {height: auto; overflow: hidden;}
  .produce > div > ul li {float: left;}
  .produce > div.style1 > ul, .produce > div.style2 > ul {width: 400px; display: inline-block; vertical-align: middle;}
  .produce > div.style1 > ul li {margin-right: 10px; margin-bottom: 10px; padding: 1px 10px; color: #fff; background-color: #444;}
  .produce > div.style2 > ul li {margin-right: 10px; padding: 1px 10px; background-color: #fefaf4; border: 1px solid #f19725; border-radius: 21px;}
  .produce > div > span.style1 {padding: 3px 10px; color: #f19725; background-color: #fefaf4; border: 1px dashed #f19725;}
  .produce > div > span.style2 {display: none; width: 130px; padding: 3px 11px;}
  .produce > div > span.style3 {margin-left: 20px;}
  .produce > div > span.style3 i {font-size: 16px; font-style: normal; color: #ff010d;}


  .require {position: absolute; top: 0; right: 0; width: 220px; height: 292px; padding: 38px 10px 0; background: url("../../assets/static_zc/img_zc/img13.png") no-repeat 4px 73px;}
  .require ul {height: auto; overflow: hidden;}
  .require ul li {width: 100%; height: auto; margin-bottom: 24px; font-size: 17px;}
  .require ul li.style1, .require ul li.style2 {width: 183px; margin-left: 10px; color: #333;}
  .require ul li.style1 span, .require ul li.style2 span {display: block;}
  .require ul li.style1 {}
  .require ul li.style1 span {font-size: 20px; color: #ff010d;}
  .require ul li.style2 {font-size: 14px;}
  .require ul li.style2 span {color: #f19725;}
  .require a {display: inline-block; float: none; width: 173px; height: 35px; line-height: 35px; margin-left: 15px; text-align: center; font-size: 17px; color: #fff; background-color: #f19725;}

  /*服务样式*/
  .star1, .star2, .star3, .star4, .star5 {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    vertical-align: -1px;
    background: url('../../assets/static_zc/img_zc/star.png') no-repeat 0 0;
  }
  .star2 {width: 30px;}
  .star3 {width: 45px;}
  .star4 {width: 60px;}
  .star5 {width: 75px;}

  /*认证*/
  .grade1, .grade2, .grade3 {display: inline-block; width: 70px; height: 60px; margin: 0 20px;}
  .grade3 {width: 92px;}
  .grade1 {background: url("../../assets/static_zc/img_zc/img14.png") no-repeat 0 0;}
  .grade2 {background: url("../../assets/static_zc/img_zc/img15.png") no-repeat 0 0;}
  .grade3 {background: url("../../assets/static_zc/img_zc/img16.png") no-repeat 0 0;}

  /*风采*/
  .elegant, .recommend{width: 1092px; margin: 0 auto;}
  .elegant .slick-slide {height: 156px; padding: 0 20px; overflow: hidden;}
  .elegant .slick-slide img {width: 234px; height: auto;}

  //服务流程
  .life > ul {height: auto; overflow: hidden;}
  .life > ul li {float: left; width: 50%; height: 44px; line-height: 44px; text-align: center; font-size: 18px; color: #666; border: 1px solid #eee; cursor: pointer;}
  .life > ul li.action {color: #333; background-color: #eee;}
  .service {height: auto; padding: 20px 0; overflow: hidden;}
  .service .now {height: auto; overflow: hidden;}
  .service .now table {width: 100%; border: 1px solid #eee; border-collapse: collapse;}
  .service .now table td {line-height: 40px; text-indent: 20px; border: 1px solid #eee;}
  .service .now table td > span {padding: 2px 8px; color: #fff; background-color: #444;}
  .service .now table td > ul {padding: 10px 0;}
  .service .now table td > ul > li {line-height: 28px; font-size: 13px; color: #777;}
  .service .now table td > ul > li > span {color: #333;}
  .service .now table td > ul > li > span i {margin-right: 5px; padding: 2px 8px;color: #fff; font-style: normal; background-color: #444;}
  .service .now > dl {height: auto; margin-top: 20px; color: #666; overflow: hidden;}
  .service .now > dl dt {float: left; width: 130px; line-height: 38px; text-indent: 20px;}
  .service .now > dl dd {height: auto; line-height: 38px; margin-left: 130px; margin-bottom: 15px;  overflow: hidden;}
  .service .now > dl dd span {float: left; width: 85px; height: 28px; line-height: 28px; margin-top: 5px; margin-right: 15px; text-align: center; color: #fff; background-color: #444;}

  /*更多推荐*/
  .recommend .slick-slide {padding: 0 30px;}
  .recommend .slick-slide img {width: 100%;}
  .recommend .slick-slide dl {overflow: hidden;}
  .recommend .slick-slide dl dt {width: 160px; height: 180px; overflow: hidden;}
  .recommend .slick-slide dl dd {line-height: 18px; margin-top: 6px;}
  .recommend .slick-slide dl dd span {float: right; margin-right: 4px; font-size: 12px;}
  .recommend .slick-slide dl dd span.style {float: left; font-size: 13px; color: #f19725;}
  .recommend .slick-slide dl dd span i {font-style: normal;}

  /*评论*/
  .comment_list {margin: 20px 0;}
  .list_box {margin: 20px 0; padding: 20px; height: auto; border: 1px solid #ccc; overflow: hidden;}
  .list_box > p {height: 30px; line-height: 30px; padding: 0 20px; color: #333; background-color: #eee;}
  .list_box > p > span {display: inline-block; float: left; width: 300px; line-height: 30px}
  .list_box > p > span.style {float: right; text-align: right; color: #777;}
  .list_box > div {padding: 10px 20px;}
  .list_box > div i {float: left; line-height: 30px; font-weight: normal; color: #f19725;}
  .list_box > div p {float: left; line-height: 30px;}
  .list_box > div span {margin: 0 10px; padding: 1px 10px; color: #666; background-color: #fefaf4; border: 1px solid #f19725; border-radius: 21px;}


  /*底部为固定定位  全局*/
  /*position: fixed;*/
  .la_bottom { bottom: 0; width: 100%; height: auto; background-color: #fff; box-shadow: 0 0 5px rgba(0, 0, 0, 0.4); z-index: 5; overflow: hidden;}
  .la_bottom ul {width: 1200px; height: auto; margin: 0 auto; overflow: hidden;}
  .la_bottom ul li {float: left; width: 27.3%; height: 50px; padding: 0 3%; line-height: 50px; text-align: center; color: #666;}
  .la_bottom ul li.style {text-align: left; font-size: 16px;}
  .la_bottom ul li span {margin-left: 10px; color: #f19725;}
  .la_bottom ul li.style span {font-size: 17px; color: #ff010d;}
  .la_bottom ul li a {display: inline-block; float: right; width: 150px; height: 30px; line-height: 30px; margin-top: 10px; color: #fff; background-color: #f19725; border-radius: 3px;}
  .la_bottom ul li a:hover {box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);}

  /*悬浮*/
  .suspend {display: inline-block; position: fixed; right: 0; top: 40%; cursor: pointer;}
</style>



<template>
  <div>
    <div class="life">
      <ol class="box">
        <li>劳务市场</li>
        <li>></li>
        <li>阿姨详情</li>
      </ol>
      <div class="produce">
        <div class="img">
          <img src="../../assets/static_zc/img_zc/demo.png" alt="tu" />
        </div>

        <div>
          <dl>
            <dt>李娜</dt>
            <dd>
              <span><i>21</i>岁</span>
              <span>籍贯：<i>北京市</i></span>
            </dd>
          </dl>
        </div>

        <div class="style1">
          <label>提供服务：</label>

          <ul>
            <li>白班保姆</li>
            <li>居室清洁</li>
            <li>临时照料</li>
            <li>白班保姆</li>
            <li>居室清洁</li>
            <li>临时照料</li>
            <li>白班保姆</li>
            <li>居室清洁</li>
            <li>临时照料</li>
          </ul>
        </div>

        <div class="style2">
          <label>用户评价：</label>

          <ul>
            <li data-bind="text:Advantage">勤快、认真、做事负责</li>
          </ul>
        </div>

        <div>
          <span class="grade1"></span>
          <span class="grade2"></span>
        </div>

        <div>
          <label>联系方式：</label>

          <span class="style1">预约成功后即可查看</span>

          <!--成功后查看-->
          <!--<span class="style2">13838384438</span>-->

          <span class="style3">已有 <i>53</i> 次浏览</span>
        </div>

        <div class="require">
          <ul>
            <li>服务要求：<i class="star5"></i></li>
            <li class="style1">薪资要求：<span>1.00</span></li>
            <li class="style2">优惠信息：<span>在线支付享受优惠劵减免</span></li>
          </ul>

          <a class="right">快速预约</a>
        </div>
      </div>

      <h4>特殊要求 <span>APECIAL REQUIREMENTS</span></h4>

      <p>下雨天不外出</p>
    </div>

    <div class="life">
      <h4>自我介绍 <span>DEMAND AN INTRODUCTION</span></h4>
      <p>做事认真负责</p>
    </div>

    <div class="life">
      <h4>风采展示 <span>ELEGANT APPEARANCE</span></h4>
      <div class="elegant">
        <div><img src="" alt="" /></div>
      </div>
    </div>

    <div class="life">
      <ul>
        <li class="action">当前服务介绍</li>
        <li>阿姨其他服务</li>
      </ul>

      <div class="service">
        <div class="now">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="width: 200px;">服务类型</td>

              <td>
                <span>生活照料</span>
                <span>居室清洁</span>
              </td>
            </tr>

            <tr>
              <td>服务内容</td>

              <td data-bind="foreach:services">
                <span data-bind="text:$data">1.内窗玻璃清洁
                  2.电器表面清洁
                  3.家具清洁
                  4.厨房清洁
                  5.沙发除尘
                  6.浴室清洁
                  7.卫生间清洁</span>
              </td>
            </tr>

            <tr data-bind="with:labour">
              <td>详细服务项目</td>

              <td data-bind="text:ItemContext">
                1.内窗玻璃清洁
                2.电器表面清洁
                3.家具清洁
                4.厨房清洁
                5.沙发除尘
                6.浴室清洁
                7.卫生间清洁
              </td>
            </tr>

            <tr data-bind="with:labour">
              <td>阿姨其他要求</td>
              <td>
                <ul>
                  <li>住家要求 |　<span>要求住家</span></li>
                  <li>最小预约单位 |　<span>两个小时起</span></li>
                  <li>支付方式 |　<span>希望在线支付</span></li>
                  <li>到岗时间 |　<span>按客户要求</span></li>
                  <li>服务范围 |　<span><i>武昌</i></span></li>
                </ul>
              </td>
            </tr>
          </table>

          <dl>
            <dt>服务流程：</dt>
            <dd><img src="../../assets/static_zc/img_zc/img12.png" alt="tu" /></dd>
          </dl>

          <dl>
            <dt>平台优势：</dt>
            <dd>
              <span>1个电话</span>
              <p>7*24小时客服坐席，只要您有需要，可以随时联系我们的客服人员为您解决服务过程中遇到的各种问题，我们的服务电话：<i>4001818200</i></p>
            </dd>
          </dl>
        </div>
      </div>
    </div>

    <div class="life">
      <h4>更多推荐 <span>MORE RECOMMEND</span></h4>

      <div class="recommend">
        <div>
          <dl>
            <dt>
              <a href="">
                <img src="../../assets/static_zc/img_zc/yangsi.png" alt="tu" />
              </a>
            </dt>
            <dd>
              <a href=""><span class="style" style="width: 52px;">宇多田光</span></a>
              <span style="width: 52px;"><i>35</i>岁 |</span>
              <span>湖北武汉湖北武汉</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>

    <div class="life">
      <h4>用户评论 <span>USER COMMENTS</span></h4>

      <div class="comment_list">
        <div class="list_box">
          <p>
            <span>订单号：<i>10101010</i></span>

            <span>服务评分：<i class="star3"></i></span>

            <span class="style">2016-01-01</span>
          </p>

          <div>
            <i>用户评价：</i>

            <p><span>工作细致</span><span>态度亲和</span></p>
          </div>
        </div>
      </div>
    </div>

    <div style="width:100%; margin: 30px auto;">
      <div class="la_bottom" style="display: block;">
        <ul>
          <li class="style">薪资要求：<span>30.00元/小时</span></li>

          <li>优惠信息：<span>在线支付享受优惠卷减免</span></li>

          <li><a href="" class="right">快速预约</a></li>
        </ul>
      </div>
    </div>
  </div>

</template>




