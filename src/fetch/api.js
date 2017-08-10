import Vue from 'vue'
import axios from 'axios';
import store from '../store';
import {router} from '../router';
import Qs from 'qs'
import iView from 'iview';
Vue.use(iView);

let instance=axios.create({
    baseURL: '****',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    //data.tid=store.state.mutations.token;
    data = Qs.stringify(data);
    return data
  }]
})
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//todo 拦截器
instance.interceptors.request.use(function (config) {  //配置发送请求的信息
  //stores.dispatch('showLoading')
  if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.Authorization = `token ${store.state.token}`;
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(
  response => {
    //stores.dispatch('hideLoading')

    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          store.commit(types.clear_token);
          router.replace({
            path: '/user/login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });





function apiAxios (method, url, params, success, failure) {

 return instance({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params: null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    withCredentials: false
  })
    .then(function (res) {
      if (res.data.code == 200) {
        return res.data
      } else {
          alert('网络请求错误')
      }
    },function (res) {
      alert('访问异常，请重试')
    })
    .catch(function (err) {
      let res = err.response
      if (err) {
        alert('api error, HTTP CODE: ' + res.status)
        return
      }
    })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}

