<template>
  <div id="app">
    <div class="detail_main">
      <div class="detail_title"><span>订单详情</span></div>
      <div class="detail_content">
        <span>订单号：<span style="color: #9d9d9d">{{items.SN}}</span></span>
        <span v-if="items.OrderState==1" style="color: #2bb2f1;margin-left: 200px">未支付</span>
        <span v-if="items.OrderState==2" style="color: #2bb2f1;margin-left: 200px">已支付</span>
        <span v-if="items.OrderState==3" style="color: #2bb2f1;margin-left: 200px">已接单</span>
        <span v-if="items.OrderState==4" style="color: #2bb2f1;margin-left: 200px">已完成</span>
        <span v-if="items.OrderState==5" style="color: #2bb2f1;margin-left: 200px">已取消
</span>
        <p style="font-size: 15px;font-weight: bold;margin-top: 15px ">联系人信息</p>
        <table class="user" cellpadding="0" cellspacing="0">
          <tbody>
          <tr>
            <th style="width: 169px;">联系人</th>
            <th style="width: 169px;">联系电话</th>
            <th style="border-right: 0;">联系地址</th>
          </tr>

          <tr>
            <td>{{items.contact}}</td>
            <td>{{items.TelNumber}}</td>
            <td style="border-right: 0;">{{items.AddrInfo}}</td>
          </tr>
          </tbody>
        </table>

        <p style="font-size: 15px;font-weight: bold;margin-top: 15px ">订单信息</p>
        <table class="order">
          <tbody>
          <tr>
            <th style="width: 169px">产品名称</th>
            <th style="width: 169px">订单金额</th>
            <th style="width: 169px">优惠金额</th>
            <th style="width: 169px">支付金额</th>
          </tr>
          <tr>
            <td>{{items.ServItemName}}</td>
            <td>{{items.TotaAmou/100}}</td>
            <td>{{items.CoupUseAmouh/100}}</td>
            <td style="border-right: 0;">{{items.TradAmou/100}}</td>
            <td style="border-right: 0;">{{items.TradAmou/100}}</td>
          </tr>
          </tbody>
        </table>


        <table>
          <tbody>
          <tr>
            <th style="width: 50%;">状态</th>
            <th style="width: 50%; border-right: 0;">时间</th>
          </tr>

          <tr>
            <td>预约时间</td>
            <td style="border-right: 0;">{{items.createTime}}</td>
          </tr>

          <tr>
            <td>下单时间</td>
            <td style="border-right: 0;">{{items.takeTime}}</td>
          </tr>

          <tr>
            <td>支付时间</td>
            <td  style="border-right: 0;">{{items.payTime}}</td>
          </tr>

          <tr>
            <td>确认时间</td>
            <td  style="border-right: 0;"></td>
          </tr>
          </tbody>
        </table>
        <p style="font-size: 15px;font-weight: bold;margin-top: 15px ">订单流程</p>
        <table>
          <tbody>
          <tr>
            <td>2017-06-27 09:38</td>
            <td style="border-right: 0;">发起预约：二十九 1霓</td>
          </tr>

          </tbody>

        </table>

        <p style="font-size: 15px;font-weight: bold;margin-top: 15px ">订单评论</p>
        <table>
          <tbody>
        <tr>
          <th >评价时间</th>
          <th style="border-right: 0px">评价内容</th>
        </tr>
          <tr>
            <td>2017-06-15</td>
            <td style="border-right: 0px">我觉得商品还有需要改进的地方~</td>
          </tr>

          </tbody>

        </table>

        <p class="assess" ></p>

        <div style="float: right">
          <span>订单金额：</span> <span style="font-size: 16px;color: #2bb2f1;font-weight: bold">{{items.TotaAmou/100}}</span>元<span></span>
        </div>
      </div>

    </div>

  </div>
</template>
<style lang="scss">
  .detail_main {
    width: 98%;
    height: auto;
    border: 1px solid #e2e2e2;
    margin-top: 11px;
    padding: 20px;
    margin-bottom: 50px;

  }

  .detail_main .detail_title {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e2e2e2;
  }

  .detail_main .detail_title span {
    line-height: 45px;
    margin-left: 5px;
    font-weight: bold;
    font-size: 15px;
  }

  .detail_main .detail_content {
    width: 100%;
    height: auto;
    padding: 15px;
    margin-top: 15px;
  }

  .detail_content table {
    width: 100%;
    margin: 15px 0;
    font-size: 13px;
    color: #666;
    background-color: #fffdf9;
    border: 1px solid #eee;
  }

  table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
  }

  .detail_content table tr td {
    height: 34px;
    padding: 10px 20px;
    line-height: 34px;
    text-align: left;
    background-color: #fffdf9;
    border-top: 1px solid #eee;
    border-right: 1px solid #eee;
  }

  .detail_content table tr th {
    height: 34px;
    line-height: 34px;
    text-align: left;
    padding: 0 20px;
    border-right: 1px solid #eee;
  }
  .detail_content .assess {
    height: auto;
    margin: 20px auto;
    padding: 0 20px;
    line-height: 30px;
    font-weight: normal;
    color: #666;
    background-color: #fff;
    border-top: 1px dashed #ccc;
    border-bottom: 1px dashed #ccc;
  }
</style>
<script>
  import api from '../../../../fetch/api'
  export default {
      name:"app",
    data(){
          return{
              orderId:'',
              items:{}

          }
    },
    mounted(){
      this.orderId=this.$route.query.SN;
      this.getDeatils();

    },
    methods:{

        getDeatils(){
          var _this= this;


            api.get("UserBase/UserbaseOrderDetailApi",{"Orders_ID":this.orderId}).then(function (rsp) {
              _this.items=rsp.data;
            })

        }

    },


  }

</script>
