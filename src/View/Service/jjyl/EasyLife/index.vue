<style scoped lang="scss">
  @import "../../../../assets/css/sass/base.scss";
  dl,table,p{margin: 0;padding: 0}


  .shop-box{margin-top: 10px}
  .shop-box .sort{font-size:$fontSize01;overflow: hidden;padding-bottom: 10px}
  .shop-box .sort table{width: 300px;background: #fff;float: left}
  .shop-box .sort td{padding: 5px;text-align: center;border:1px solid #ccc;cursor: pointer}
  .shop-box .sort td.on{background:$MainColor;color: #fff }
  .shop-box .sort td.all{background: #ccc}
  .search{
    width: 300px;
    float: right;
  }
  .shop-list{margin: 10px 0;justify-content:space-between;flex-wrap: wrap;overflow: hidden;
    display: -webkit-flex;
    display: flex;
  }
  .shop-list .list{width: 230px;background: #fff;padding: 7px;cursor: pointer;border:1px solid #eee;margin-bottom: 10px;transition: all .4s;}
  .shop-list .list img{width: 100%;height: 210px}
  .shop-list .list h3{font-size: 14px;color: #333}
  .shop-list .list .price{ font-size: 16px;color: #666}
  .shop-list .list .price span{ font-size: 18px;color:$ComColor03;font-weight: bold}
  .shop-list .list .sales{font-size: 14px;color: #999}
  .shop-list .list:hover{border:1px solid $ComColor01;box-shadow: 0 0 6px 3px rgba(103,103,103,.2)}

  .page{overflow: hidden;position: relative;height: 50px}

</style>
<template>
  <div class="easyLife">

    <div class="shop-box">
      <div class="sort">
        <table class="table table-bordered">
          <tr>
            <td class="all" @click="sort(0)" >综合排序</td>
            <td class="price" @click="sort(1)" :class="com==1?'on':''">价格
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paixu" v-if="sort_price"></use>
                <use xlink:href="#icon-paixu2" v-else></use>
              </svg>
            </td>
            <td class="sales" @click="sort(2)"  :class="com==2?'on':''">销量
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paixu" v-if="sort_sales"></use>
                <use xlink:href="#icon-paixu2" v-else></use>
              </svg>
            </td>
          </tr>
        </table>

        <div class="search">
          <Input v-model="value13">
          <Button slot="append" icon="ios-search"></Button>
          </Input>
        </div>

      </div>

      <div class="shop-list">
          <div class="list" @click="$routeGo('life_detail')">
            <img src="../../../../assets/static_hq/img/pic_01.png" alt="">
            <h3 class="name">商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试</h3>
              <p class="price">￥<span>1200.00</span></p>
              <p class="sales">销量<span>222222</span>件</p>
          </div>
        <div class="list">
          <img src="../../../../assets/static_hq/img/pic_01.png" alt="">
          <h3 class="name">商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试</h3>
          <p class="price">￥<span>1200.00</span></p>
          <p class="sales">销量<span>222222</span>件</p>
        </div>
        <div class="list">
          <img src="../../../../assets/static_hq/img/pic_01.png" alt="">
          <h3 class="name">商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试</h3>
          <p class="price">￥<span>1200.00</span></p>
          <p class="sales">销量<span>222222</span>件</p>
        </div>
        <div class="list">
          <img src="../../../../assets/static_hq/img/pic_01.png" alt="">
          <h3 class="name">商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试</h3>
          <p class="price">￥<span>1200.00</span></p>
          <p class="sales">销量<span>222222</span>件</p>
        </div>
        <div class="list">
          <img src="../../../../assets/static_hq/img/pic_01.png" alt="">
          <h3 class="name">商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试商品名称测试</h3>
          <p class="price">￥<span>1200.00</span></p>
          <p class="sales">销量<span>222222</span>件</p>
        </div>

      </div>

      <div class="page">
        <Page :total="total" :page-size="page_size" show-elevator className="page-pos" @on-change="page"></Page>
      </div>

    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        theme1: 'light',
        value13: '',
        sort_price:true , //默认降序
        sort_sales:true,
        com:0,
        total:100, //总共多少条
        page_size:20  //每页几条数据
      }
    },
    methods:{
      sort(id){
        this.com=id
        if(id==1){
          this.sort_price=!this.sort_price
        }
        if(id==2){
          this.sort_sales=!this.sort_sales
        }
        if(id==0){
          this.com=0
        }
      },
      page(num){
          //num 为返回的选择页码
          console.log(num)
      },
      rout(name){
          if(name==4){
              this.$routeGo('daigou')
          }
      }
    }
  }
</script>

