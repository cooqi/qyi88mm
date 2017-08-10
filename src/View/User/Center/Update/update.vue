<template>
  <div id="app">
   <div class="update_main">
     <div class="update_title">
       <p class="update_title_left">修改个人信息</p>
     </div>
     <div class="update_content">
       <div class="update_left" style="float: left">
     <div class="form-group ">
     <label style="font-weight: normal" class="first_child">姓名</label>
       <input style="margin-left: 130px" class="form-control " type="text" placeholder="请输入您的账号" v-model="username"/>
       <span style="margin-top: 18px;display: inline-block;margin-left: 15px;color: #999">账号：18675888888</span>
     </div>


     <div>
       <label style="font-weight: normal" >性别 </label>

       <Radio-group style="margin-left: 130px;margin-top: 5px" v-model="sex">
         <Radio label="man">

           <span style="font-weight: normal">男</span>
         </Radio>

         <Radio label="woman">

           <span style="font-weight: normal">女</span>
         </Radio>

       </Radio-group>

     </div>

     <div style="height: 60px">
       <label style="font-weight: normal">出生日期</label>
       <Date-picker  type="date" v-model="value"  placeholder="选择日期" style="width: 160px;margin-left: 100px;display: block;float: left;margin-top: 10px"></Date-picker>
     </div>

     <div>
       <label style="font-weight: normal" class="first_child">身份证</label>
       <input style="margin-left: 115px" class="form-control " type="text"  v-model="num"/>
       <span style="margin-top: 18px;display: inline-block;margin-left: 15px;color: #999">选填</span>
     </div>

     <div style="float: left;margin-top: 15px">
       <label style="font-weight: normal">邮箱</label>
       <input style="margin-left: 130px" class="form-control " type="text"  v-model="email"/>
       <span style="margin-top: 18px;display: inline-block;margin-left: 15px;color: #999">选填</span>
     </div>
         <p style="margin-top: 120px" class="baochun" @click="baocun">更改保存</p>

       </div>
       <div class="update_right" style="float: right;margin-right: 15px">
        <!--<img class="userphoto"  src="../../../../assets/static_hjc/userphoto.png" />-->
       <!--  <a @click="modal1 = true" class="changePw"  >修改个人密码</a>-->
       </div>
       <Modal
         v-model="modal1"
         title="修改密码"
         @on-ok="ok"
         @on-cancel="cancel">
         <div class="change">
           <label>原始密码：</label> <Input  v-model="oldpw" placeholder="请输入..." style="width: 300px"></Input>
         </div>
         <div class="change1" style="margin-left: 32px">
           <label>新密码：</label> <Input type="password" v-model="newpw" placeholder="请输入..." style="width: 300px"></Input>
         </div>
         <div class="change">
           <label>确认密码：</label> <Input type="password" v-model="okpw" placeholder="请输入..." style="width: 300px"></Input>
         </div>

       </Modal>


     </div>

   </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../../../assets/css/sass/base.scss";

  .change {
    margin: 20px;

  }
  #app {

    font-family: "Microsoft YaHei",sans-serif;
    color: #000;
  }

  .update_right .userphoto{
    width: 67px;
    height: 67px;
    margin: 10px;
  }
   .update_right .changePw{
     font-size: 13px;
    margin-left: 5px;
     color: $MainColor;
     display: block;


   }
  .baochun{
    font-size: 14px;
    display: inline-block;
    border: 1px solid $MainColor;
    padding: 5px;
    color: $MainColor;

  }
  .update_main{
    width: 100%;

  }
  .update_main .update_title {
    height: 40px;
    border-bottom: 1px solid #eee;
    margin-right: 25px;



  }
  .update_main label{
    display: inline-block;
    float: left;
    margin-top: 18px;
  }

  .update_main input{
    width: 150px;
    height: 30px;
    float: left;
    margin-top: 13px;
    margin-left: 100px;


  }
  .update_main .update_title .update_title_left {
    line-height: 40px;
    color: #000;
    font-size: 14px;

    font-weight: 600;
    padding-bottom: 10px;

  }
</style>
<script>
  import api from '../../../../fetch/api'
  import { mapGetters,mapActions } from 'vuex'
  import {IdentityCodeValid} from '../../../../assets/static_hjc/utils';
  export default {
      name:'app',
    data(){
          return{
            sex: 'man',
            username:'',
            num:'',
            email:'',
            value:'',
            modal1: false,
            oldpw:'',
            newpw:'',
            okpw:''

          }

    },
    methods:{

      baocun(){
          ///api/v1/UserBase/AlterUserbaseinfoApi
        var _this=this;
        const title = '通知';
        const content = '<p>一些对话框内容</p><p>一些对话框内容</p>';
        var sexs=0;
        if(this.sex=="man"){
          sexs=0;
        }else {
          sexs=1;
        }

        /*POST /api/v1/UserBase/AlterUserbaseinfoApi*/
       if(!this.username &&this.username.length == 0&&!this.value&&this.value.length==0){
         _this.$Modal.warning({

           title: "通知",
           content: "请至少修改一项~"
         });

       }else {
           if(this.num&&this.num.length!=0){
               IdentityCodeValid
           }

         var parme={"Uid":this.token,"Name":this.username,"Sex":sexs,"Birthday":this.value};
         api.post("UserBase/AlterUserbaseinfoApi",parme).then(function (rsp) {
           if (rsp.code==200){
             _this.$Modal.success({

               title: "通知",
               content: "修改个人信息成功~"
             });


           }
         })
       }
      }
      /*弹出到修改密码界面*/
      ,ok () {
        var _this=this;
        alert(_this.oldpw+"..."+_this.newpw+"..."+_this.okpw);


    },
    cancel () {

    }



    },computed: {
      ...mapGetters([
        'token'
      ]),
    },


  }


</script>
