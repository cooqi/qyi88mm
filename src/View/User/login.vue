<template>
  <div id="app">
    <div class="main_content">
      <div class="login_main">
        <div class="login_box">
          <form>
            <p class="first_child">绑定手机号</p>

            <div class="form-group username">
              <input class="form-control " type="text" placeholder="请输入您的手机号" v-model="username"/>
            </div>

            <div class="form-group password">
              <input class="form-control " type="password" placeholder="请输入您的密码" v-model="password"/>
            </div>

            <div class="form-group code">
              <input style="display: inline" class="form-control " type="text" placeholder="请输入您的验证码"
                     v-model="code"/>
              <a class="sms" @click="sms()">{{btnsmsText}}</a>
            </div>

            <a class="forgetpw">如果您是第一次绑定手机号，我们将为您创建新的账户</a>

            <div role="presentation" @click="login">
              <a class="login">绑定</a>
            </div>

          </form>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import api from '../../fetch/api'
  import {mapGetters, mapActions} from 'vuex'
  import md5 from 'js-md5';

  var _timeOut = 0, timer;
  export default{
    name: "app",
    data(){
      return {
        username: null,
        password: null,
        blank_url: '',
        btnsmsText: "获取验证码",
        isTrueTouch:true,
        code:''
      }
    },
    methods: {
      ...mapActions([
        'set_token'
      ])
      ,
      login() {

        if (this.username == null || !this.username.length > 0) {
          this.$Modal.warning({

            title: "通知",
            content: "账号输入有误~"
          });
          return
        }
        if (this.password == null || !this.password.length > 0) {
          this.$Modal.warning({

            title: "通知",
            content: "密码输入有误~"
          });

          return
        }
        /*POST /api/v1/UserBase/RegisterUserApi*/
        var _this = this;
        var parmes = {"Phone": this.username, "Password": md5(this.password), "SMS": this.code};
        api.post('UserBase/RegisterUserApi', parmes).then(function (res) {
          var Code = res.code;
          if (Code == 200) {


            if(res.data.Code==0){
              _this.set_token(res.data.Uid);
              if (_this.blank_url) {
                _this.$routeGo(_this.blank_url, {}, true);
              } else {
                _this.$routeGo('account');
              }
            }else if(res.data.Code==1){
              _this.$Modal.warning({

                title: "通知",
                content: "密码错误！"
              });
            }else if(res.data.Code==2){
              _this.$Modal.success({

                title: "通知",
                content: "注册成功！"

              });
              _this.set_token(res.data.Uid);
              if (_this.blank_url) {
                _this.$routeGo(_this.blank_url, {}, true);
              } else {
                _this.$routeGo('account');
              }
            }else if(res.data.Code==3){
              _this.$Modal.warning({

                title: "通知",
                content: "手机号已经被注册！"
              });
            }else if(res.data.Code==4){
              _this.$Modal.warning({

                title: "通知",
                content: "验证码错误！"
              });
            }





          } else {
            _this.$Modal.warning({

              title: "通知",
              content: res.data.Msg
            });

          }

        })

      }, sms(){
        /*做手机号的验证并且修改按钮的显示*/
        /*这里需要做一个手机号的验证*/
         var _this=this;
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if(!myreg.test(this.username))
        {
          this.$Modal.warning({

            title: "通知",
            content: "请输入正确的手机号码~"
          });
          return false;
        }
        api.get('UserBase/UserSmsCode',{Phone:_this.username,Type:1})
          .then(function (rsp) {

          })


        if(this.isTrueTouch) {
          this.isTrueTouch=false;
          _timeOut = 120;
          this.btnsmsText = _timeOut + "秒";
          timer = setInterval(this.countDown, 1000);
          if(_timeOut<120){
            $(".sms").css("background-color:'#000'");
          }
          }
      }, countDown(){
        _timeOut--;
        if (_timeOut < 0) {
          this.isTrueTouch=true;
          this.btnsmsText = "获取验证码";
          clearInterval(timer);
        } else {
          this.btnsmsText = _timeOut + "秒";

        }

      }

    },
    mounted(){
      this.blank_url = this.$route.query.redirect
    }
  }

</script>
<style scoped="">
  @import "../../assets/css/base_style.css";

  .sms {
    display: inline;
    width: 100px;
    height: 34px;
    float: right;
    margin-top: 20px;
    background-color: #999;
    color: #fff;
    line-height: 34px;
    text-align: center;
  }

  #app {

    font-family: "Microsoft YaHei", sans-serif;
    color: #000;
  }

  a {
    text-decoration: none;
  }

  .main_content {
    width: 100%;
    height: auto;
    background: url("../../assets/static_hjc/bg05.png") no-repeat 100% 50% #fff;

  }

  .login_main {
    width: 420px;
    height: 540px;
    margin-top: 30px;

  }

  .login_box {

    margin-top: 20px;
    margin-left: 150px;
    width: 420px;
    height: 400px;
    background: #fff;
    padding: 20px 20px;
    border: 1px solid #eee;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  }

  .first_child {
    font-size: 22px;
    color: #000;
    margin-top: 20px;

  }

  .username input , .password input{
    width: 380px;
    margin-top: 30px;

  }

  .code input {
    margin-top: 20px;
    width: 260px;

  }

  .forgetpw {
    display: block;
    color: #cccccc;
    font-size: 14px;
    margin-top: 10px;
    float: left;
  }

  .login {
    width: 380px;
    height: 37px;
    color: #fff;
    background-color: #f19725;
    display: inline-block;
    margin-top: 25px;
    text-align: center;
    line-height: 37px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 5px;
  }

</style>
