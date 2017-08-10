<style lang="scss" scoped>
  @import "../../assets/css/sass/base.scss";

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

  /*快速下单*/
  .produce > div > ul li.action {
    background-color: #5bc0de;
  }
  .produce > div > ul li:hover {
    border-color: #5bc0de;
  }
  .fa_content {
    height: auto;
    margin: 0 auto;
    padding: 20px;
    color: #666;
    overflow: hidden;
  }
  /*成为阿姨*/
  .mydialog h4 {margin-bottom: 20px; font-size: 16px; font-weight: normal; text-align: center;}
  .mydialog form {color: #666;}
  .mydialog form .us_type1 {height: auto; overflow: hidden;}
  .mydialog form .us_type1 span{line-height: 35px;}
  .mydialog form > p {clear: both; margin: 16px 0; padding: 10px; font-size: 16px; font-weight: bold; color: #444; border: 1px dashed #ff0018; border-radius: 5px;}
  .mydialog form .us_type2 {height: auto; margin-bottom: 16px; overflow: hidden;}
  .mydialog form .us_type2 {padding: 10px; border: 1px dashed #ccc; border-radius: 5px;}
  .mydialog form .us_type2 > h4 {font-weight: normal;}
  .mydialog form .us_type2 > div {margin: 30px 0;}
  .mydialog form .us_type2 > div img {width: 100%;}
  .mydialog form .us_type2 > div ul {width: 452px; height: 88px; margin: 0 auto; border-top: 1px solid #f19725; border-right: 1px solid #f19725}
  .mydialog form .us_type2 > div ul li {float: left; height: 44px; line-height: 46px; margin-top: -23px; margin-right: 137px; background-color: #eee; border: 1px solid #888;}
  .mydialog form .us_type2 > div ul li span {display: inline-block;  width: 70px; line-height: 18px; padding: 4px 8px; text-align: center;}
  .mydialog form .us_type2 > div ul.type {height: 30px; border-right: none;}
  .mydialog form .us_type2 > div ul.type li {margin-bottom: -22px;}
  .mydialog form .us_type2 > ul {height: auto; overflow: hidden;}
  .mydialog form .us_type2 > ul li {line-height: 30px; text-align: center;}
  .mydialog form .us_type2 > ul li span {color: #f19725;}
  .profile form > div label, .us_type1 label {line-height: 35px;}



  /*发起预约*/
  .mydialog {width: auto; height: auto; padding: 0 20px; overflow: hidden;}
  .mydialog > ul > li {height: auto; line-height: 30px; margin-bottom: 20px; color: #666; overflow: hidden;}
  .mydialog > ul > li > label {display: inline-block; width: 100px; margin-right: 5px; vertical-align: top;}
  .mydialog > ul > li.style span {margin-right: 10px; padding: 1px 8px; background-color: #fcfcfc; border: 1px solid #ccc;}
  .mydialog > ul > li textarea {display: inline-block; margin-left: 100px; width: 800px; height: 50px; line-height: 25px; margin: 5px 0; padding: 2px 5px; font-size: 14px; border: 1px solid #d6d6d6; resize: none}
  .mydialog > ul > li select {width: 100px; height: 27px; text-align: center; color: #666; border-color: #ccc;}
  .mydialog > ul > li input {color: #666; line-height: 25px; padding: 0 10px; border: 1px solid #ccc;}
  .mydialog > ul > li span.style {font-size: 16px; color: #fa0018;}
  .mydialog > ul > li.style select {width: 300px;}
  .mydialog > ul > li.style1 {height: 50px; line-height: 50px; margin: 15px 0; padding: 0 10px; background-color: #f8f8f8;}
  .mydialog > ul > li.style1 span {float: left;}
  .mydialog > ul > li.style1 span i {font-size: 16px; font-style: normal; color: #fa0018;}
  .mydialog > ul > li.style1 span.style1 {float: right; font-size: 16px;}
  .mydialog > ul > li.style1 span.style1 i {font-size: 18px;}
  .mydialog > ul > li.style2 {height: auto; overflow: hidden;}
  .mydialog > ul > li.style2 button, .mydialog ul li.style2 input {float: left; display: inline-block; width: 130px; height: 32px; line-height: 30px; text-align: center; color: #999; border: 1px solid #ccc; cursor: pointer;}
  .mydialog > ul > li.style2 input {float: right; margin-top: 30px; color: #f19725; border-color: #f19725;}
  .mydialog > ul > li.style2 button:hover, .mydialog ul li.style2 input:hover {box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);}
  .mydialog > ul > li.style3 > div {display: inline-block; width: 800px; overflow: hidden;}
  .mydialog > ul > li.style3 span {cursor: pointer;}
  .mydialog > ul > li.style3 span.style2 {color: #fff; background-color: #f19725; border-color: #f19725;}
  .mydialog > ul > li p {display: inline-block; margin-left: 100px; width: 800px; height: 50px; line-height: 25px; margin: 5px 0; padding: 2px 5px; background-color: #f8f8f8;}
  .mydialog > ul > li > ul {display: inline-block; width: auto; height: auto; margin: 10px; overflow: hidden;}
  .mydialog > ul > li > ul > li {float: left; margin-right: 20px; padding: 2px 10px; border: 1px solid #eee; cursor: pointer;}
  .mydialog > ul > li > ul > li:hover {color: #f19725; border-color: #f19725;}
  .mydialog > ul > li > ul > li.action {color: #fff; background-color: #f19725; border-color: #f19725;}
  .mydialog > ul > li > ul > li i {display: inline-block; width: 20px; height: 20px; margin-right: 5px; vertical-align: -5px;}
  .mydialog > ul > li > ul > li i img {width: 100%;}

  .mydialog > ul > li .modify {display: none;}
  .mydialog > ul > li.style4 {display: none;}
  .mydialog > ul > li.style4 select {width: 400px;}

  .produce > div {margin-bottom: 10px;}
  .mydialog > ul > li input[type="button"].put1, .mydialog > ul > li input[type="button"].put2 {color: #fff; background-color: #3bcfb2; cursor: pointer;}
  .mydialog > ul > li input[type="button"].put1 {display: none;}


</style>




<template>
  <div class="life">
    <h4>填写预约单</h4>
    <div class="fa_content">
      <div class="mydialog">
        <ul>
          <li class="style">
            <label>预约服务类型：</label>
            <span data-bind="text:SubCategoryName">临时照料</span>
          </li>

          <li class="style">
            <label>预约服务内容：</label>
            <span data-bind="text:Context">住家保姆</span>
          </li>

          <li>
            <label>详细服务项目：</label>
            <p>临时照料</p>
          </li>

          <li>
            <label>特殊要求:</label>
            <span></span>
          </li>

          <li data-bind="with:labourProduct">
            <label>预约数量：</label>
            <select>
              <option>3小时</option>
              <option>3小时</option>
              <option>3小时</option>
              <option>3小时</option>
              <option>3小时</option>
              <option>3小时</option>
              <option>3小时</option>
            </select>
          </li>

          <li class="style style3">
            <label>区域选择：</label>
            <div>
              <span class="style2">武昌</span>
            </div>
          </li>

          <li>
            <label>服务时间：</label>
            <Date-picker type="date" :options="options3" placeholder="选择日期" style="border-radius:0px; display: inline-block; width: 200px"></Date-picker>
            <select id="time">
              <option value="8:00">8:00</option>
              <option value="9:00">9:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
          </li>

          <li>
            <label>备注：</label>
            <textarea id="txtRemark"></textarea>
          </li>





          <li>
            <label>单价：</label>
            <span id="unit_price">1600元/月</span>
          </li>
          <li class="style">
            <label>优惠：</label>
            无
          </li>
          <li class="style1">
            <span>预约<i>1个月</i>服务</span>
            <span class="error">请填写完整的信息</span>
            <span class="style1">实际支付：<i>3500元</i></span>
          </li>

          <li class="style2">
            <input type="button" value="提交预约" data-bind="click:CreateOrder" />
          </li>
        </ul>

      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        options3: {
          disabledDate (date) {
            return date && date.valueOf() < Date.now();  // - 86400000
          }
        },
        options4: {
          disabledDate (date) {
            const disabledDay = date.getDate();
            return disabledDay === 15;
          }
        }
      }
    }
  }


</script>

