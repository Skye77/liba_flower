/**
 * Created by hxsd on 2016/12/15.
 */
//创建一个新的模块，用于管理自定义分页过滤器  并且依赖注入到主模块中
angular.module("filterModule",[]);

//创建一个新模块，用于管理购物车service  并且依赖注入到主模块中
angular.module("cartModule",[]);

//创建一个主模块
angular.module("myapp",["filterModule","cartModule","ngRoute","ngMessages"]);

//配置路由
angular.module("myapp").config(function($routeProvider){
    $routeProvider
        .when("/",{templateUrl:"views/productList.html",controller:"productListCtrl"})
        .when("/checkout",{templateUrl:"views/checkoutSummary.html",controller:"checkoutCtrl"})
        .when("/order",{templateUrl:"views/placeOrder.html"})
        .when("/thanks",{templateUrl:"views/thankYou.html"})
        .otherwise({templateUrl:"views/productList.html",controller:"productListCtrl"});
});