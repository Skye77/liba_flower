/**
 * Created by hxsd on 2016/12/16.
 */
angular.module("myapp")
    .controller("orderCtrl",function($scope){
        //创建一个对象用于保存用户的收货信息
        $scope.data={
            shipping:{}
        }
});