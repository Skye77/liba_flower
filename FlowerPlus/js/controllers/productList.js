/**
 * Created by hxsd on 2016/12/15.
 */
angular.module("myapp")
    .controller("productListCtrl",function($scope,shopCart){
        //用户选中的当前商品的类型--声明存储
        $scope.selectedCategory=null;

        //响应用户对商品类型的选择--保存到当前类别
        $scope.selectCategory=function(category){
            $scope.selectedCategory=category;
            //每次响应导航按钮之前重置
            $scope.pageNum=1;   //请求的页码数
        }
        //定义一个按商品类型分类显示的过滤函数
        $scope.filterByCategory=function(product){
            //简化代码：如果用户点击的是“首页”，显示全部商品
            return $scope.selectedCategory==null || $scope.selectedCategory==product.category;
        }

        //定义域分页有关的数据
        $scope.pageNum=1;   //请求的页码数
        $scope.pageSize=6;  //单页页面大小

        //分页按钮响应函数
        $scope.page=function(pN){
            $scope.pageNum=pN;
        }

        //依赖注入shopCart  并且响应点击购物车增加函数
        $scope.add=function(product){
            shopCart.add(product);
        }
});