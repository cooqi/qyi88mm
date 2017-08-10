<template>
  <div class="detail">
   <div class="top_info">
     <div class="imgs">
       <Carousel autoplay v-model="value2">
         <Carousel-item v-for="item in lstHeadAtt" :key="item.itemAtt_ID">
           <div class="demo-carousel">
             <img :src="item.attaUrl" alt="">
           </div>
         </Carousel-item>
       </Carousel>
     </div><!--左侧多图展示-->

     <div class="info-right">
       <div class="shop-name">
         <h3 v-text="data.itemTitle"> </h3>
         <h4 v-text="data.itemName"></h4>
       </div>
       <div class="shop-price">
         <p class="mark-price"><span class="tt">市场价￥</span><span class="pri" v-text="data.orgPrice/100"></span></p>
         <p class="sales-price"><span class="tt">促销价</span><span class="pri" v-text="'￥'+price"></span></p>
         <p class="yf"><span class="tt">销量</span><span class="pri" v-text="data.sellCount"></span></p>
       </div>
       <p class="sales-num">
         <span>自提免邮</span><span>7天退换</span><span>假一赔十</span>
       </p>

       <div class="spec">
         <p>规格</p>
         <div class="spec-span">
           <span v-for="(item,index) in listSpec" v-text="item.name" :class="['lis'+index,index==0?'on':'']"  @click="serSpec(index,item.itemSku_ID,item.name,item.price,item.stockCount)"></span>
         </div>
       </div>

       <div class="num">
         <p>数量</p>
         <div class="play">
           <span @click="subtraction">-</span>
           <input type="text" v-model="num"  @keyup="test">
           <span @click="add">+</span>
         </div>
         <p style="margin-left: 30px;width: 200px">（库存&nbsp;<span v-text="stockCount"></span>）</p>
       </div>
       <p class="buy" @click="xiadan">
         立即购买
       </p>

     </div><!--右侧详细信息-->
   </div><!--详情和图片展示-->

    <div class="describe">
      <div class="describe-mian">
        <div class="des-title">
          <p>商品详情</p>
        </div>
        <div class="des-box">
          <img :src="item.attaUrl" alt="" v-for="item in lstFootAtt">
        </div>
      </div><!--左边详情-->

      <div class="hot-shop">
        <h3>热门商品</h3>
        <ul>
          <li v-for="item in tuiJian" @click="hotGo(item.item_ID)">
            <img :src=item.logoUrl alt="">
            <p v-text="item.itemTitle"></p>
          </li>
        </ul>
      </div><!--右边热卖-->
    </div>

  </div>
</template>


<script>
  import api from  '../../fetch/api'
  export default {
    data () {
      return {
        value2: 0,
        num:1,
        Item_ID:'',
        data:{},
        listSpec:[],
        lstFootAtt:[],
        lstHeadAtt:[],
        ser_spec_id:'',   //服务规格选择id
        itemSku_ID:'',
        price:'',
        spec_name:'',
        tuiJian:[],
        stockCount:''  //库存
      }
    },
    methods:{
      subtraction(){
        if(parseInt(this.num)==1){
          return false
        }
        this.num--
      },
      add(){
          if(this.stockCount==this.num){
              return false
          }
        this.num++
      },
      test(){
        this.num=this.num.replace(/\D/g,'');
        if(parseInt(this.num)>this.stockCount){
          this.num=this.stockCount
          return false
        }
      },
      getdate(){
        var _this=this;
        var pamars={
          Item_ID:this.Item_ID,
          ServClass:7
        }
        api.get('family/Malldetail',pamars)
          .then(function(rsp){
              console.log(rsp.data.itemDetail)
            _this.data=rsp.data.itemDetail
            _this.listSpec=rsp.data.listSpec
            _this.lstFootAtt=rsp.data.lstFootAtt
            _this.lstHeadAtt=rsp.data.lstHeadAtt
            _this.price=(rsp.data.listSpec[0].price)/100
            _this.itemSku_ID=rsp.data.listSpec[0].itemSku_ID
            _this.spec_name=rsp.data.listSpec[0].name
            _this.stockCount=rsp.data.listSpec[0] .stockCount
            _this.tuiJian=rsp.data.tuiJian
          })
      },
      serSpec(id,itemSku_ID,name,price,stockCount){
        this.ser_spec_id=id
        this.itemSku_ID=itemSku_ID
        this.Name=name
        this.price=(price/100)
        this.stockCount=stockCount
        $('.lis'+id).addClass('action').siblings().removeClass('action')
      },
      xiadan(){
          if(this.stockCount<this.num){
            this.$Notice.error({
              title: '库存不足',
              desc:'库存不足',
            });
            this.num=1
            return false
          }
        let pamars={
          goods:{
            id:  this.Item_ID,
            name:this.data.itemTitle,
            img:this.data.logoUrl
          },
          spec:{
            name:this.spec_name,
            id:this.itemSku_ID,
            price:this.price
          },
          Count:parseInt(this.num),
          OrderType:7,
          price:this.price*parseInt(this.num)
        }
        localStorage.setItem('order',JSON.stringify(pamars))
        this.$routeGo('createOrder')
      },
      hotGo(id){
        this.$routeGo('/service/detail',{Item_ID:id},true)
        window.location.reload()
      }
    },
    mounted(){
        this.Item_ID=this.$route.query.Item_ID
      this.getdate()
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/css/sass/base";
  .detail{margin-top:10px;background: #fff;padding: 10px;}
  .top_info{overflow: hidden}
  .top_info .imgs{width:500px;float: left;padding: 10px;border:1px solid #eee}
  .top_info .imgs img{width: 100%;height: 400px;}

  .info-right{width: 560px;float: left;margin-left: 30px}
  .info-right .shop-name{margin-bottom: 10px;}
  .info-right .shop-name h3{font-size: 16px;font-weight: bold}
  .info-right .shop-name h4{font-size: 14px;color: $ComColor04}
  .info-right .shop-price{width: 100%;padding:10px 6px;background: #E5E4E4}
  .info-right .shop-price p{color: #666;font-size: 12px;overflow: hidden;}
  .info-right .shop-price p span{display: inline-block;float: left;}
  .info-right .shop-price p span.tt{width: 50px;}
  .info-right .shop-price p.mark-price{line-height: 20px}
  .info-right .shop-price p.mark-price span.pri{text-decoration: line-through;color: #333;font-size: 14px}
  .info-right .shop-price p.sales-price{line-height: 40px;}
  .info-right .shop-price p.sales-price span.pri{font-size: 28px;font-weight: bold;color: red}
  .info-right .sales-num{line-height: 35px;color: #666;border-width:1px 0 1px 0;border-color: #ccc;border-style: dotted;margin-top: 10px;font-size: 13px;display: flex;justify-content: space-around;}
  .info-right .spec,.info-right .num {overflow: hidden;margin-bottom: 10px}
  .info-right .spec p,.info-right .num p{float: left;width: 50px;color: #666;font-size: 13px}
  .info-right .spec .spec-span{overflow: hidden}
  .info-right .spec .spec-span span{padding: 2px 6px;border:1px solid #ccc;color: #666;display: inline-block;float: left;margin-right: 10px;min-width: 50px;text-align: center;margin-bottom: 10px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  .info-right .spec .spec-span span.on{background:$MainColor;color: #fff; border-color: $MainColor}

  .info-right .num .play{float: left;overflow: hidden}
  .info-right .num .play span{width: 26px;height: 26px;float: left;display: inline-block;background: #ccc;color: #333;text-align: center;font-size: 16px;font-weight: bold;line-height: 26px;cursor: pointer}
  .info-right .num .play input{display: inline-block;float: left;width: 50px;height: 26px;border:1px solid #ccc;text-align: center}
  .info-right .num p{line-height: 26px}
  .info-right p.buy{width: 200px;height: 40px;line-height: 40px;text-align: center;border:1px solid #ea2929;background: #FFEDED;cursor: pointer;font-size: 16px;color:#ea2929 }

  .describe{overflow: hidden;margin-top: 20px;}
  .describe .describe-mian{width: 880px;float: left}
  .describe .describe-mian .des-title{height: 35px;line-height: 35px;border-bottom:2px solid $MainColor;margin-bottom: 10px}
  .describe .describe-mian .des-title p{width: 100px;background:$MainColor;color: #fff;text-align: center }
  .describe .describe-mian .des-box{font-size: 13px;color: #333;}
  .describe .describe-mian .des-box img{width: 100%}

  .hot-shop{width: 200px;float: right;}
  .hot-shop h3{font-size: 14px;border-bottom: 1px dotted #ccc;line-height: 30px;text-align: center}
  .hot-shop ul li{margin-bottom:25px;cursor: pointer;border-bottom: 1px dotted #ccc}
  .hot-shop ul li img{width: 100%;height: 200px;}
  .hot-shop ul li p{line-height: 36px;height: 36px;width: 100%;overflow: hidden}
</style>
