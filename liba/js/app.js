/**
 * Created by hxsd on 2016/12/16.
 */
//创建一个新的模块 filterModule 并且依赖注入
angular.module("filterModule",[]);

//创建一个新的模块 speakModule 并且依赖注入
angular.module("speakModule",[]);

//创建一个主模块
angular.module("myapp",["filterModule","speakModule"]);