import {utils} from '../config/utils.js'
export function formatDateTime (time) {
  //格式化时间戳
  if(time){
    var oDate=new Date();
    oDate.setTime(time);

    var y=oDate.getFullYear();
    var m=oDate.getMonth()+1;
    var d=oDate.getDate();

    var h=oDate.getHours();
    var mm=oDate.getMinutes();
    var s=oDate.getSeconds();

    return y+'-'+m+'-'+d+' '+h+':'+mm+':'+s;
  }
}

export function titelNumIndex (t) {
  //首页列表title字数显示，超出显示...

  if(t.length>30){
    t=t.substring(0,28)+"...";
  }
  return t
}

export function titelSHOP (V) {
  //首页列表title字数显示，超出显示...

  if(V.length>48){
    V=V.substring(0,46)+"...";
  }
  return V
}

export function isNullOrEmpty(str, msg, size) {
  var res = msg;
  str = trim(str);
  //console.log('>>>' + size + '->' + msg + '->' + str)
  if (!utils.isEmpty(str)) {
    if (str.length > size) {
      res = str.substring(0, size - 2) + "...";
    } else {
      res = str;
    }
  }
  return res;
}

export function trim(strSrc) {
  var str = strSrc.replace(/^(\s|\u00A0)+/, '');
  for (var i = str.length - 1; i >= 0; i--) {
    if (/\S/.test(str.charAt(i))) {
      str = str.substring(0, i + 1);
      break;
    }
  }
  return str;
}
