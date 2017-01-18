/**
 * Created by hxsd on 2016/12/16.
 */
angular.module("myapp")
    .controller("checkoutCtrl",function($scope,shopCart){
        //获取购物车中的商品
        $scope.cart=shopCart.findAll();

        //统计购物车中商品总金额
        $scope.sumPrice=function(){
            var total=0;
            //遍历统计
            angular.forEach($scope.cart,function(item){
                total+=item.number*item.product.price;
            })
            return total;
        }

        //响应单击删除单个商品函数函数
        $scope.remove=function(item){
            //从购物车中删除指定名称的商品
            shopCart.remove(item.product.name);
        }

        //响应单击删除商品行
        $scope.allDel=function(item){
            shopCart.allDel(item);
        }

});