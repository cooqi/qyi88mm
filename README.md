表单验证
http://www.cnblogs.com/jyichen/p/5660886.html

js-md5
md5('')


//////
跳转
$routeGo('/index',{}，true)  url带参数
$routeGo('/index',{})  url不带参数

////
ajax
  import api from './fetch/api'
  api.post('ApiMain/Index',参数)
            .then(function (rsp) {
              _this.date=rsp
            })


打包
yarn(npm) run build
 productionSourceMap 改为false，减少体积，但不好调试
