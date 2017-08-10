
<template>
  <div id="newsDetail" style="margin-top:30px">
    <Breadcrumb separator=">" style="border-bottom: 1px solid #f2f2f2;">
      <Breadcrumb-item href="/">首页</Breadcrumb-item>
      <Breadcrumb-item href="/gov">政务服务</Breadcrumb-item>
      <Breadcrumb-item :href="'/gov?id='+type"><span v-text="typeName"></span></Breadcrumb-item>
      <Breadcrumb-item>新闻详情</Breadcrumb-item>
    </Breadcrumb>
    <!--公告展示、养老政策、养老服务  这三个栏目公用一个详情页Y-->
    <div class="news-Content" style="background: #fff!important;padding: 10px;font-size: 14px;margin-top: 10px;margin-bottom: 10px">
      <h3 v-text="title" class="title"></h3>
      <h4 class="time">发布时间：<span v-text="time"></span> | <span><a href="javascript:window.print();">打印本页</a></span></h4>

      <div v-html="descript" ></div>
    </div>
  </div>
</template>

<script>
    import api from '../../fetch/api'

  export default {
    name: 'newsDetail',
    data(){
      return{
          descript:'',
          time:'',
          type:'',
        title:'',
        typeName:''
      }
    },
    created () {

        this.getData();
    },
    methods:{

      getData(){

        var _vm = this;
        var pamars = {};
        pamars.publish_ID =this.$route.query.id;

        api.get('govserv/publish/detail',pamars)
          .then(function (rsp) {
            if(rsp.code == 200)
            {
              _vm.descript = rsp.data.news.descript;
              _vm.time=rsp.data.news.createTime;
              _vm.type=rsp.data.news.pubType;
              _vm.type=_vm.type==1?2:_vm.type;
              _vm.title=rsp.data.news.title;
              switch(_vm.type)
              {
                case 2:
                  _vm.typeName='新闻公告'
                  break;
                case 3:
                  _vm.typeName='养老政策'
                  break;
                case 4:
                  _vm.typeName='服务培训'
                  break;
                default:
                  _vm.typeName='新闻公告'
              }
            }

          })
      },

    },
    mounted(){
    //  this.$route.query.id
    },


  }
</script>

<style>
  @import "../../assets/css/sass/base.scss";
 .news-Content{background: #fff!important;padding: 10px;font-size: 14px;margin-top: 10px;margin-bottom: 10px}
  .news-Content p{line-height: 200%;}
  .news-Content img{max-width: 100%;display: block;margin: auto}
  .news-Content .title{text-align: center;font-size: 20px;font-weight: bold}
  .news-Content .time{text-align: center;font-size: 12px;color: #666;border-width: 1px 0 1px 0;border-style: dotted;border-color: #ccc;padding: 10px 0}
</style>
