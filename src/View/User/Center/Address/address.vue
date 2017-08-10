<template>
  <div id="app">
    <div class="address_main">
      <div class="address_title">
        <p class="address_title_left">我的地址</p>
      </div>
      <div class="address_title_two" style="margin: 20px 0px 10px 0px">
        <p class="address_title_two_left" style="font-size: 15px;display: inline-block">已保存收货地址</p>
        <p class="address_title_two_right" style="" @click="add"> +添加新地址</p>
      </div>

      <table class="table table-striped">
        <tr>
          <th>收货人</th>
          <th>收货地址</th>
          <th>联系电话</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in items" >
          <td>{{item.contact}}</td>
          <td>{{item.addrProv+item.addrCity+item.addrArea+item.addrInfo}}</td>
          <td>{{item.phone}}</td>
          <td>
            <span v-if="item.isDefu==1" class="bt-def1" >默认地址</span>
            <span v-else class="bt-def" @click="defaultdz(item)">设置默认</span>
            <a class="bt-det" type="primary" @click="deleteadz(item)">删除</a>
          </td>
        </tr>
      </table>
      <Modal
        v-model="modal1"
        title="删除地址"
        @on-ok="ok"
        @on-cancel="cancel">
        <p style="font-size: 14px">您是否要删除该地址</p>
      </Modal>



    </div>
    <div class="addresscc" >

    </div>
    <div class="address">
      <div style="width: 100%;height: 100%;background: #fff">
      <div class="add_address_title">

        <span  style="line-height: 50px;color: #000;margin-left: 40%;font-size: 16px;font-weight: 300">添加新的地址信息</span>
        <div style="float: right;margin-right: 5px;display: block;margin-top: 5px" @click="closeAdd">
          <icon class="glyphicon glyphicon-remove"></icon>
        </div>

      </div>
      <div class="us_type1" >
        <label>地址：</label>
        <select style="margin-top: 15px" id="cmbProvince" name="cmbProvince" v-model="Province"></select>
        <select id="cmbCity" name="cmbCity" v-model="city"></select>
        <select id="cmbArea" name="cmbArea" v-model="area"></select>

      </div>

      <div class="us_type1">
        <label>详细地址：</label>

        <textarea class="add_address_xq"></textarea>
      </div>
      <div class="us_type1">
        <label>联系人电话：</label>

        <textarea class="add_address_me"></textarea>
      </div>
      <div class="us_type1">
        <label>联系人姓名：</label>

        <textarea class="add_address_me1"></textarea>
      </div>


      <input type="button" @click="addAddress" value="确认"/>
      </div>
    </div>

  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  import {addressInit} from '../../../../assets/static_hjc/jsAddresss';
  import api from '../../../../fetch/api'
  import {Toast} from '../../../../assets/static_hjc/utils';
  import {checkPhone} from '../../../../assets/static_hjc/utils';
  export default{

    name: 'app',
    data(){
      return {
        Province:'',
        city:'',
        area:'',
        items:{},
        modal1:false,
        userAddreId:''
      }

    },
    mounted(){
      this.getAddress();

    },
    methods: {
      getAddress () {
        /*获取地址初始化数据*/
        var _this=this;
        var parmes={"Uid":this.token};
        api.post("UserBase/UserAddersApi",parmes).then(function (res) {
            _this.items=res.data;


        })


      },
      ok () {
        var _this=this;
        var parame={"Uid":this.token,"UserAddre_ID":this.userAddreId};
        api.post("UserBase/UserAddersDeleteApi",parame).then(function (rsp) {

          if (rsp.code==200){
            _this.$Modal.success({

              title: "通知",
              content: "删除成功~"
            });
            _this.getAddress();
          }

        })
      },
      cancel () {
      },

      defaultdz (item) {
        /*设置默认地址*/
        var accId=item.userAddre_ID;
        var _this=this;
        /*POST /api/v1/UserBase/UserAddreSetApi*/
        var parame={"Uid":this.token,"UserAddre_ID":accId};
        api.post("UserBase/UserAddreSetApi",parame).then(function (rsp) {

          if (rsp.code==200){
            _this.$Modal.success({

              title: "通知",
              content: "设置默认地址成功~"
            });
            _this.getAddress();
          }

        })

      },
      deleteadz (item) {
        /*删除地址*/
        this.modal1=true;
        this.userAddreId=item.userAddre_ID;




      },
      add () {
        /*添加地址，弹出框添加地址信息*/
        $(".address").toggle();
        $(".addresscc").toggle();
        addressInit('cmbProvince', 'cmbCity', 'cmbArea');


      },
      closeAdd () {
        $(".address").toggle();
        $(".addresscc").toggle();


      },addAddress(){
         var _this =this;
        var  address_xq=$(".add_address_xq").val();
        var  address_phone=$(".add_address_me").val();
        var  address_name=$(".add_address_me1").val();

        if(!address_xq||address_xq.length==0||!address_phone||address_phone.length==0||!address_name||address_name.length==0){
          _this.$Modal.warning({

            title: "通知",
            content: "地址信息不能为空~"
          });

        }else {
          if(!this.Province||this.Province.length==0||!this.city||this.city.length==0||!this.area||this.area.length==0){

            this.Province="湖北";   this.city="武汉";  this.area="江岸区";
          }else {
              /*POST /api/v1/UserBase/UserAddersAddApi*/
              if (checkPhone(address_phone)){
                _this.$Modal.warning({

                  title: "通知",
                  content: "您输入的电话号码有误~"
                });
                  return
              }
              var param={"Uid":this.token,"Prov":this.Province,"City":this.city,"Area":this.area,"Info":address_xq,"X":'0.0',"Y":0.0,"Contact":address_name,"Phone":address_phone};
              api.post("UserBase/UserAddersAddApi",param).then(function (rsp) {
                  if(rsp.code==200){
                    _this.$Modal.success({

                      title: "通知",
                      content: "添加成功~"
                    });

                    _this.closeAdd();
                    _this.getAddress();

                  }else {
                      _this.closeAdd();
                    _this.$Modal.warning({

                      title: "通知",
                      content: "联网失败~"
                    });
                  }

              })

          }
        }




        /*if()*/
      /*  api.post("UserBase/UserAddersAddApi",)*/
      }


    },computed: {
      ...mapGetters([
        'token'
      ]),
    }


  }


</script>
<style lang="scss" scoped>
  @import "../../../../assets/css/sass/base.scss";
  @import "../../../../assets/static_hjc/city-picker.css";
  .address_title_two_right{

    float: right;
    display: inline-block;
    color: $MainColor;

  }
  ul li {
    list-style: none;
  }
  .addresscc{
    opacity: 0.7;
    position: fixed;
    display: none;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-user-select: none;
    z-index: 9;
    background: rgb(0, 0, 0);
  }
  .address {
    display: none;
    width: 600px;
    height: 425px;
    position: absolute; outline: 0px; left: 400px; top: 200px; z-index: 10;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 0 0 256px rgba(255, 255, 255, .3);
  }
  .table-striped th{
    text-align: center;
  }
  .table-striped td{
    text-align: center;
  }

  .address .add_address_title {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;

  }

  .address_main {

    width: 950px;
    margin-top: 10px;
    margin-bottom: 50px;


  }

  .address_main .address_title {
    height: 40px;
    border-bottom: 1px solid #eee;



  }

  .address_main .address_title .address_title_left {
    line-height: 40px;
    color: #000;
    font-size: 14px;

    font-weight: 600;
    padding-bottom: 10px;

  }

  .address_title_right {
    line-height: 40px;
    color: #fff;
    font-size: 15px;
    margin-right: 10px;
    float: right;
  }

  .address_main .address_content {
    height: 70px;

    border-top: 1px solid #eee;

  }

  .address_main  .bt-def1 {
    width: 70px;
    height: 24px;
    display: inline;
    color: #fff;
    /*background-image: url("../../../assets/img/address_button_defent.png");*/
    background-image: url("../../../../assets/img/address_button_defent.png" );
    background-repeat: no-repeat;
    font-size: 12px;
    padding: 4px 11px;
    text-align: center;

  }

  .address_main .bt-def {
    width: 70px;
    height: 24px;
    display: inline;
    color: $MainColor;

    font-size: 14px;
    padding: 4px 11px;
    text-align: center;

  }

  .address_main .bt-det {


    font-size: 14px;
    padding: 2px 10px;
    text-align: center;
    color: #ea2929;

  }

  .address_main .address_content .address_content_message {

    text-align: center;font-size: 16px;line-height: 70px
  }

  .add_address {
    display: block;
    background-color: #fff;
    border: 1px solid $MainColor;
    padding: 2px 10px;
    color: $MainColor;
  }

  .us_type1 .seleter_third{
  margin-top: 5px;


  }
  .us_type1 {
    margin-left: 20px;
  }

  .us_type1 .add_address_xq {
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

  .us_type1 .add_address_me {
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
  .us_type1 .add_address_me1 {
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

  .profile form.address {
    float: left;
    width: 100%;
  }

  .address .us_type1 {
    height: auto;
    margin-bottom: 20px;
    line-height: 35px;
    overflow: hidden;
  }

  .address .us_type1 label, .message .us_type1 p {
    margin-top: 5px;
    display: inline-block;
    float: left;
    width: 95px;
  }

  .address .us_type1 p {
    width: 285px;
    color: #666;
  }

  .address input[type="button"], .address input[type="button"] {
    display: block;
    width: 146px;
    margin: 5px;
    line-height: 30px;
    color: $MainColor;
    border: 1px solid $MainColor;
    cursor: pointer;
  }

  .address input[type="button"]:hover, .address input[type="button"]:hover {
    font-size: 15px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .address input[type="button"] {
    display: inline-block;
    float: right;
    margin-right: 248px;
    color: $MainColor;
    border: 1px solid $MainColor;
    background: #fff;
  }

  .table-striped tr{height: 50px;border-bottom: 1px dashed #ccc}
</style>
