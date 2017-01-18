
//注册一个speakService服务
angular.module("speakModule")
    .factory("speakService",function(){
        var bbs=[];//相当于装发言的筐
        return {
            //向筐中增加发言的方法
            add:function(speak){
                bbs.unshift({speaks:speak,number:1});
            },
            //查看筐中所有的发言的方法
            findAll:function(){
                return bbs;
            }
        }
    });