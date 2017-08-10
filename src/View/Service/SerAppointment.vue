
<style lang="scss" scoped>
  /*预约页面*/
  @import "../../assets/css/sass/base.scss";

  .life{
    background: #fff;
    margin: 30px auto;
    padding: 30px;
    font-family: 微软雅黑,宋体;
  }
  .life > h4 {
    line-height: 40px;
    margin-bottom: 30px;
    font-size: 17px;
    font-weight: normal;
    color: #666;
    border-bottom: 2px solid #eee;
  }

  /*快速下单*/
  .produce > div > ul li.action {
    background-color: #5bc0de;
  }
  .produce > div > ul li:hover {
    border-color: #5bc0de;
  }
  .fa_content {
    height: auto;
    margin: 0 auto;
    padding: 20px;
    color: #666;
    overflow: hidden;
  }
  .product-photo {
    float: left;
    width: 292px;
    height: 330px;
    overflow: hidden;
    background-size: cover;
  }
  .product-photo .slick{height: 300px;background: url("../../assets/static_zc/img_zc/demo.png") no-repeat;background-size: cover}
  .product-photo img {
    width: 100%;
  }
  .product-photo dl {
    width: 100%;
    height: auto;
    margin-top: 20px;
    overflow: hidden;
  }
  .product-photo dl dt {
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: bold;
  }
  .product-photo dl dd {
    padding-top: 10px;
    font-size: 14px;
    border-top: 1px solid #ccc;
  }
  .produce {
    margin-left:350px;
    padding-left: 30px;
  }
  .produce > div {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    font-size: 15px;
    overflow: hidden;
  }
  .produce > div label {
    float: left;
    width: 80px;
    margin-right: 25px;
    line-height: 27px;
  }
  .produce > div span {
    line-height: 28px;
  }
  .produce > div input, .produce > div select {
    height: 26px;
    text-align: center;
    color: #666;
    border: 1px solid #d6d6d6;
  }
  .produce > div select {
    width: 80px;
  }
  .produce > div input {
    float: left;
    margin-right: 10px;
    padding: 0 10px;
  }
  .produce > div select {
    height: 28px;
    padding: 0 0px 0 10px;
  }
  .produce > div select option {
    padding: 5px 0;
    text-align: center;
  }
  .produce > div select option:hover {
    color: #f3a519;
  }
  .produce > div > ul {
    float: left;
    width: 513px;
    height: auto;
  }
  .produce > div > ul li {
    float: left;
    height: auto;
    margin-bottom: 5px;
    padding: 3px 10px;
    margin-right: 15px;
    text-align: center;
    border: 1px solid #fff;
    cursor: pointer;
  }
  .produce > div > ul li:hover {
    height: auto;
    border: 1px solid #f3a519;
  }
  .produce > div > ul li.action {
    color: #fff;
    background-color: #f3a519;
  }
  .produce > div.clearH {
    height: 1px;
    border-top: 1px solid #ccc;
  }
  .produce > div textarea {
    width: 280px;
    padding: 2px;
    font-size: 15px;
    border: 1px solid #e2e2e2;
    resize: none;
  }
  .produce > div p {
    display: inline-block;
    float: right;
    padding: 0 10px;
    line-height: 28px;
  }
  .produce > div p i {
    display: inline-block;
    font-style: normal;
    font-size: 20px;
    color: #f3a519;
  }
  .produce input[type="submit"] {
    display: block;
/*    float: right;*/
    margin-right: 5px;
    background-color: #fff;
  }
  input[type="submit"], .us_type1 input[type="button"] {
    width: 146px;
    /*margin: 20px 0 10px 209px;*/
    line-height: 30px;
    color: #f3a519;
    background-color: #fff;
    border: 1px solid #f3a519;
  }

  .address {
    float: left;
    height: auto;
    overflow: hidden;
  }
  .address ul {
    width: 513px;
    height: auto;
  }
  .address ul li {
    margin-bottom: 10px;
    padding: 1px;
    line-height: 25px;
    cursor: pointer;
  }
  .address ul li b {
    margin-left: 10px;
    vertical-align: top;
    font-weight: normal;
    color: #ff796c;
    cursor: pointer;
  }
  /*.address ul li b.set {display: none;}*/
  .address ul li span {
    display: inline-block;
    width: 410px;
    height: 27px;
    line-height: 27px;
    padding-left: 10px;
  }
  .address ul li span.address_style {
    color: #fff;
    background-color: #f3a519;
  }
  .address ul li b.default {
    color: #acacac;
  }
  .address ul li b:hover {
    border-bottom: 1px solid #ff796c;
  }
  .address ul li b.default:hover {
    border: 0;
  }
  .address ul li:hover {
    padding: 0;
    border: 1px solid #f3a519;
  }
  .address input[type="button"] {
    display: block;
    width: 100px;
    height: 25px;
    margin: 0 auto;
    vertical-align: text-top;
    font-size: 12px;
    color: #fff;
    background-color: #f3a519;
    cursor: pointer;
  }
  .address input[type="button"]:hover {
    border-color: #f3a519;
  }


  .hint {
    width: auto;
    vertical-align: top;
  }

  .slick {
    width: 292px;
    height: 194px;
  }
  .slick img{
    width: 100%; height: 100%;
  }
  .dates{overflow: hidden}
  .dates .dateChoose{width: 200px;float: left}
  .dates #time{width: 100px;float: left;margin-left: 10px}

  .ser-con{margin-top: 10px;}
  .ser-con h3{height: 50px;line-height: 50px;font-size: 18px;font-weight: bold;border-bottom: 2px solid #eee}
  .cons img{width: 100%;}
  .life #num{width: 50px}
</style>




<template>
  <div class="life">
    <h4>快速下单 <span>QUICK ORDER</span></h4>

    <div class="fa_content">
      <div class="product-photo">
        <div class="slick">
          <templat v-if="lstHeadAtt.length>0">
            <img :src=" item.AttaUrl" alt='' v-for="(item,index) in lstHeadAtt" v-if="index==0"/>
          </templat>
        </div>
        <p v-text="itemDetail.servItemTitle" style="line-height: 30px"></p>
      </div>

      <div class="produce">
        <div>
          <label>服务产品：</label>
            <span v-text="itemDetail.ServItemName"></span>
        </div>

        <div>
          <label>服务规格：</label>

          <ul>
            <li :class="['lis'+index,index==0?'action':'']" @click="serSpec(index,item.SN,item.Name,item.Price,item.Unit)" v-for="(item,index) in listSpec" v-text="item.Name"></li>
          </ul>
        </div>

        <div>
          <label>服务价格：</label>

          <span v-text="'￥'+priceUnit"></span>

          <input type="hidden" value="" />
        </div>

        <div>
          <label v-if="cl=='jgyl'">床位数量：</label>
          <label v-else>服务数量：</label>

          <input type="button" value="-" @click="subtraction">
          <input type="text" id="num" v-model="num" @keyup="test">
          <input type="button" value="+" @click="add">
        </div>

        <div class="clearH"></div>

        <div  class="dates" v-if="itemDetail.servGroup==1">
          <label>预约时间：</label>
          <div class="dateChoose">
            <Date-picker type="date" :options="options3" placeholder="选择日期" style="width: 200px" @on-change="chooseDate" ></Date-picker>
          </div>


          <select id="time" v-model="ser_time.time">
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
          </select>
        </div>



        <input type="submit" value="发起预约" @click="appoint"/>
      </div>

    </div>
    <div class="ser-con">
      <h3>服务详情</h3>
      <div class="cons">
        <img :src="item.AttaUrl" alt="" v-for="item in lstFootAtt">
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import api from  '../../fetch/api'

  export default {
    data () {
      return {
        options3: {
          disabledDate (date) {
            //return date && date.valueOf() < Date.now(); //不可选今天
            //不能选择今天以前的日期包括今天，一天 是 86400000，
            return date && date.valueOf() < Date.now()-86400000;  //可选今天
          }
        },
        num:1,//数量
        ser_pro_id:1,    //服务产品选择id
        ser_spec_id:1,   //服务规格选择id
        ser_time:{
            date:'',
            time:'8:00'
        },           //选择时间
        newDate:'',  //最后拼接的日期date+time
        address:'',  //选择地址
        ps:'',   //附加信息留言
        Item_ID:'',
        ServClass:'',
        itemDetail:{},
        listSpec:{},
        lstFootAtt:{},
        lstHeadAtt:{},
        price:'',
        SN:'',
        spec_name:'',
        priceUnit:'',
        cl:''//判断是否是jg
      }
    },
    methods:{
      ...mapActions([
          'ADDaddress',
           'NavLink'
      ]),
      subtraction(){
          if(parseInt(this.num)==1){
              return false
          }
          this.num--
      },
      add(){
        this.num++
      },
      test(){
          this.num=this.num.replace(/\D/g,'');
      },
      serPro(id){
          this.ser_pro_id=id
        $('.li'+id).addClass('action').siblings().removeClass('action')
      },
      serSpec(id,SN,name,price,unit){
        this.ser_spec_id=id
        this.SN=SN
        this.Name=name
        this.priceUnit=(price/100)+'('+unit+')'
        this.price=(price/100)
        $('.lis'+id).addClass('action').siblings().removeClass('action')
      },
      chooseDate(date){
          this.ser_time.date=date
          this.newtime()
      },
      newtime(){
          this.newDate=this.ser_time.date+' '+this.ser_time.time+':00'
      },
      getdata(){
        var _this=this;
        var pamars={
          Item_ID:this.Item_ID,
          ServClass:this.ServClass,
        }
        api.get('family/Malldetail',pamars)
          .then(function(rsp){
            _this.itemDetail=rsp.data.itemDetail
            _this.listSpec=rsp.data.listSpec
            _this.lstFootAtt=rsp.data.lstFootAtt
            _this.lstHeadAtt=rsp.data.lstHeadAtt
            _this.price=(rsp.data.listSpec[0].Price)/100
            let unit=rsp.data.listSpec[0].Unit
            _this.priceUnit=_this.price+'('+unit+')'
            _this.SN=rsp.data.listSpec[0].SN
            _this.spec_name=rsp.data.listSpec[0].Name
          })
      },
      appoint(){
          if(this.ser_time.date==''&&this.itemDetail.servGroup==1){
            this.$Notice.error({
              top:50,
              title: '请选择预约日期',
              desc:'请选择预约日期',

            });
            return false;
          }
          let pamars={
              goods:{
                id:  this.Item_ID,
                name:this.itemDetail.ServItemName,
                img:this.lstHeadAtt.length>0?this.lstHeadAtt[0].AttaUrl:''
              },
              spec:{
                  name:this.spec_name,
                  id:this.SN,
                price:this.price
              },
            Count:parseInt(this.num),
            AppoTime:this.newDate,
            OrderType:this.ServClass,
            price:this.price*parseInt(this.num)
          }
        localStorage.setItem('order',JSON.stringify(pamars))
          this.$routeGo('createOrder')
      }
    },
    mounted(){
      this.Item_ID=this.$route.query.id
      this.ServClass=this.$route.query.type
      this.cl=this.$route.query.cl
      this.NavLink(this.cl)
      this.getdata()
    }
  }
</script>
