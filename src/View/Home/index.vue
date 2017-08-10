<style lang="scss" scoped>
  @import "../../assets/static_hq/css/style.css";
  @import "../../assets/static_hq/css/animate.min.css";

body,html{height: 100%;overflow: hidden}
  .section { text-align: center; font-size: 50px; color: #fff;}
  .sectionbg{background: url('../../assets/static_hq/img/sectionBG.png') no-repeat left bottom;background-size: contain;position: absolute;bottom: 0;left: 0;width: 100%;z-index: 9999;height: 250px}
  .section2 .down01-01{ position: relative; left: -920%;}
  .section2 .down01-02{ position: relative; right: -920%;}
  .section2 .rwm{ position: relative; top: -920%;left: 300px}

  .section3 h3 { position: relative; left: -120%;}
  .section4 p ,.section4 h5{ position: relative; left: -120%;}
  .section4 h3,.section4 h4{ position: relative; top: -120%;}
  .section5 p,.section5 h5 { display: none;}
  .section5 h3,.section5 h4{top: -920%}
  .img_list{position: relative;top:400%;opacity: 0}
  .section6 h3 ,.section6 h4{ position: relative; right: -120%;}
  .section6 ul{ position: relative;width: 900px;margin: auto;opacity: 0}
  .section6 ul li{text-align: left;font-size: 14px;color: #333}
  .map{position: relative;left: -120%}

  .section1 ul li img{display: block;}
  .section-down .sectionbg{position: absolute;}
  .section-down .sectionbg .icon_next{bottom: 25px}

</style>
<template>
  <div>
  <div class="headNav">
    <div class="head_con">
      <ul id="menu">
        <li data-menuanchor="page1" class="active"><a href="#page1"><span>首页</span></a></li>
        <li data-menuanchor="page2"><a href="#page2"><span>商城</span></a></li>
        <li data-menuanchor="page3"><a href="#page3"><span>服务</span></a></li>
        <li data-menuanchor="page4"><a href="#page4"><span>市场</span></a></li>
        <li data-menuanchor="page5"><a href="#page5"><span>关于</span></a></li>
        <li data-menuanchor="page6"><a href="#page6"><span>联系</span></a></li>
      </ul>
    </div>
  </div>

  <div class="right_nav">
    <ul>
      <li class="R_qq">
        <i></i>
        <ul>
          <li><a target="_blank" href=" http://wpa.qq.com/msgrd?v=1&uin=2852517324">QQ咨询1</a></li>
          <li><a target="_blank" href=" http://wpa.qq.com/msgrd?v=1&uin=2852517325">QQ咨询2</a></li>
        </ul>
      </li>
      <li class="R_tel">
        <p><a href="#page6"><i></i><span>联系方式</span></a></p>
      </li>
      <li class="R_wechat">
        <i></i>
        <div class="code_wechat">
          <img src="../../assets/static_hq/img/rwm.jpg" alt="">
          <p>微信公众号</p>
        </div>
      </li>
      <!-- <li class="R_weibo">
              <i></i>
              <div class="code_weibo">
                  <img src="images/1.jpg" alt="">
                  <p>官方微博</p>
              </div>

          </li> -->
    </ul>
  </div>


    <div id="dowebok">

      <div class="section section1">
        <div id="solid">
          <div class="solid0"></div><div class="solid1"></div><div class="solid2"></div>
          <ul>
            <li style="z-index:9999" class="index_banner">
              <div class="bg"><img src="../../assets/static_hq/img/banner01.jpg" alt=""></div>
              <div class="index_box">
                <h3>爱家养老互联网平台</h3>
                <h4>弘扬中华孝道文化 • 引领现代养老理念</h4>
                <p>Lead smart pension concept and promote Chinese culture of filial piety</p>
              </div>
            </li>
            <li>
              <div class="bg"><img src="../../assets/static_hq/img/banner02.jpg" alt=""></div>
            </li>
            <li>
              <div class="bg"><img src="../../assets/static_hq/img/banner03.jpg" alt=""></div>
              <div class="banner02">
                <img src="../../assets/static_hq/img/banner03-01.png" alt="" class="ban-03-01">
                <img src="../../assets/static_hq/img/banner03-02.png" alt="" class="ban-03-02">
              </div>
            </li>

          </ul>
          <div class="sectionbg">
            <div class="icon_next"><a href="#page2"><i></i></a></div>
          </div>
          <div id="btt"><span></span><span></span><span></span></div>


        </div>

      </div>
      <div class="section section2 section-down">
        <div class="bg"><img src="../../assets/static_hq/img/down01.jpg" alt=""></div>
        <div class="sectionbg">
          <div class="icon_next"><a href="#page3"><i></i></a></div>
        </div>
        <div class="img">
          <div class="img-main">
            <img src="../../assets/static_hq/img/down01-01.png" alt="" class="down01-01">
            <img src="../../assets/static_hq/img/down01-02.png" alt="" class="down01-02">
          </div>
          <img src="../../assets/static_hq/img/down01-03.png" alt="" class="rwm">
        </div>
      </div>
      <div class="section section3 section-down">
        <div class="bg"><img src="../../assets/static_hq/img/down02.jpg" alt=""></div>
        <div class="sectionbg">
          <div class="icon_next"><a href="#page4"><i></i></a></div>
        </div>
        <div class="box">
          <h3>BOUTIQUE SERVICE <span>精品服务</span></h3>
          <div class="img_list">
            <div class="picbox">
              <ul class="piclist mainlist">
                <li>
                  <div class="port-8 effect-2">
                    <div class="image-box">
                      <img src="../../assets/static_hq/img/down02-01.jpg" alt="Image-1">
                      <p>家庭养老院</p>
                    </div>
                    <div class="text-desc">
                      <h4>家庭养老院</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="port-8 effect-2">
                    <div class="image-box">
                      <img src="../../assets/static_hq/img/down02-02.jpg" alt="Image-1">
                      <p>社区养老</p>
                    </div>
                    <div class="text-desc">
                      <h4>社区养老</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="port-8 effect-2">
                    <div class="image-box">
                      <img src="../../assets/static_hq/img/down02-03.jpg" alt="Image-1">
                      <p>机构养老</p>
                    </div>
                    <div class="text-desc">
                      <h4>机构养老</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="port-8 effect-2">
                    <div class="image-box">
                      <img src="../../assets/static_hq/img/down02-04.jpg" alt="Image-1">
                      <p>智能守护</p>
                    </div>
                    <div class="text-desc">
                      <h4>智能守护</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="port-8 effect-2">
                    <div class="image-box">
                      <img src="../../assets/static_hq/img/down02-05.jpg" alt="Image-1">
                      <p>活力养生</p>
                    </div>
                    <div class="text-desc">
                      <h4>活力养生</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="port-8 effect-2">
                    <div class="image-box">
                      <img src="../../assets/static_hq/img/down02-06.jpg" alt="Image-1">
                      <p>康复医院</p>
                    </div>
                    <div class="text-desc">
                      <h4>康复医院</h4>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
            <!-- <div class="click_og">
                      <div class="og_prev"></div>
                      <div class="og_next"></div>
                  </div> -->
          </div>
          <!--<script type="text/javascript" src="js/lrtk.js"></script>-->
        </div>
      </div>
      <div class="section section4 section-down">
        <div class="bg"><img src="../../assets/static_hq/img/down03.jpg" alt=""></div>
        <div class="sectionbg">
          <div class="icon_next"><a href="#page5"><i></i></a></div>
        </div>
        <div style="margin-top: 200px">
          <h3>MARKET OF LABOUR SERVICES</h3>
          <h4>服务商和劳务市场</h4>
          <div class="list_news">
            <h5 class="h_one">服务市场</h5>
            <p class="p_one">到家服务万商云集，爱家如你值得托付，打造最专业的服务商标准服务信息对接平台。</p>
            <h5 class="h_two">劳务市场</h5>
            <p class="p_two">众多阿姨，任你挑，随你选，打造全方位的个人服务者服务信息发布平台。</p>
          </div>
        </div>
      </div>
      <div class="section section5 section-down">
        <div class="bg"><img src="../../assets/static_hq/img/down04.jpg" alt=""></div>
        <div class="sectionbg">
          <div class="icon_next"><a href="#page6"><i></i></a></div>
        </div>
        <div style="position:absolute;top:150px;left:0;right:0;margin:auto;width:900px">
          <h3>ABOUT US <span>关于我们</span></h3>
          <div class="cont">
            <h5>侨亚“爱家养老”互联网养老服务平台</h5>
            <p>“爱家养老”是一款预约居家养老服务、孝敬和关爱老人的手机APP，以“帮父母养老、助子女行孝”为目标，为忙碌或“偷懒”的子女们，为渐渐年迈的父母们，提供居家养老生活、健康、安全、关爱等服务。</p>
            <p>“爱家养老”服务所依托的侨亚“i+”养老服务平台，在广大有养老服务需求的家庭，与养老服务提供者之间,构建了一套信息化和人性化完美结合的互联网服务流程，为供需双方提供便捷可靠的信息对接、供需匹配、服务管理、支付结算、信誉评价等功能，形成互联网线上线下相结合的居家养老服务闭环。</p>
          </div>
        </div>
      </div>
      <div class="section section6 section-down">
        <div class="bg"><img src="../../assets/static_hq/img/down05.jpg" alt=""></div>
        <div class="sectionbg">
          <div class="icon_next"></div>
        </div>
        <h3>CONTACT US <span>联系我们</span></h3>

        <img src="../../assets/static_hq/img/map.jpg" alt="" class="map">
        <ul>
          <li>公司地址： 武汉市江岸区合作路13号君安大厦17楼</li>
          <li>电话： 4001818200</li>
          <li>传真： 027-51503999</li>
        </ul>

        <div class="footer">版权所有：湖北侨亚养老产业股份有限公司鄂ICP备11007840号</div>
      </div>
    </div>
  </div>
</template>

<script>
var fullpage = require('../../assets/static_hq/js/jquery.fullPage.js')
var index;
  export default{
      mounted(){
        console.log(this.$route.name)
        $(function(){
          $('#dowebok').fullpage({
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
            afterLoad: function(anchorLink, index){
              if(index == 2){
                $('.section2').find('.down01-01').delay(0).animate({
                  left: '0',
                  top:'350'
                }, 1000);
                $('.section2').find('.down01-02').delay(10).animate({
                  right: '0',
                  top:'200'
                }, 1000);
                $('.section2').find('.rwm').delay(20).animate({
                  top: '100'
                }, 1000);
              }
              if(index == 3){
                $('.section3').find('h3').delay(0).animate({
                  left: '0'
                }, 1000);
                $('.section3 .img_list').delay(0).animate({
                  top: '50',
                  opacity:1
                }, 1000);
              }
              if(index == 4){
                $('.section4 .h_one').delay(10).animate({
                  left: '0'
                }, 1000);
                $('.section4 .p_one').delay(10).animate({
                  left: '0'
                }, 1000);
                $('.section4 .h_two').delay(10).animate({
                  left: '0'
                }, 1000);
                $('.section4 .p_two').delay(10).animate({
                  left: '0'
                }, 1000);
                $('.section4').find('h3').delay(10).animate({
                  top: '0'
                }, 1000);
                $('.section4').find('h4').delay(10).animate({
                  top: '0'
                }, 1000);
              }
              if(index == 5){
                $('.section5').find('p').fadeIn(2000);
                $('.section5').find('h5').fadeIn(2000);
                $('.section5').find('h3').delay(10).animate({
                  top: '0'
                }, 1000);
                $('.section5').find('h4').delay(10).animate({
                  top: '0'
                }, 1000);
              }
              if(index == 6){
                $('.section6').find('h3').delay(10).animate({
                  right: '0'
                }, 1000);
                $('.section6').find('h4').delay(10).animate({
                  right: '0'
                }, 1000);
                $('.section6 .map').delay(10).animate({
                  left: '0'
                }, 1000);
                $('.section6 ul').delay(10).animate({
                  opacity:1
                }, 1000);
              }
            },
            onLeave: function(index, direction){
              if(index == '2'){
                $('.section2').find('.down01-01').delay(10).animate({
                  left: '-920%'
                }, 1500);
                $('.section2').find('.down01-02').delay(10).animate({
                  right: '-920%'
                }, 1500);
                $('.section2').find('.rwm').delay(70).animate({
                  top: '-920%',
                }, 1500);
              }
              if(index == '3'){
                $('.section3').find('h3').delay(500).animate({
                  left: '-120%'
                }, 1500);
                $('.section3 .img_list').delay(100).animate({
                  top: '120%',
                  opacity:0
                }, 1500);
              }
              if(index == '4'){
                $('.section4 .h_one').delay(10).animate({
                  left: '-120%'
                }, 1500);
                $('.section4 .p_one').delay(200).animate({
                  left: '-120%'
                }, 1500);
                $('.section4 .h_two').delay(300).animate({
                  left: '-120%'
                }, 1500);
                $('.section4 .p_two').delay(400).animate({
                  left: '-120%'
                }, 1500);
                $('.section4').find('h3').delay(10).animate({
                  top: '-120%'
                }, 1500);
                $('.section4').find('h4').delay(10).animate({
                  top: '-120%'
                }, 1500);
              }
              if(index == '5'){
                $('.section5').find('p').fadeOut(2000);
                $('.section5').find('h5').fadeOut(2000);
                $('.section5').find('h3').delay(10).animate({
                  top: '-920%'
                }, 1500);
                $('.section5').find('h4').delay(10).animate({
                  top: '-920%'
                }, 1500);
              }
              if(index == 6){
                $('.section6').find('h3').delay(10).animate({
                  right: '-120%'
                }, 1500);
                $('.section6').find('h4').delay(10).animate({
                  right: '-120%'
                }, 1500);
                $('.section6 .map').delay(100).animate({
                  left: '-120%'
                }, 1500);
                $('.section6 ul').delay(100).animate({
                  opacity:0
                }, 1500);

              }
            },

            anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
            menu: '#menu'
          })



          var total=$("#solid ul").children().length;
          var now=0;
          function clock()
          {
            var cname
            if(now==total -1){
              now=0;
            }else{
              now=now+1;
            }
            for(let i=0;i<total;i++){
              cname="#solid .solid" + i;
              $("#solid ul li").eq(i).css("display","none");
              $("#btt span").eq(i).css("background","#3d3d3d");
              $(cname).css("display","none");
            }

            cname="#solid .solid" + now;
            $("#solid ul li").eq(now).fadeIn(400);
            $("#btt span").eq(now).css("background","#ffffff");
            $(cname).css("display","block");
            if(now==0){
              if(now==0){
                $("#solid ul li").eq(now).find('h3').removeClass().addClass('bounceInRight animated')
                $("#solid ul li").eq(now).find('h4').removeClass().addClass('bounceInDown animated')
                $("#solid ul li").eq(now).find('p').removeClass().addClass('bounceInDown animated')
              }
            }
            if(now==1){
           /*   $("#solid ul li").eq(now).find('.ban-02-01').removeClass().addClass('bounceInRight animated')
              $("#solid ul li").eq(now).find('.ban-02-02').removeClass().addClass('bounceInDown animated')*/
            }
            if (now == 2) {
              $("#solid ul li").eq(now).find('.ban-03-01').removeClass().addClass('rubberBand animated')
              $("#solid ul li").eq(now).find('.ban-03-02').removeClass().addClass('fadeInLeft animated')
            }
          }

          if(now==0){
            $("#solid ul li").eq(now).find('h3').removeClass().addClass('bounceIn animated')
            $("#solid ul li").eq(now).find('p').removeClass().addClass('fadeInLeft animated')
          }
          $("#solid ul li").eq(0).fadeIn(400);
          $("#btt span").eq(0).css("background","#ffffff");
          $("#solid .solid0").fadeIn(50);
          $("#solid ul li,#btt span").mouseenter(function(){
          //  clearInterval(int);

          });
          $("#btt span").mouseenter(function(){
            if($(this).index()!=now){
              now=$(this).index()-1;
              clock();
            }
          });
       /*   var int=setInterval("clock()",3000)
          if(index==1){
            $("#solid ul li,#solid span").mouseleave(function(){
              int=setInterval("clock()",3000)
            });
          }*/




        });
      }
  }


</script>
