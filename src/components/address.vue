<style scoped>
  .address_add{position: fixed;overflow:hidden;top:0;left: 0;background: rgba(0,0,0,0.3);width: 100%;height: 100%;z-index: 99}
  .address_add .add_box{position: relative;width: 100%;height: 100%}
  .address_add .add_box .box{position: absolute;z-index: 999;width: 600px;height: 360px;top:0;right: 0;bottom: 0;left: 0;margin: auto;background: #fff;padding: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
  .palyStatu{overflow: hidden}
  .palyStatu p{width: 40%;float: left;height: 35px;line-height: 35px;text-align: center;cursor: pointer;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  .palyStatu p.cancel{border:1px solid orangered;float: right;color: orangered }
  .palyStatu p.ok{border:1px solid limegreen;color: limegreen }
</style>
<template>
  <div class="address_add">
    <div class="add_box">
      <div class="box">
        <Cascader :data="data" trigger="hover" v-model="value2" @on-change="addr"></Cascader>
        <Input v-model="value3" placeholder="联系人" style="margin: 10px 0"></Input>
        <Input v-model="value4" placeholder="电话" style="margin: 10px 0"></Input>
        <Input v-model="value5" placeholder="详细地址" type="textarea" :rows="4" style="margin: 10px 0"></Input>

        <div class="palyStatu">
          <p class="ok" @click="OK">确定</p>
          <p class="cancel" @click="cancel">取消</p>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  import api from '../fetch/api'
  import Address from '../assets/js/map.js'
  export default {
      computed:{
        ...mapGetters([
            'addressShow',
          'token'
        ])
      },
    data () {
      return {
       // addressShow:false,
        value3:'',
        value4:'',
        value5:'',
        value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
        data: Address.Address,
        selectedData:''
      }
    },
    methods: {
      ...mapActions([
        'ADDaddress',
        'closeAddress'
      ]),
      OK () {
          if(this.selectedData==''){
            this.$Notice.error({
              top:50,
              title: '请选择地址',
              desc:'请选择地址',

            });
            return false
          }
        if(this.value3==''){
          this.$Notice.error({
            top:50,
            title: '请填写联系人信息',
            desc:'请填写联系人信息',

          });
          return false
        }
        if(this.value4==''){
          this.$Notice.error({
            top:50,
            title: '请填写手机号',
            desc:'请填写手机号',

          });
          return false
        }
        if(this.value5==''){
          this.$Notice.error({
            top:50,
            title: '请填写详细地址',
            desc:'请填写详细地址',

          });
          return false
        }
        let _this=this;
          let pamars={
            Uid:this.token,
            Prov:this.selectedData[0].label,
            City:this.selectedData[1].label,
            Area:this.selectedData[2].label,
            Info:this.value5,
            X:0,
            Y:0,
            Contact:this.value3,
            Phone:this.value4
          }
          api.post('UserBase/UserAddersAddApi',pamars)
            .then(function (rsp) {
              _this.closeAddress()
              window.location.reload()
            })

      },
      cancel(){
        this.closeAddress()
      },
      addr(value, selectedData){
          this.selectedData=selectedData
        console.log(selectedData)
      }
    }
  }
</script>
