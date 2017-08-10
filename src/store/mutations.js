import {
  HEAD_NAV_SHOW,
  FOOT_NAV_SHOW,
  SET_TOKEN,
  CLEAR_TOKEN,
  ADD_ADDRESS,
  CLOSE_ADDRESS,
  LOGIN,
  NAVLINK
} from './type';

import {router} from '../router'

const state={
  head_nav_show:true,
  foot_nav_show:true,
  token:localStorage.getItem("token")?localStorage.getItem("token"):'',
  navOn:'index',
  addressShow:false,
  centerShow:localStorage.getItem("token")?true:false,
  active:'index'
};
const  mutations={
  [HEAD_NAV_SHOW](state,data){
    state.head_nav_show=data==false?data:true
  },
  [FOOT_NAV_SHOW](state,data){
      state.foot_nav_show=data==false?data:true
  },
  [SET_TOKEN](state,data){
    localStorage.setItem('token',data)
    state.token=localStorage.getItem("token")
    state.centerShow=true
  },
  [CLEAR_TOKEN](state){
    localStorage.removeItem("token")
    state.token=''
    state.centerShow=false
  },
  [ADD_ADDRESS](state){
      state.addressShow=true
  },
  [CLOSE_ADDRESS](state){
    state.addressShow=false
  },
  [LOGIN](state,data){
    if(state.token==''&&data){
      router.replace({
        path: '/user/login',
        query: {redirect: router.currentRoute.fullPath}
      })
    }
  },
  [NAVLINK](state,data){
    state.active=data
  }
};

const getters={

  head_nav_show(state){
    return state.head_nav_show
  },
  foot_nav_show(state){
    return state.foot_nav_show
  },
  token(state){
    return state.token
  },
  navOn(state){
    return state.navOn
  },
  addressShow(state){
    return state.addressShow
  },
  centerShow(state){
    return state.centerShow
  },
  active(state){
    return state.active
  }
};

export default {
  state,
  mutations,
  getters
}
