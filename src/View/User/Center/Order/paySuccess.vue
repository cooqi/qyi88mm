<template>
  <div>
    <div class="order-state">
      <Steps :current="2">
        <Step title="拍下商品" content=""></Step>
        <Step title="付款" content=""></Step>
        <Step title="等待发货" content=""></Step>
        <Step title="确认收货" content=""></Step>
      </Steps>

      <div class="ss">
       <h3> <Icon type="checkmark-round"></Icon>支付成功</h3>
        <p @click="$routeGo('orderList')">查看订单</p>
      </div>

    </div><!--订单状态-->
  </div>
</template>
<style>
  .order-state{background: #fff;padding: 10px;margin-top: 20px}
  .ss h3{color: green;font-weight: bold;font-size: 30px;text-align: center;margin: 25px 0;}
  .ss h3 i{margin-right: 20px}
  .ss p{text-align: center;text-decoration: underline;cursor: pointer}
</style>
<script>
  export default{
      mounted(){
        localStorage.removeItem("order")
      }
  }
</script>
