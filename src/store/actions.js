import * as types from './type'
export default {
  headNavShow:({commit},data)=>{
    commit(types.HEAD_NAV_SHOW,data)
  },
  footNavShow:({commit},data)=>{
    commit(types.FOOT_NAV_SHOW,data)
  },
  set_token:({commit},data)=>{
    commit(types.SET_TOKEN,data)
  },
  clear_token:({commit})=>{
    commit(types.CLEAR_TOKEN)
  },
  ADDaddress:({commit})=>{
    commit(types.ADD_ADDRESS)
  },
  closeAddress:({commit})=>{
    commit(types.CLOSE_ADDRESS)
  },
  login:({commit},data)=>{
    commit(types.LOGIN,data)
  },
  NavLink:({commit},data)=>{
    commit(types.NAVLINK,data)
  }
}
