<template>
  <div id="app" >
    <div class="orderlist_main">
      <ul class="orderList_ul" >
        <li class="orderList_li" v-for="item in items">
          <div class="orderlist_title">
            <span>订单号：{{item.sn}}</span> <span v-if="item.OrderState==1" style="margin-left: 10px;color: #9d9d9d">已取消</span>
            <span v-if="item.OrderState==2" style="margin-left: 10px;color: #9d9d9d">已支付</span>
            <span v-if="item.OrderState==3" style="margin-left: 10px;color: #9d9d9d">已接单</span>
            <span v-if="item.OrderState==4" style="margin-left: 10px;color: #9d9d9d">已完成</span>
            <span v-if="item.OrderState==5" style="margin-left: 10px;color: #9d9d9d">已取消</span>

            <span
           @click="detail(item)" style="float: right;color: #2bb2f1">详情></span>
          </div>
          <div class="orderList_content1">

            <div class="orderList_content_left">
              <img v-if="item.attaUrl=='' " src="../../../../assets/static_hq/img/demo.png" />
              <img v-else v-bind:src="item.attaUrl"/>
            </div>
            <div class="orderList_content_right">
              <div class="orderList_content">
                <span style="color: #0e99ed;height: 50px;line-height: 50px">{{item.ServItemName}}</span>
                <span style="font-size: 16px;height: 50px;line-height: 50px;float: right;margin-right: 15px"> ￥ {{item.TradAmou/100}}</span>
              </div>

            <div>
              <div class="orderList_content">
                <span>规格：{{item.Unit||item.ServSpecName}}</span>     <span style="margin-left: 50px">数量：{{item.numbers}}</span>
                <button @click="orderevaluate(item)" v-show="item.OrderState==4&&item.ScoreState==1" style="float: right" class="btn btn-default" >订单评价</button>
                <p v-if="item.ScoreState==2" style="float: right" class="btn btn-default" >已评价</p>
              </div>

            </div>
              <div class="orderList_content"><span>收货地址：{{item.AddrProv+item.AddrCity+item.AddrArea+item.AddrInfo}}</span> <span style="float: right;margin-right: 10px">{{item.createTime}}</span>
              </div>
            </div>


          </div>


        </li>
        <div v-show="total>0" style="text-align: center;">
          <Page class="orderList_page" :total="total" @on-change="page" :current="Page"></Page>
        </div>

      </ul>

    </div>

  </div>
</template>

<style>


</style>
<script>
  import {mapGetters,mapActions} from 'vuex'
  import api from '../../../../fetch/api'

  export default {
    name: 'app',
    data(){
      return {
        active: 'account',
        total:0,
        orederState:0,
        items:{},
        Page:1
      }
    },
    mounted(){
      this.orederState=this.$route.query.orederState?this.$route.query.orederState:0;
        this.getOrder(this.orederState,this.Page);
    },
    methods:{

      getOrder(oderState,Page){
        var  _this=this;
       /* alert(this.orederState)*/
       var param={"Uid":this.token,"SerType":0,"OrderState":oderState,"Page":Page-1,"Count":10};
        api.post("UserBase/UserbaseOrderApi",param).then(function (rsp) {
              /*console.log(rsp);*/
            _this.items=rsp.data.listOrder;
            _this.total=rsp.data.totalCount;

        })

      },detail(item){

        this.$routeGo('orderDetail',{"SN":item.SN},true);


      },
      page(n){
          this.getOrder(this.orederState,n);
          this.Page=n
      },orderevaluate(item){
      //携带sn到评论界面
      this.$routeGo('/Center/Evaluate/EvaluateActivity',{"SN":item.SN},true);
    }

    },computed: {
      ...mapGetters([
        'token'
      ]),
    },
    watch: {
      '$route' (to, from) {

        this.orederState=this.$route.query.orederState?this.$route.query.orederState:0;
        //在这里进行数据的切换
        this.getOrder(this.orederState,1);

      }
    }
  }


</script>
<style lang="scss" scoped>
  .orderlist_main {
    width: 100%;
  }

  .orderlist_main .orderList_ul .orderList_li {
    width: 100%;
    height: 230px;
    margin: 0px;
    border: 1px solid #e2e2e2;
    margin-top: 20px;

  }
  .orderlist_main .orderList_ul .orderList_page{
    margin-top: 20px;
    margin-bottom: 20px;

  }

  .orderlist_main .orderlist_title {

    width: 97%;
    height: 50px;

    border-bottom: 1px solid #e2e2e2;
    margin-left: 15px;

  }

  .orderlist_main .orderlist_title span {
    line-height: 50px;
  }

  .orderlist_main .orderList_content {
    height: 60px;
    width: 98%;
    margin: 0px 15px;
  }
  .orderlist_main .orderList_content1 {
    height: 150px;
    width: 98%;
    margin: 0px 15px;
  }
  .orderlist_main .orderList_content span{
    line-height: 60px;
  }
  .orderlist_main .orderList_content1 .orderList_content_left{

    float: left;
    height: 150px;
    width: 15%;
  }
  .orderlist_main .orderList_content1 .orderList_content_right{
    float: right;
    height: 150px;
    width: 85%;
  }
  .orderlist_main .orderList_content1 .orderList_content_left img{
    float: left;
    margin-top: 22px;

    width: 135px;
    height: 135px;

  }
</style>

