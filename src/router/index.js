import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import store from '../store'

import iView from 'iview';
Vue.use(iView);

import HOME from '@/View/Home/index.vue'  //首页
import JJYL from '@/View/Service/jjyl/jjyl.vue' //居家养老(默认显示生活照顾的所有列表)
import JGYL from '@/View/Service/jgyl/index.vue' //机构养老
import SQYL from '@/View/Service/sqyl/ComQuery/ComMapList.vue' //社区养老(默认显示社区地址)
import YYRH from '@/View/Service/yyrh/index.vue' //医养融合
import HLYS from '@/View/Service/hlys/Health.vue' //活力养生




/////HQ
import LIFECARE from '@/View/Service/jjyl/LifeCare/index.vue' //生活关照
import EASYLIFE from '@/View/Service/jjyl/EasyLife/index.vue' //便利生活
import LIFEDETAIL from '@/View/Service/detail.vue' //便利生活 商品详情
import CREATEORDER from '@/View/User/Center/Order/createOrder.vue'  //下单
import DAIGOU from '@/View/Service/jjyl/EasyLife/daigou.vue' //代购代买
import ORDERPAY from  '@/View/User/Center/Order/OrderPay.vue' //订单支付

import SpeIndex from '@/View/Service/jgyl/Specially/SpeIndex.vue' //特定对象监管

import SmartHome from  '@/View/Service/jjyl/SmartHome/index.vue' //智能居家
import OUTPATIENTS from  '@/View/Service/jjyl/EasyLife/outpatients.vue' //出行和门诊挂号
import PAYMENT from  '@/View/Service/jjyl/EasyLife/payment.vue' //生活缴费

import AppoIndex from  '@/View/Service/yyrh/Appointment/AppoIndex.vue' //预约挂号
import SUCCESS from   '@/View/User/Center/Order/paySuccess.vue' //订单支付成功
import ERROR from   '@/View/User/Center/Order/payError.vue' //订单支付失败
/////

////zc
import SerDetail from '@/View/Service/SerDetail.vue' //服务类详情页
import SerApp from '@/View/Service/SerAppointment.vue' //服务预约
import LWappointment from  '@/View/Service/LWappointment.vue' //劳务市场预约
import LWdetail from  '@/View/Service/LWdetail.vue' //劳务市场详情
/////

///ct
import GOV from '@/View/Gov/NewsList.vue' //政务服务
import GOVDetail from '@/View/Gov/NewsDetail.vue' //政务服务list详情页
////


////hjc
import USER from '@/View/User/Center/UserCenter.vue' //个人中心
import JOIN from '@/View/JoinUs/join.vue' //加入我们
import LOGIN from '@/View/User/login.vue' //登录登录
import FORGETPASSWORD from '@/View/User/ForgetPassword.vue' //忘记密码
import ACCOUNT from '@/View/User/Center/Account/index.vue'//个人中心/账户中心
import ORDER from '@/View/User/Center/Order/OrderIndex.vue'//个人中心/订单中心
import USERINFO from '@/View/User/Center/PersonalInfo/info.vue'//个人中心/订单中心
import ADDRESS from '@/View/User/Center/Address/address.vue'//个人中心/个人地址
import UPDATE from '@/View/User/Center/Update/update.vue'//个人中心/修改个人资料
import BANK from '@/View/User/Center/Bank/bank.vue'//个人中心/银行卡
import ORDERLIST from '@/View/User/Center/Order/OrderList.vue'//订单页
import ORDERDETAIL  from '@/View/User/Center/Order/OrderDetail.vue'//订单详情页
import EVAACTIVITY from '@/View/User/Center/Evaluate/EvaluateActivity.vue' //用户评价界面
import EVALIST from '@/View/User/Center/Evaluate/EvaluateList.vue' //用户评价列表

////dby
import SQHD from '@/View/Service/sqyl/ComActivity/Index.vue' //社区活动
import SGXM from '@/View/Service/sqyl/Project/ProList.vue' //社工项目
import SQZYZ from '@/View/Service/sqyl/Postulant/PosList.vue' //社区志愿者
import SQYLDETAIL from '@/View/Service/sqyl/ComQuery/ComDetail.vue' //社区养老详情
import POSJOIN from '@/View/Service/sqyl/Postulant/PosJoin.vue' //加入志愿者
import SQHDLIST from '@/View/Service/sqyl/ComActivity/ActList.vue' //社区活动列表
import SQHDDETAIL from '@/View/Service/sqyl/ComActivity/ActDetail.vue' //社区活动详情
import SGXMDETAIL from '@/View/Service/sqyl/Project/ProDetail.vue' //社工项目详情



Vue.use(Router);

let router= new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index_default',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component:HOME
      //meta:{headNav:true,footNav:true}
    },
    {
      path: '/jjyl',
      component:JJYL,
      children:[
       {
          path: '/',
         redirect:'/jjyl/lifecare',
        },
        {
          path: '/jjyl/lifecare',
          name: 'jjyl',
          component:LIFECARE
        },
        {
          path: '/jjyl/easylife',
          name: 'easyLife',
          component:EASYLIFE
        },

        {
          path: '/jjyl/SmartHome',
          name: 'SmartHome',
          component:SmartHome
        },
        {
          path: '/jjyl/outpatients',
          name: 'outpatients',
          component:OUTPATIENTS
        },
        {
          path: '/jjyl/payment',
          name: 'payment',
          component:PAYMENT
        }
      ]
    },
    {
      path: '/jgyl',
      component:JGYL,
      children:[
        {
          path: '/',
          redirect:'/jjyl/jigou',
        },
        {
          path: '/jjyl/jigou',
          name: 'jgyl',
          component:LIFECARE
        },
        ]
    },
    {
      path: '/sqyl',
      name: 'sqyl',
      component:SQYL
    },
    {
      path: '/fwwd',
      name: 'fwwd',
      redirect: '/sqyl'
    },
    {
      path: '/sqyl/detail/:shopId',
      name: 'sqylDetail',
      component: SQYLDETAIL
    },
    {
      path: '/sqhd',
      name: 'sqhd',
      component: SQHD
    },
    {
      path: '/sgxm',
      name: 'sgxm',
      component: SGXM
    },
    {
      path: '/sqzyz',
      name: 'sqzyz',
      component: SQZYZ
    },
    {
      path: '/sqzyz/posjoin',
      name: 'posjoin',
      component: POSJOIN
    },
    {
      path: '/sqhd/list/:type',
      name: 'sqhdlist',
      component: SQHDLIST
    }, {
      path: '/sqhd/detail/:id',
      name: 'sqhddetail',
      component: SQHDDETAIL
    },
    {
      path: '/sgxm/detail/:id',
      name: 'sgxmdetail',
      component: SGXMDETAIL
    },
    {
      path: '/yyrh',
      component:YYRH,
      children:[
        {
          path: '/',
          redirect:'/jjyl/yiyang',
        },
        {
          path: '/jjyl/yiyang',
          name: 'yyrh',
          component:LIFECARE
        },
      ]
    },
    {
      path: '/hlys',
      component:HLYS,
      children:[
        {
          path: '/',
          redirect:'/jjyl/huoli',
        },
        {
          path: '/jjyl/huoli',
          name: 'hlys',
          component:LIFECARE
        },
      ]
    },
    {
      path: '/gov',
      component:GOV,
      name:'gov'
    },
    {
      path: '/user',
      name: 'user',
      component:USER,
      redirect:'/Center/Account/index',
      meta:{login:true},
      children:[
        {
          path:'/Center/Evaluate/EvaluateActivity',
          name:'evaluate',
          component:EVAACTIVITY,
        },
        {
          path:'/Center/Evaluate/EvaluateList',
          name:'EvaluateList',
          component:EVALIST,
        },
        {
          path:'/Center/Account/index',
          name:'account',
          component:ACCOUNT
        },{
          path:'/Center/Order/OrderDetail',
          name:'orderDetail',
          component:ORDERDETAIL,
        }
        ,
        {
          path:'/Center/Order/OrderIndex',
          component:ORDER,
          children:[
            {path:'/',
              redirect:'/Center/Order/OrderList',
            },
            {path:'/Center/Order/OrderList',
              name:'orderList',
              component:ORDERLIST
            }

          ]
        },{
          path:'/Center/PersonalInfo/info',
          name:'info',
          component:USERINFO,
          meta:{login:true}
        },{
          path:'/Center/Address/address',
          name:'address',
          component:ADDRESS,
          meta:{login:true}
        },{
          path:'/Center/Bank/bank',
          name:'bank',
          component:BANK,
          meta:{login:true}
        },{
          path:'/Center/Update/update',
          name:'update',
          component:UPDATE,
          meta:{login:true}
        }

      ]
    },
    {
      path: '/user/join',
      name: 'join',
      component:JOIN
    },
    {
      path: '/user/login',
      name: 'login',
      component:LOGIN
    },
    {
      path: '/user/forgetPassword',
      name: 'forgetPassword',
      component:FORGETPASSWORD
    },
   /*
    如果想增加一级目录下的子目录，只用在path路径上加上父级的目录
    {
      path: '/jjyl/xxx',
      name: 'xxx',
      component:xxx
    }*/

    //////hq add
    {
      path: '/service/detail',
      name: 'life_detail',
      component:LIFEDETAIL
    },
    {
      path: '/order/createOrder',
      name: 'createOrder',
      component:CREATEORDER,
      meta:{login:true}
    },
    {
      path: '/order/orderpay',
      name: 'orderPay',
      component:ORDERPAY,
      meta:{login:true}
    },
    {
      path: '/AppoIndex',
      name: 'AppoIndex',
      component:AppoIndex
    },
    {
      path: '/order/success',
      name: 'success',
      component:SUCCESS,
      meta:{login:true}
    },
    {
      path: '/order/error',
      name: 'error',
      component:ERROR,
      meta:{login:true}
    },
    {
      path: '/jgyl/SpeIndex',
      name: 'SpeIndex',
      component:SpeIndex
    },
    {
      path: '/jjyl/easylife/daidou',
      name: 'daigou',
      component:DAIGOU
    },
    //////////////////////


    //////zc add
    {
      path: '/SerApp',
      name: 'SerApp',
      component:SerApp
    },
    {
      path: '/Serdetail',
      name: 'SerDetail',
      component:SerDetail
    },
    {
      path:'/LWappointment',
      name:'LWappointment',
      component:LWappointment
    },
    {
      path:'/LWdetail',
      name:'LWdetail',
      component:LWdetail
    },
    //////

    /////////zt add


    {
      path: '/govDetail',
      name: 'govDetail',
      component:GOVDetail
    },
//////////////

  ]
});

/*router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.mutations.token) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/user/login'
      })
    }
  }
  else {
    next();
  }
})*/
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish();
});

let routerGo = function (path, params, isquery){
  if(isquery){
    router.push({path:path,query:params?params:{}})  //$routerGo('/index',{}，true)  url、带参数
  }else{
    router.push({name:path,params:params?params:{}})  //$routerGo('/index',{})  url不带参数
  }
}

export {
  router,
  routerGo
}


