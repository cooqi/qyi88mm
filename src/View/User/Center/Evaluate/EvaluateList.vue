<template>
  <div id="app">
    <div class="Evaluatelist_main">
      <div class="Evaluatelist_title">
        <span>用户评价</span>
      </div>
      <ul class="evaluatelist_ul">
        <li v-for="(item,index) in items" class="evaluatelist_li">
          <div class="evaluatelist_li_main">

            <div class="evaluatelist_li_title">
              <div style="height: 100%;width: 30%;float: left">
                <span style="line-height: 33px">订单号：</span> <span style="margin-left: 2px;color: #0e99ed">{{item.orders_ID}}</span>
              </div>
              <div class="evaluatelist_li_right" style="height: 100%;width: 70%;float: right">
                <label>质量评分:</label>
                <Rate style="margin-bottom: 5px" disabled v-model="item.qualSco"></Rate>

                <label>态度评分:</label>
                <Rate style="margin-bottom: 5px" disabled v-model="item.servSco"></Rate>

                <label>效率评分:</label>
                <Rate style="margin-bottom: 5px" disabled v-model="item.puncSco"></Rate>


              </div>
            </div>
            <div class="evaluatelist_li_content">
              <div class="evaluatelist_li_content_left">
                <img src="../../../../assets/static_hq/img/demo.png"/>
                <!-- <img v-else v-bind:src="item.attaUrl"/>-->

              </div>
              <div class="evaluatelist_li_content_right">
                <div class="li_content_right_fun">{{evaluates[index].servItemName}}<span></span> <span
                  style="float: right;color: #0e99ed;font-size: 15px">好评</span></div>
                <div class="li_content_right_fun">{{item.name}}</div>
                <div class="li_content_right_fun" style="background-color: #eee;padding-left: 10px">{{item.cont}}</div>
                <div class="li_content_right_fun"><span style="float: right">{{item.CreateTime}}</span></div>

              </div>
            </div>


          </div>
        </li>

      </ul>
    </div>
  </div>
</template>
<style type="scss">
  .Evaluatelist_main {

    width: 940px;
    height: 1000px;
  }

  .Evaluatelist_main .Evaluatelist_title {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #eee;
  }

  .Evaluatelist_main .Evaluatelist_title span {
    line-height: 40px;
    font-size: 16px;
  }

  .Evaluatelist_main .evaluatelist_ul {
    height: auto;
    width: 100%;
    margin-top: 30px;
  }

  .Evaluatelist_main .evaluatelist_ul .evaluatelist_li {
    height: 250px;
    border: 1px solid #eee;

  }

  .Evaluatelist_main .evaluatelist_ul .evaluatelist_li .evaluatelist_li_main {
    width: auto;
    height: auto;
    margin: 15px;

  }

  .Evaluatelist_main .evaluatelist_ul .evaluatelist_li .evaluatelist_li_main .evaluatelist_li_title {
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #eee;

  }

  .Evaluatelist_main .evaluatelist_ul .evaluatelist_li .evaluatelist_li_main .evaluatelist_li_right label {
    margin-left: 17px;
    font-weight: normal;
    font-size: 14px;

  }

  .Evaluatelist_main .evaluatelist_ul .evaluatelist_li .evaluatelist_li_main .evaluatelist_li_content_left {

    width: 15%;
    float: left;
    height: 100%;
  }

  .Evaluatelist_main .evaluatelist_ul .evaluatelist_li .evaluatelist_li_main .evaluatelist_li_content_right {

    width: 80%;
    float: right;
    height: 100%;
  }

  .Evaluatelist_main .evaluatelist_ul .evaluatelist_li .evaluatelist_li_main .evaluatelist_li_content_left img {
    float: left;
    margin-top: 22px;

    width: 135px;
    height: 135px;

  }

  .Evaluatelist_main .evaluatelist_ul .evaluatelist_li .evaluatelist_li_main .evaluatelist_li_content_right .li_content_right_fun {
    width: 100%;
    height: 48px;
    line-height: 48px;
    margin-top: 5px;
  }


</style>
<script>
  import api from '../../../../fetch/api'
  import {mapGetters, mapActions} from 'vuex'
  export default{

    name: 'app',
    data(){
      return {
        items:[],
        comList:[],
        list:[],
        evaluates:[],

      }
    }, mounted(){
      this.getEvaList();
    }
    ,
    methods: {
      getEvaList(){
          var _this=this;
         // var list=[];
        /*获取订单列表 GET /api/v1/UserBase/UserOrdersCommentListApi*/
        api.get("UserBase/UserOrdersCommentListApi", {"UserBase_ID": this.token}).then(function (rsp) {
            for(var i=0;i<rsp.data.length;i++){
                if(rsp.data[i].commList.length>0){
                  _this.list.push(rsp.data[i].commList);
                }
         }
          _this.evaluates=rsp.data;

         for (var c=0;c<_this.list.length;c++){
                _this.items.push(_this.list[c][0]);
         }
        /* console.log(_this.items.length)*/
        for(var y=0;y<_this.items.length;y++){
          console.log(_this.items[y].CreateTime);
        }
        /*console.log(this.list[0])
          for(var b=0;b<list.length;b++){
            //console.log(list[b][0].cont);
          }*/


        })


      },

    }, computed: {
      ...mapGetters([
        'token'
      ]),
    }

  }


</script>
