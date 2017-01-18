/**
 * Created by hxsd on 2016/12/16.
 */
//注册一个cartService服务
angular.module("cartModule")
    .factory("shopCart",function(){
        var mycart=[];//相当于购物车的车筐 {product:product,number:1},{product:product,number:1},...
        return {
            //向购物车中增加商品的方法——mycart中有item，item中有product与number
            add:function(product){
                //遍历购物框mycart
                for(var i=0;i<mycart.length;i++){
                    var item =mycart[i]; //购物框中的每一项
                    if(item.product.name==product.name){
                        //说明购物车中已经有该商品
                        item.number++;
                        return;
                    }
                }
                //如果执行到这里，说明购物车中没有该商品，添加的是一个新商品默认增加一个
                mycart.push({product:product,number:1});
            },

            //依据商品名字删除购物车中商品
            remove:function(name){
                //遍历购物框mycart
                for(var i=0;i<mycart.length;i++){
                    var item =mycart[i];         //购物框中的每一项
                    if(item.product.name==name){
                        //说明找到了该商品
//                                   mycart.splice(item,1);
                        item.number--;
                        if(item.number==0) {
                            mycart.splice(item,1);
                            item.number=1;
                        }
                        break;
                    }
                }
            },

            //删除商品行
            allDel:function(product){
                var allNum=mycart.indexOf(product);
                mycart.splice(allNum,1);
            },

            //查看购物车中所有的商品的方法
            findAll:function(){
                return mycart;
            },

            //清空购物车
            clear:function(){
                mycart.length=0;
            }
        }
    })
    .controller("cartCtrl",function($scope,shopCart){
        //获得购物车中所有商品
        var cart=shopCart.findAll();
        //统计购物车中商品总数量
        $scope.sumCout=function(){
            var total=0;
            //遍历统计
            angular.forEach(cart,function(item){
                total+=item.number;
            })
            return total;
        }

        //统计购物车中商品总金额
        $scope.sumMoney=function(){
            var total=0;
            //遍历统计
            angular.forEach(cart,function(item){
                total+=item.number*item.product.price;
            })
            return total;
        }
    });