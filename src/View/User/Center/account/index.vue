<template>
  <div id="app">
    <div class="account_main">
      <div class="account_title">

          <span style="font-size: 16px;color: #000;line-height: 50px">账户余额<span class="accont_title_num">¥  {{accBala/100}}</span></span>

        <!--  <span @click=""  class="account_right"></span>-->
      </div>
      <table class="table table-striped">
        <tr>
          <th>订单号</th>
          <th>收支金额</th>
          <th>收支说明</th>
          <th>操作时间</th>
        </tr>
        <tr v-for="item in items">
          <td>{{item.accTradeNo}}</td>
          <td>{{item.accBala/100}}</td>
          <td>{{item.descript}}</td>
          <td>{{item.createTime}}</td>
        </tr>
      </table>



    </div>
  </div>
</template>
<style lang="scss">
  @import "../../../../assets/css/sass/base.scss";
  .account_main{
    width: 100%;
  }
  .account_main .account_title{
    height: 50px;
    width: 95%;
    border-bottom: 1px solid#eee;

  }

  .account_main .account_title .accont_title_num{
    color: $MainColor;
    font-size: 15px;
    margin-left: 10px;
    line-height: 50px;
  }

  .account_main .account_content {
    height: 70px;

    border-top: 1px solid #eee;

  }
  .account_main .account_content .account_content_message {
    color: $MainColor;

    text-align: center;font-size: 16px;line-height: 70px
  }
 .account_main .account_right{
   float: right;
   margin-right: 30px;
   width: 96px;
   height: 36px;
   background-image: url(../../../../assets/static_hjc/button_topup_.png) ;

 }
  /*.table-striped th{
    text-align: center;
  }
  .table-striped td{
    text-align: center;
  }*/
  .table-striped tr{height: 50px;border-bottom: 1px dashed #ccc}
</style>
<script>
  import api from '../../../../fetch/api'
  import { mapGetters,mapActions } from 'vuex'
  import {Toast} from '../../../../assets/static_hjc/utils';
  export default {
      name:'app',
      data(){
          return{
              items:{},
              accBala:""

          }

      },
    mounted(){
      this.getMessage();
    }
    ,
    methods:{
      getMessage(){
            var _this  =this;
          api.post("UserBase/UserCenterDetApi",{"Uid":this.token}).then(function (rsp) {
              if(rsp.code==200){

                _this.items=rsp.data.Useracc;
                console.log(rsp.data.Useracc);

              }else {
                _this.$Modal.warning({

                  title: "通知",
                  content: "网络错误~"
                });
              }

          })
        /*POST /api/v1/UserBase/UserCenterApi*/
        api.post("UserBase/UserCenterApi",{"Uid":this.token}).then(function (rsp) {
            console.log(rsp);

          _this.accBala=rsp.data.accBala;

        })


      }
    },computed: {
      ...mapGetters([
        'token'
      ]),
    },


  }


</script>
