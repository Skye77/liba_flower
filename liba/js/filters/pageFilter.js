/**
 * Created by hxsd on 2016/12/15.
 */
//注册一个自定义分页过滤器
angular.module("filterModule")
    //自定义分页过滤器
    .filter("pageFilter",function(){
        //返回函数中有三个参数：
        // 参数1：speaks -上述通过过滤函数被过滤的商品数组
        // 参数2：pageNum --页码数
        // 参数3：pageSize --单页显示商品个数
        return function(speaks,pageNum,pageSize){
            //为了让代码更加健壮，避免过滤器用错，应该对返回函数的参数进行判断
            if(!angular.isArray(speaks) || !angular.isNumber(pageNum) || !angular.isNumber(pageSize)) {
                //说明用错，返回原来的数组，怎么进怎么出 不影响
                return speaks;
            }

            //计算请求数据的其实索引值
            var startIndex = (pageNum - 1) * pageSize;

            //判断起始索引值是否在数组中
            if (startIndex >= speaks.length) {
                //如果是智联，直接跳转到最后一页==简单返回一个空数组
                return [];
                //有些，跳转时空白页
                //if(speaks.length-pageSize<0){
                //    startIndex=0;
                //}else{
                //    startIndex=speaks.length-speaks.length%pageSize;
                //}
            }
            //提取一页的数据到新数组中
            var newArr = speaks.slice(startIndex, startIndex + pageSize);
            //返回新数组，在view中显示
            return newArr;
        }
    })
    //计算导航页码数的自定义过滤器
    .filter("navFilter",function(){
        //将商品数组返回一个整数数组[1,2,3...]
        return function(speaks,pageSize){
            //获取分页的数量
            var pages=Math.ceil(speaks.length/pageSize);
            //生成并返回一个数组
            var navButtons=[];//生成

            //遍历填值
            for(var i=0;i<pages;i++){
                navButtons.push(i+1);
            }

            return navButtons;//返回
        }
    });
