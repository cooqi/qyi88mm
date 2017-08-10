<template>
  <div class="createOrder">
    <div class="order-state">
      <Steps :current="0">
        <Step title="拍下商品" content=""></Step>
        <Step title="付款" content=""></Step>
        <Step title="等待发货" content=""></Step>
        <Step title="确认收货" content=""></Step>
      </Steps>
    </div><!--订单状态-->

    <div class="order-address">
      <h3>选择收货地址</h3>
      <div class="address-box">
        <ul>
          <template v-if="address.length>0">
          <li :class="chooseAddr==item.userAddre_ID?'on':''" @click="chooseAddress(item.userAddre_ID)" v-for="item in address">
            <div class="name">
              <p v-text="item.addrProv+item.addrCity"></p>
              <p><span v-text="item.contact"></span>（收）</p>
            </div>
            <div class="address-info">
              <p> <span v-text="item.addrArea+item.addrInfo"></span> <span v-text="item.phone"></span></p>
            </div>
          </li>
          </template>
          <li style="background: none;text-align: center;line-height: 80px;border:1px dashed #ccc" @click="newAddr">
            添加新的地址
          </li>
        </ul>
      </div>
    </div><!--地址-->

    <div class="sureOrderInfo">
      <h3>确认订单信息</h3>
      <table class="table goods_list" v-if="OrderType==7">
        <tr>
          <th>购买商品</th>
          <th>商品属性</th>
          <th>单价（元）</th>
          <th>数量</th>
          <th>小计（元）</th>
        </tr>
        <tr>
          <td class="goods_name">
            <img :src="order.goods.img" alt="">
            <div class="infos">
              <p class="ser_title" v-text="order.goods.name"></p>
            </div>
          </td>
          <td class="goods_spec" v-text="order.spec.name"></td>
          <td v-text="order.spec.price"></td>
          <td class="goods_num" v-text="order.Count"></td>
          <td class="goods_total" v-text="order.price"></td>
        </tr>
      </table>
      <table class="table goods_list app_list" v-if="OrderType==4||OrderType==6">
        <tr>
          <th>服务类型</th>
          <th>特殊要求</th>
          <th>数量</th>
          <th>单价（元）</th>
          <th>时间</th>
          <th>区域</th>
          <th>小计（元）</th>
        </tr>
        <tr>
          <td class="goods_name">
            <img :src="order.goods.img" alt="">
            <div class="infos">
              <p class="ser_title" v-text="order.goods.name"></p>
              <p class="ser_con" v-text="order.spec.name"></p>
            </div>
          </td>
          <td class="goods_price">无</td>
          <td class="goods_num" v-text="order.Count"></td>
          <td v-text="order.spec.price"></td>
          <td class="goods_num" v-text="order.AppoTime"></td>
          <td class="goods_num">无</td>
          <td class="goods_total" v-text="order.price"></td>
        </tr>
      </table>

      <div class="ps">
        <div class="message">
          <p>给卖家留言</p>
          <textarea class="form-control" rows="3" v-model="messages"></textarea>
        </div>
        <div class="logistics">
          <p>运送方式：快递 <span>（包邮）</span></p>
        </div>
      </div><!--附加信息-->

      <div class="orderinfo">
        <p class="total_price">实付款 <span>￥</span><span v-text="order.price"></span></p>
        <p class="order-button" @click="paly(order.OrderType)">提交订单</p>
      </div>
    </div><!--确认订单信息-->
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  import api from '../../../../fetch/api'
  export default {
      data(){
          return{
            chooseAddr:'',
            order:{},
            OrderType:'',
            address:[],
            messages:''
          }
      },
    computed:{
      ...mapGetters([
          'token'
      ])
    },
    methods:{
      ...mapActions([
          'ADDaddress'
      ]),
      chooseAddress(id){
          this.chooseAddr=id
      },
      getaddress(){
          let _this=this;
          api.post('UserBase/UserAddersApi',{Uid:this.token})
            .then(function (rsp) {
              _this.address=rsp.data
              if(_this.address.length>0){
                let AddrIsDefu = rsp.data.filter(function(item){
                  return item.isDefu == 1;
                });

                _this.address=rsp.data.filter(function(item){
                  return item.isDefu ==0;
                });
                if(AddrIsDefu.length>0){
                  _this.address.unshift(AddrIsDefu[0]);
                }

                _this.chooseAddr=_this.address[0].userAddre_ID
              }

            })
      },
      paly(type){
          let _this=this;
          console.log(this.chooseAddr)
          if(this.chooseAddr==''){
            this.$Notice.error({
              title: '请选择地址',
              desc:'请选择地址',
            });
            return false
          }
        let pamars;
          if(type==4||type==6){
            pamars={
              Uid:this.token,
              ItemId:this.order.goods.id,
              SkuId:this.order.spec.id,
              Count:this.order.Count,
              AddrId:this.chooseAddr,
              BuyerMark:this.messages,
              AppoTime:this.order.AppoTime,
              PostType:1,
              PostId:'0000000000000000',
              OrderType:1
            }
          }
        if(type==7){
          pamars={
            Uid:this.token,
            ItemId:this.order.goods.id,
            SkuId:this.order.spec.id,
            Count:this.order.Count,
            AddrId:this.chooseAddr,
            BuyerMark:this.messages,
            AppoTime:'1970-01-01 00:00:00',
            PostType:1,
            PostId:'0000000000000000',
            OrderType:2
          }
        }
      api.post('CreateOrderAndPay/CreateOrderApi',pamars)
        .then(function (rsp) {
         // localStorage.removeItem("order")
          _this.$routeGo('/order/orderpay',{OrdersID:rsp.data.OrdersID,price:_this.order.spec.price,count:_this.order.Count},true)
        })
      },
      newAddr(){
        this.ADDaddress()
      }
    },
    mounted(){
      if(!localStorage.getItem("order")){
        this.$routeGo('index')
      }
         this.order=JSON.parse(localStorage.getItem('order'))
         this.OrderType=this.order.OrderType
          this.getaddress()

    }
  }
</script>

<style scoped>
  .createOrder{}
  .order-state{margin: 10px auto;background: #fff;padding: 10px}

  .order-address{background: #fff;padding: 10px;}
  .order-address h3{font-size: 16px;font-weight: bold;line-height: 40px;}
  .order-address .address-box ul{overflow: hidden;justify-content: flex-start;flex-wrap: wrap;
    display: -webkit-flex;
    display: flex;}
  .order-address .address-box ul li{background: url("../../../../assets/static_hq/img/address-no-bg.png") no-repeat;width:237px;height: 106px;padding: 10px;font-size: 12px;color: #666;position: relative;margin: 10px 25px 0 ;cursor: pointer}
  .order-address .address-box .name{overflow: hidden;border-bottom: 1px solid #ccc;margin-bottom: 5px}
  .order-address .address-box .name p{width: 100px;float: left;margin: 0;line-height: 30px;}
  .order-address .address-box li.on{
    background: url("../../../../assets/static_hq/img/address-bg.png") no-repeat;
  }

  .goods_list tr th{border-bottom:2px solid deepskyblue; height: 40px;text-align: center}
  .goods_list tr th:first-child{text-align: left}
  .goods_list tr td{padding: 8px;text-align: center}
  .goods_list tr td:first-child{text-align: left}
  .goods_list tr td.goods_name{overflow: hidden;}
  .goods_list tr td.goods_name img{width: 70px;height: 70px; float: left}
  .goods_list tr td.goods_name .infos{float: left;width: 300px;height: 70px;overflow: hidden;margin-left: 10px;}
  .goods_list tr td.goods_total{font-weight: bold;color: red}
  .goods_list tr td.goods_name .ser_title{height: 24px;line-height: 24px;overflow: hidden}
  .goods_list tr td.goods_name .ser_con{height: 46px;line-height: 22px;overflow: hidden;font-size: 12px}

  .ps{padding: 8px;background: #F2F7FF;color: #333;margin-bottom: 15px}
  .ps .message{border-bottom: 1px dotted #ccc;padding-bottom: 10px}
  .ps .logistics{line-height: 35px}
  .ps .logistics span{color: red}

  .orderinfo{overflow: hidden;padding: 10px;border:1px dashed orangered;width:400px;margin-bottom: 20px;}
  .orderinfo .total_price span{font-weight: bold;font-size: 26px;color: red}
  .orderinfo .order-button{width: 150px;height: 40px;line-height: 40px;text-align: center;background: orangered;color: red;cursor: pointer;color: #fff}
</style>
