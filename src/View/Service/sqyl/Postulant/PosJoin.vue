<style lang="scss" scoped>
  @import "../../../../assets/css/sass/base.scss";

  .mbox {
    width: 100%;
    padding: 30px 0;
    margin: 0;
    background-color: #fff;
    min-height: 654px;
  }

  .box {
    clear: both;
    padding: 0 20px 10px;
    margin: 0;
  }

  .lt {
    float: left;
    width: 200px;
    padding: 0;
  }

  .rt {
    margin-left: 240px;
    /*width: 85%;*/
    height: auto;
  }

  /*左边导航*/
  #PostNav {
    position: relative;
    -webkit-padding-start: 0;
  }

  #PostNav div {
    list-style: none;
    font-size: $fontSize03;
    text-align: center;
    color: #424242;
    background-color: #eff7ff;
    height: 50px;
    line-height: 50px;
    width: 100%;
    cursor: pointer;
  }

  #PostNav .selected {
    color: #0e99ed;
    background-color: #f8fbff;
    border-left: 5px solid #0e99ed;
  }

  #PostNav .hr {
    height: 3px;
    padding: 0;
    background-color: #fff;
  }

  .btnReply {
    color: #0e99ed;
    font-size: $fontSize03;
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
    margin: 20px 0 0;
    width: 100%;
    background-color: #eff7ff;
    border: 1px solid $ComColor01;
    cursor: pointer;
  }

  /*右边列表*/
  .rt .title {
    font-size: $fontSize03;
    color: #000;
    padding: 0 0 30px;
    border-bottom: 1px solid #e2e2e2;
  }

  form {
    width: auto;
    height: auto;
    padding: 0;
    overflow: hidden;
  }

  form div {
    height: auto;
    line-height: 30px;
    margin-top: 30px;
    color: #666;
    overflow: hidden;
  }

  form div label {
    display: inline-block;
    width: 100px;
    margin-right: 5px;
    margin-bottom: 0;
    vertical-align: top;
    font-size: $fontSize02;
    color: #424242;
    font-weight: normal;
  }

  form div select {
    width: 100px;
    height: 27px;
    text-align: center;
    color: #666;
    border-color: #e2e2e2;
  }

  form div input {
    color: #666;
    line-height: 25px;
    padding: 0 10px;
    border: 1px solid #e2e2e2;
  }

  form div textarea {
    display: inline-block;
    width: 400px;
    height: 50px;
    line-height: 25px;
    margin: 5px 0;
    padding: 2px 5px;
    font-size: 14px;
    border: 1px solid #e2e2e2;
    resize: none;
  }

  /*form div textarea::-webkit-input-placeholder:after{
    display:block;
    content:"line@ \A line#";!*  \A 表示换行  *!
    color:red;
  }

  form div textarea::-moz-placeholder:after{
    content:"line@ \A line#";!*  \A 表示换行  *!
    color:red;
  }*/

  form div button[type=button] {
    font-size: $fontSize03;
    color: #0e99ed;
    background-color: #fff;
    border: 1px solid #0e99ed;
    height: 50px;
    padding: 0 30px;
  }
</style>
<template>
  <!--志愿者列表/分为社区、高校、社会-->
  <div>
    <SqylSubNav></SqylSubNav>
    <div class="content">
      <div class="mbox">
        <div class="box">
          <div class="lt">
            <div id="PostNav">
              <div @click="loadData(1)">社区志愿者</div>
              <div class="hr"></div>
              <div @click="loadData(2)">高校志愿者</div>
              <div class="hr"></div>
              <div @click="loadData(3)">社会志愿者</div>
            </div>
            <div class="btnReply" @click="$routeGo('posjoin')">申请加入志愿者队伍</div>
          </div>
          <div class="rt">
            <div class="title">加入志愿者</div>
            <form id="posJoinForm" method="">
              <div>
                <label>社区名称</label>
                <select v-model="familyId">
                  <option value="0000000000000000" selected="selected">全部</option>
                  <option :value="option.family_ID" v-for="option in comms">{{option.family_Name}}</option>
                </select>
              </div>
              <div>
                <label>类型</label>
                <select v-model="type">
                  <option value="1">社区志愿者</option>
                  <option value="2">高校志愿者</option>
                  <option value="3">社会志愿者</option>
                </select>
              </div>
              <div>
                <label>姓名</label><input type="text" v-model="realname" placeholder="请输入姓名"/>
              </div>
              <div>
                <label>性别</label>
                <select v-model="sex">
                  <option value="1">男</option>
                  <option value="2">女</option>
                  <option value="3">不详</option>
                </select>
              </div>
              <div>
                <label>年龄</label><input type="text" v-model="age" @keyup="inputNumber()" placeholder="请输入年龄"/>
              </div>
              <div>
                <label>联系方式</label><input type="text" v-model="phone" placeholder="请输入联系方式"/>
              </div>
              <div>
                <label>联系地址</label><textarea rows="3" v-model="address" placeholder="请输入联系地址"></textarea>
              </div>
              <div>
                <button type="button" id="btnAdd" @click="add">提&nbsp;&nbsp;&nbsp;&nbsp;交</button>
              </div>
            </form>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import SqylSubNav from '../../../../components/SqylSubNav.vue'
  import {mapGetters, mapActions} from 'vuex'
  import {utils} from '../../../../config/utils'
  import api from '../../../../fetch/api'
  export default{
    data(){
      return {
        comms: [],
        familyId: '0000000000000000',
        type: 1,
        cate: 1,
        realname: '',
        sex: 1,
        age: '',
        phone: '',
        address: ''
      }
    },
    components: {
      SqylSubNav
    },
    mounted(){
      //this.loadData(1);
      this.loadComm();
    },
    methods: {
      loadData(t) {
        this.$routeGo('/sqzyz', {cate: t}, true);
      },
      loadComm: function () {
        var that = this;
        api.get('ZhengfuFamilypension/FamilypensionScreemOneApi', {}).then(function (res) {
          that.comms = res.data;
        });
      },
      inputNumber: function () {
        if (this.age < 1 || this.age > 200) {
          this.$Notice.error({
            top: 50,
            title: '温馨提示',
            desc: '年龄格式不正确！'
          });
          return false;
        }
        this.age = this.age.replace(/\D/g, '');
      },
      add(){
        var that = this;
        if (utils.isEmpty(that.realname)) {
          this.$Notice.error({
            top: 50,
            title: '温馨提示',
            desc: '姓名不能为空！'
          });
          return false;
        }
        if (utils.isEmpty(that.age)) {
          this.$Notice.error({
            top: 50,
            title: '温馨提示',
            desc: '年龄不能为空！'
          });
          return false;
        }
        if (!utils.isPhone(that.phone)) {
          this.$Notice.error({
            top: 50,
            title: '温馨提示',
            desc: '手机号格式不正确！'
          });
          return false;
        }
        if (utils.strLen(that.address) <= 0 || utils.strLen(that.address) > 100) {
          this.$Notice.error({
            top: 50,
            title: '温馨提示',
            desc: '联系地址长度为1~100个字符！'
          });
          return false;
        }
        //ajax
        api.post('ZhengfuFamilypension/intoGov_VolunteerApi', {
          Family_ID: that.familyId,
          VolunteerType: that.type,
          Name: that.realname,
          Sex: that.sex,
          Age: that.age,
          Phone: that.phone,
          Address: that.address
        }).then(function (res) {
          that.$Notice.success({
            top: 50,
            title: '温馨提示',
            desc: '加入社区志愿者成功！'
          });
          setTimeout(function () {
            that.$routeGo('/sqzyz', {cate: 1}, true);
          }, 300);
        });
      }
    }

  }

</script>
