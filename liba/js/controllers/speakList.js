
angular.module("myapp")
    .controller("speakListCtrl",function($scope){
        //定义域分页有关的数据
        $scope.pageNum=1;   //请求的页码数
        $scope.pageSize=20;  //单页页面大小

        //分页按钮响应函数
        $scope.page=function(pN){
            $scope.pageNum=pN;
        };

        //上一页按钮响应函数
        $scope.prevPage=function(){
            $scope.pageNum--;
            if($scope.pageNum<1) $scope.pageNum=1;
        };

        //下一页按钮响应函数
        $scope.nextPage=function(){
            $scope.pageNum++;
            if($scope.pageNum>4) $scope.pageNum=4;
        }

});