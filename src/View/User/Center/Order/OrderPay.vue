<template>
  <div class="orderPay">
    <div class="order-state">
      <Steps :current="1">
        <Step title="拍下商品" content=""></Step>
        <Step title="付款" content=""></Step>
        <Step title="等待发货" content=""></Step>
        <Step title="确认收货" content=""></Step>
      </Steps>
    </div><!--订单状态-->

    <div class="total-info">
      <p class="order-num">合并 | <span v-text="orderInfo.count"></span>笔订单</p>
      <p class="order-total-price">共 <span v-text="orderInfo.price*orderInfo.count"></span>元</p>
    </div>

    <div class="payWay">
      <Radio-group v-model="vertical" vertical>
        <Radio label="yue">
          <span>余额支付</span><span style="padding-left: 20px;color: orangered">可用余额：{{info.accBala/100}}</span>
        </Radio>
        <!--<Radio label="zfb">
          <span>支付宝支付</span>
        </Radio>-->
      </Radio-group>
    </div>

    <div class="PAY">
      <!--<Button type="success" long @click="pay">确认支付</Button>-->
      <Button type="success" :loading="loading" long @click="pay">
        <span v-if="!loading">确认支付</span>
        <span v-else>支付中</span>
      </Button>
    </div>


  </div>
</template>

<script>
  import api from '../../../../fetch/api'
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        vertical: 'yue',
        orderInfo:{},
        info:{},
        loading:false
      }
    },
    computed:{
      ...mapGetters([
          'token'
      ])
    },
    methods:{

        getdate(){
          let _this=this;
            api.post('UserBase/UserCenterApi',{Uid:this.token})
              .then(function (rsp) {
                    _this.info=rsp.data
              })
        },
      pay(){
            let _this=this;
            this.loading=true
        if(this.info.accBala/100<this.orderInfo.price*this.orderInfo.count){
          this.$Notice.error({
            title: '余额不足，请选择其他支付方式',
            desc:'余额不足，请选择其他支付方式',
          });
          this.loading=false
          return false
        }
        api.post('CreateOrderAndPay/OrdersPayApi',{Uid:this.token,OrdersID:this.orderInfo.OrdersID})
          .then(function (rsp) {
              if(rsp.data.parCode==1){
                localStorage.removeItem("order")
                _this.$routeGo('success')
                this.loading=false
                return false
              }
            if(rsp.data.parCode==2 ||rsp.data.parCode==3||rsp.data.parCode==4){
              this.$Message.info('生成订单有误，请重新核对')
              _this.$routeGo('createOrder')
              return false
            }
            if(rsp.data.parCode==5){
              this.$Message.info('订单已取消，请重新下单')
              _this.$routeGo('createOrder')
              return false
            }
            if(rsp.data.parCode==6){
              this.$Message.info('订单已支付，请勿重新支付')
              _this.$routeGo('success')
              return false
            }
            if(rsp.data.parCode==7){
              this.$Message.info('余额不足，请选择其他支付方式')
              return false
            }

          })
      }
    },
    mounted(){
        this.orderInfo=this.$route.query
      this.getdate()
    }
  }
</script>

<style scoped>
  .order-state{margin-top: 10px;background: #fff;padding: 10px}
  .total-info{overflow: hidden;padding: 10px;background: #ffff;margin-top: 20px}
  .total-info p{width: 50%;float: left;line-height: 40px;}
  .total-info p.order-total-price{text-align: right}
  .total-info p.order-total-price span{color: red;font-size: 24px;font-weight: bold}

  .payWay{}

 .PAY{width: 200px;margin: 10px auto}
</style>
