// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {router,routerGo} from './router'
import App from './App'
import stores from './store'

import * as filters from './filter/index.js'
//循环遍历所有过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import md5 from 'js-md5';
import Validator from 'vue-validator'
import iView from 'iview';
Vue.use(Validator)
Vue.use(md5)
Vue.use(iView)



Vue.config.productionTip = false

//路由相关

Vue.prototype.$routeGo    = routerGo;


new Vue({
   router,
  store:stores,
  render: h => h(App)
}).$mount('#app-box')
