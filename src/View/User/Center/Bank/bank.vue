<template>
  <div id="app">
    <div class="bank_main">
      <div class="bank_title">
        <p class="bank_title_left">我的银行</p>
      </div>
      <div class="bank_title_two" style="margin: 20px 0px 10px 0px">
        <p class="bank_title_two_left" style="font-size: 14px;display: inline-block">已绑定的银行卡</p>
        <p class="bank_title_two_right" style="" @click="add"> +绑定新银行卡</p>
      </div>
      <table class="table table-striped">
        <tr >
          <th>银行</th>
          <th>银行卡号</th>
          <th>持卡人</th>
          <th >操作</th>
        </tr>
        <tr  v-for="item in items" >
          <td>{{item.accBank}}</td>
          <td> {{item.bankNum}}</td>
          <td>{{item.bankUseNam}}</td>
          <td>
            <span v-if="item.isDefu==1" class="bt-def" >默认卡号</span>
            <span v-if="item.isDefu==0" class="bt-def1" @click="defaultdz(item)">设置默认</span>
            <!--@click="deleteadz(item)"  modal1 = true-->
            <a  class="bt-det" type="primary" @click="deleteBank(item)" >删除</a>

          </td>
        </tr>
      </table>

    </div>

    <div class="bankcc" >

    </div>
    <div class="bank">
      <div style="width: 100%;height: 100%;background: #fff">
        <div class="add_bank_title">

          <span  style="line-height: 50px;color: #000;margin-left: 40%;font-size: 16px;font-weight: 300">添加新的银行卡信息</span>
          <div style="float: right;margin-right: 5px;display: block;margin-top: 5px" @click="closeAdd">
            <icon class="glyphicon glyphicon-remove"></icon>
          </div>

        </div>
        <div class="us_type1">
          <label>银行：</label>


          <input style="margin-top: 7px" v-model="bankname"   type="text" class="add_address_me bankname"></input> <span style="">请输入银行,例：汉口银行</span>

        </div>

        <div class="us_type1">
          <label>开户支行：</label>

          <input v-model="banknamet" style="margin-top: 7px" type="text" class="add_address_me banknamet"></input>  <span> 请输入支行,例：汉口银行武汉沿江支行</span>
        </div>
        <div class="us_type1">
          <label>卡号：</label>

          <input v-model="banknum" type="text" class="add_bank_me banknum"></input><span>请输入正确的卡号</span>
        </div>
        <div class="us_type1">
          <label>持卡人：</label>

          <input v-model="bankbody" type="text" class="add_address_me bankbody"></input><span>请输入正确的持卡人姓名</span>
        </div>


        <input type="button" @click="addbank" value="确认"/>
      </div>
    </div>

    <Modal
      v-model="modal1"
      title="删除银行卡"
      @on-ok="ok"
     >
      <p style="font-size: 14px">您是否要删除此银行卡</p>
    </Modal>

  </div>
</template>
<script>
  import api from '../../../../fetch/api'
  import {Toast} from '../../../../assets/static_hjc/utils';
  import {luhmCheck} from '../../../../assets/static_hjc/utils';
  import { mapGetters,mapActions } from 'vuex'

  export default {
      name:'app',
    data(){
          return{
            bankname:null,
            banknamet:null,
            banknum:null,
            bankbody:null,
            items:{},
            modal1: false,
            userBanAcc_ID:''

          }
    },
    mounted(){
        this.getBank();
    }
    ,
    methods:{
      deleteBank(item){
          this.userBanAcc_ID=item.userBanAcc_ID;
          this.modal1=true;

      },
      getBank(){
          var _this=this;
          api.post("UserBase/UserbanaccApi",{"Uid":this.token}).then(function (res) {
            _this.items=res.data;


          })

      },
      ok () {
        var _this=this;
        var parame={"Uid":this.token,"UserBanAcc_ID":this.userBanAcc_ID};

        api.post("UserBase/UserBankDeleteApi",parame).then(function (rsp) {

          if (rsp.code==200){
            _this.$Modal.success({

              title: "通知",
              content: "删除成功~"
            });
            _this.getBank();
          }

        })
      }
      ,
      add(){
        /*添加银行卡*/
        $(".bank").toggle();
        $(".bankcc").toggle();


      },
      closeAdd(){
        $(".bank").toggle();
        $(".bankcc").toggle();
      },addbank(){
          var name=$(".bankname").val();
         var banknamet=$(".banknamet").val();
         var banknum=$(".banknum").val();
          var bankbody=$(".bankbody").val();
          if(!name ||name.length == 0||!banknamet || banknamet.length == 0 ||
            !banknum ||banknum.length == 0|| !bankbody ||bankbody.length == 0
          ){
            _this.$Modal.warning({

              title: "通知",
              content: "请输入完整~"
            });


          }else {
            var _this=this;
              if(luhmCheck(banknum)){

                var parame={"Uid":this.token,"Bank":name,"Sub":banknamet,"Uname":bankbody,"Account":banknum
                };
                //POST /api/v1/UserBase/UserBankAddApi
                api.post("UserBase/UserBankAddApi",parame).then(function (rsp) {
                  if (rsp.code==200){
                    _this.$Modal.success({

                      title: "通知",
                      content: "添加成功~"
                    });
                    _this.getBank();
                    _this.closeAdd();
                  }


                })
              }else {
                _this.$Modal.warning({

                  title: "通知",
                  content: "银行卡格式不对~"
                });
              }




          }
          //删除银行卡
      },deleteadz(item){
        var accId=item.userBanAcc_ID;
        console.log(this.token);





        //默认银行卡
      },defaultdz(item){
        var accId=item.userBanAcc_ID;
        var _this=this;
        var parame={"Uid":this.token,"UserBanAcc_ID":accId};
        /*POST /api/v1/UserBase/UserBankSetApi*/
        api.post("UserBase/UserBankSetApi",parame).then(function (rsp) {

          if (rsp.code==200){

            _this.$Modal.success({

              title: "通知",
              content: "设置默认银行卡成功~"
            });
            _this.getBank();
          }

        })


      }

    },computed: {
      ...mapGetters([
        'token'
      ]),
    },


  }

</script>
<style lang="scss" scoped>
  @import "../../../../assets/css/sass/base.scss";
  .bankcc{
    opacity: 0.7;
    position: fixed;
    display: none;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-user-select: none;
    z-index: 1024;
    background: rgb(0, 0, 0);
  }
  .bank {
    display: none;
    width: 600px;
    height: 425px;
    position: absolute; outline: 0px; left: 400px; top: 200px; z-index: 1024;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 0 0 256px rgba(255, 255, 255, .3);
  }

  .bank .add_bank_title {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;

  }

  .bank_main {
    width: 95%;
    margin-top: 10px;

  }
  .bank_main .bank_title{
    height: 50px;

    border-bottom: 1px solid #eee;
  }


  .bank_main .bank_title {
    height: 40px;
    border-bottom: 1px solid #eee;



  }

  .bank_main .bank_title .bank_title_left {
    line-height: 40px;
    color: #000;
    font-size: 14px;

    font-weight: 600;
    padding-bottom: 10px;

  }

  .table-striped th{
    text-align: center;
  }
  .table-striped td{
    text-align: center;
  }

  .bank_title_right {
    line-height: 40px;
    color: #fff;
    font-size: 15px;
    margin-right: 10px;
    float: right;
  }

  .bank_main .bank_content {
    height: 70px;

    border-top: 1px solid #eee;

  }

  .bank_main  .bt-def {

    width: 70px;
    height: 24px;
    display: inline;
    color: #fff;
    background-image: url("../../../../assets/static_hjc/buttonbg_default.png" );
    background-repeat: no-repeat;
    font-size: 12px;
    padding: 4px 11px;
    text-align: center;


  }
 /* .table-striped tr[data-v-69a5f8d2]{

  }*/

  .bank_main .bt-def1{

    width: 50px;
    height: 24px;
    display: inline;
    font-size: 14px;
    padding: 2px 10px;
    text-align: center;
    color: $MainColor;

  }

  .bank_main  .bt-det {
    width: 50px;
    height: 24px;
    display: inline;
    font-size: 14px;
    text-align: center;
    color: #ff3d3d;
    padding-left: 10px;

  }

  .bank_main .bank_content .bank_content_message {

    text-align: center;font-size: 16px;line-height: 70px
  }

  .add_bank {
    display: block;
    background-color: #fff;
    border: 1px solid $MainColor;
    padding: 2px 10px;
    color: $MainColor;
  }
  .bank_title_two_right{

    float: right;
    display: inline-block;
    color: $MainColor;

  }
  .us_type1 .seleter_third{
    margin-top: 5px;


  }
  .us_type1 {
    margin-left: 20px;
  }

  .us_type1 .add_bank_xq {
    margin-top: 7px;
    width: 350px;
    height: 80px;
    padding: 5px;
    line-height: 30px;
    font-size: 14px;
    border: 1px solid #d6d6d6;
    border-radius: 5px;
    resize: none
  }

  .us_type1 .add_bank_me{
    margin-top: 7px;
    width: 200px;
    height: 30px;
    padding: 5px;
    line-height: 15px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #d6d6d6;
    resize: none

  }


  .profile form.bank {
    float: left;
    width: 100%;
  }

  .bank .us_type1 {
    height: auto;
    margin-bottom: 20px;
    line-height: 35px;
    overflow: hidden;
  }

  .bank .us_type1 label, .message .us_type1 p {
    margin-top: 5px;
    display: inline-block;
    float: left;
    width: 95px;
  }

  .bank .us_type1 p {
    width: 285px;
    color: #666;
  }

  .bank input[type="button"], .bank input[type="button"] {
    display: block;
    width: 146px;
    margin: 5px;
    line-height: 30px;
    color: $MainColor;
    border: 1px solid $MainColor;
    cursor: pointer;
  }

  .bank input[type="button"]:hover, .bank input[type="button"]:hover {
    font-size: 15px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .bank input[type="button"] {
    display: inline-block;
    float: right;
    margin-right: 248px;
    color: $MainColor;
    border: 1px solid $MainColor;
    background: #fff;
  }
  .us_type1 span{
    color: #999;
   display: inline-block;
   line-height: normal;
    margin-left: 1px;

  }
  .table-striped tr{height: 50px;border-bottom: 1px dashed #ccc}
  .us_type1 input[type="text"]{
    border-radius: 5px;
    border:1px solid #ccc;
    height: 30px;
    width: 200px;
  }
</style>
