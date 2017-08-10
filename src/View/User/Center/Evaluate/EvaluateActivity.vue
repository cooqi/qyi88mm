<template>
  <div id="app">
    <div class="evaluate_main">
      <div class="evaluate_title">
        <span>用户评价</span>
      </div>
      <div class="evaluate_content_1">

        <div class="evaluate_left">
          <img v-if="items.attaUrl=='' " src="../../../../assets/static_hq/img/demo.png" />
          <img v-else v-bind:src="items.attaUrl"/>
          <span style="width: 120px;height: auto; word-break:break-all; display: block;margin-top: 20px;color: #0e99ed;text-align: left">
            {{items.servItemName}}
          </span>
        </div>
        <div class="evaluate_right">
          <Radio-group v-model="evaluate" style="margin-bottom: 10px">
            <Radio style="font-weight: normal;font-size: 14px;color: #000" label="好评"></Radio>
            <Radio style="font-weight: normal;font-size: 14px;color: #000;margin-left: 10px" label="中评"></Radio>
            <Radio style="font-weight: normal;font-size: 14px;color: #000;margin-left: 10px" label="差评"></Radio>
          </Radio-group>
          <div class="evaluate_input">
            <span>订单编号：{{items.SN}}</span>
            <span style="float: right">下单时间：{{items.CreateTime}}</span>
            <Input style="width: 100%;margin-top: 10px" v-model="Leaving" type="textarea"
                   :rows="8" placeholder="您的评论可以帮到其他用户哟~"></Input>
          </div>
        </div>
      <div class="evaluate_content_2">
        <div class="evaluate_content_2_left">
        <span style="margin-top: 7px;font-size: 15px;color: #424242;width: 120px;display: block;background-color:#e2e2e2;height: 40px;text-align: center;line-height: 40px">商品评分</span>

        </div>
        <div class="evaluate_content_2_right">
          <div class="evaluate_go"><label >商品与描述相符</label>
            <Rate   v-model="value1" ></Rate>
          </div>
          <div class="evaluate_go"><label>卖家的服务态度</label>
            <Rate v-model="value2"></Rate>
          </div>
          <div class="evaluate_go"><label>物流服务的质量</label>
            <Rate v-model="value3"></Rate>
          </div>

          <img @click="goEvaluate()" src="../../../../assets/static_hjc/evaluate.png" style=";margin-top: 50px;display: block;width: 120px;height: 40px;margin-left: 30%"/>

        </div>
      </div>

      </div>

    </div>

  </div>
</template>
<style type="scss">
  .evaluate_main {
    width: 940px;
    height: 1000px;
  }

  .evaluate_main .evaluate_title {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #eee;
  }

  .evaluate_main .evaluate_title span {
    line-height: 40px;
    font-size: 16px;

  }

  .evaluate_main .evaluate_content_1 {
    width: 100%;
    height: 300px;
    margin-top: 30px;
  }

  .evaluate_main .evaluate_content_1 .evaluate_left {
    width: 18%;
    height: 100%;
    float: left;
  }

  .evaluate_main .evaluate_content_1 .evaluate_left img {
    width: 120px;
    height: 120px;
  }

  .evaluate_main .evaluate_content_1 .evaluate_right {
    width: 82%;
    height: 100%;
    float: right;


  }


  .evaluate_main .evaluate_content_1 .evaluate_right .evaluate_input {
    width: 100%;
    height: 235px;
    background-color: #f8fbff;
    padding: 10px;

  }

  .evaluate_main .evaluate_content_1 .evaluate_right .evaluate_input span {
    color: #424242;

  }

  .evaluate_main .evaluate_content_1 .evaluate_find {
    width: 70%;
    margin: 0 auto;
    background-color: darkgrey;
    height: 500px;

  }
  .evaluate_main .evaluate_content_2{
    width: 100%;
    height: 400px;
  }
  .evaluate_main .evaluate_content_2 .evaluate_content_2_left{
    width: 18%;
    height: 100%;
    float: left;
  }
  .evaluate_main .evaluate_content_2 .evaluate_content_2_right{
    width: 82%;
    height: 100%;
    float: right;
  }
  .evaluate_main .evaluate_content_2 .evaluate_content_2_right .evaluate_go{
    height: 30px;

  }
  .evaluate_main .evaluate_content_2 .evaluate_content_2_right label{
   font-weight: normal;
    color: #424242;
    line-height: 30px;
    margin-right: 7px;
  }



</style>
<script>
  import api from '../../../../fetch/api'
  export default{
    name: 'app',
    data(){
      return {
        evaluate: '好评',
        value1: 1,
        value2: 2,
        value3: 3,
        Leaving: '',
        Orders_ID:'',
        items:{},
      }
    }, mounted(){
      this.Orders_ID=this.$route.query.SN;

        this.getEvaluate();
    }, methods: {
      getEvaluate(){
        var _this= this;


        api.get("UserBase/UserbaseOrderDetailApi",{"Orders_ID":this.Orders_ID}).then(function (rsp) {
          _this.items=rsp.data;
        })


      },
      goEvaluate(){
        var _this = this;

        /*提交评价结果*/
        var eva = 1;
        if (this.evaluate == "好评") {
          eva = 1;
        } else if (this.evaluate == "中评") {
          eva = 0;
        } else {
          eva = -1;
        }
        if (this.Leaving == '') {
          _this.$Modal.warning({

            title: "通知",
            content: "用户留言不能为空哟~"
          });
          return
        }
        /*POST /api/v1/UserBase/UserOrdersCommentIntoApi*/

        api.post("UserBase/UserOrdersCommentIntoApi", {
          "Orders_ID": this.Orders_ID,
          "ServSco": eva,
          "QualSco": this.value1,
          "AttiSco": this.value2,
          "PuncSco": this.value3,
          "Cont": this.Leaving
        }).then(function (rep) {
          if (rep.code == 200) {


            _this.$Modal.success({

              title: "通知",
              content: "评论成功~~~~"
            });
            /*评论成功后跳转到订单列表页面*/
            _this.$routeGo('orderList');
          } else {
            _this.$Modal.warning({

              title: "通知",
              content: "网络错误，请稍候重试"
            });
          }


        })


      }

    }


  }


</script>
