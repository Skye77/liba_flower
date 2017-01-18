//注册一个控制器
//要用到的商品数据，都在这个控制器中
angular.module("myapp")
    .controller("sportStoreCtrl",function($scope,$http,shopCart,$location){
        $scope.data = {
            //商品类别
            categories: [
                {id: "10001", category: "爱情鲜花"},
                {id: "10002", category: "孝心·恩情之花"},
                {id: "10003", category: "永生花"},
                {id: "10004", category: "最好的礼物"},
            ],
            //商品明细
            products: [
                {name: "金色海岸", category: "爱情鲜花", price: 318, desc: "甜美的笑，就像夏季海风带来的清凉，空气的味道是你玫瑰的发香，可爱模样，红着脸漫步金色海岸", imgsrc: "images/love01_220x240.jpg"},
                {name: "情深款款", category: "爱情鲜花", price: 429, desc: "我遇见情深款款的你，美丽动人，愿让你知道，是你浓情的眼神，醉掉我心。", imgsrc: "images/love02_220x240.jpg"},
                {name: "温暖的时光", category: "爱情鲜花", price: 376, desc: "在阳光温暖的街道上，在不知不觉的一瞬间，又想起你，你像鲜花那样的绽放，让我心动。", imgsrc: "images/love03_220x240.jpg"},
                {name: "甜心", category: "爱情鲜花", price: 298, desc: "你是我甜甜的甜心，最甜最美的幸运。把爱送给你，等你甜美回应。", imgsrc: "images/love04_220x240.jpg"},
                {name: "甜美公主", category: "爱情鲜花", price: 368, desc: "再多一点点距离，我就能靠近你。清晰甜美的空气里，爱你到不能呼吸。", imgsrc: "images/love05_220x240.jpg"},
                {name: "浪漫絮语", category: "爱情鲜花", price: 378, desc: "从不相信一见钟情，直到遇到命中注定，于是脑海里都是恋人的身影", imgsrc: "images/love06_220x240.jpg"},
                {name: "粉色女孩", category: "爱情鲜花", price: 358, desc: "初恋的粉色系，脸颊旁的唇蜜，透露爱情来临的小秘密，催眠般的魔力，陷入你的陷阱。", imgsrc: "images/love07_220x240.jpg"},
                {name: "圣洁的爱", category: "爱情鲜花", price: 346, desc: "圣洁的心，是爱人的眼眸，圣洁的爱，是一生只爱你一人的虔诚。", imgsrc: "images/love08_220x240.jpg"},
                {name: "幸福久久", category: "爱情鲜花", price: 518, desc: "阳光轻抚着你的脸，忘不了那唯美的画面；你给我的拥抱，加速了我心跳，幸福这般美好！", imgsrc: "images/love09_220x240.jpg"},
                {name: "99的爱", category: "爱情鲜花", price: 539, desc: "过程太美就像我第一次遇见你，你傻的可爱我也没想过会爱的彻底，这一天，99的爱给你，幸福永远！", imgsrc: "images/love10_220x240.jpg"},
                {name: "初心永不变", category: "爱情鲜花", price: 538, desc: "最开始的地方，最动心的凝望，谢谢你陪我，在不忘初心的路上！", imgsrc: "images/love11_220x240.jpg"},
                {name: "纯美时光", category: "爱情鲜花", price: 129, desc: "一段最纯最真的时光，在岁月里静静绽放！", imgsrc: "images/love12_220x240.jpg"},
                {name: "为你心动", category: "爱情鲜花", price: 146, desc: "将最浪漫的心跳都给你，我爱你，只对你说。", imgsrc: "images/love13_220x240.jpg"},
                {name: "粉恋", category: "爱情鲜花", price: 116, desc: "秋天的风正吹过，穿过头发穿过耳朵，好想说爱你，百分百心动感觉！", imgsrc: "images/love14_220x240.jpg"},
                {name: "倾城月色", category: "爱情鲜花", price: 138, desc: "一抹倾城月色，印在你脸庞儿，惊艳一段时光。", imgsrc: "images/love15_220x240.jpg"},
                {name: "爱情花火", category: "爱情鲜花", price: 108, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/love16_220x240.jpg"},
                {name: "永恒的爱", category: "孝心·恩情之花", price: 236, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flow01_220x240.jpg"},
                {name: "天使之祈", category: "孝心·恩情之花", price: 195, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flow02_220x240.jpg"},
                {name: "母爱", category: "孝心·恩情之花", price: 158, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flow03_220x240.jpg"},
                {name: "幸福绽放", category: "孝心·恩情之花", price: 162, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flow04_220x240.jpg"},
                {name: "健康长久", category: "孝心·恩情之花", price: 412, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flow05_220x240.jpg"},
                {name: "妈妈的爱", category: "孝心·恩情之花", price: 150, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flow06_220x240.jpg"},
                {name: "圆满", category: "孝心·恩情之花", price: 196, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flow07_220x240.jpg"},
                {name: "爱的思念", category: "孝心·恩情之花", price: 186, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flow08_220x240.jpg"},
                {name: "芳华", category: "孝心·恩情之花", price: 165, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flow09_220x240.jpg"},
                {name: "午后阳光", category: "孝心·恩情之花", price: 233, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flow10_220x240.jpg"},
                {name: "永生花盒/小清新", category: "永生花", price: 358, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong01.jpg"},
                {name: "薰衣草永生花礼盒/感慕", category: "永生花", price: 198, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong02.jpg"},
                {name: "永生花盒/最相思", category: "永生花", price: 198, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong03.jpg"},
                {name: "泰国进口永生花/幸福时光", category: "永生花", price: 558, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong04.jpg"},
                {name: "特色永生花/To温暖你心", category: "永生花", price: 269, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong05.jpg"},
                {name: "十二星座经典七彩", category: "永生花", price: 288, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong06.jpg"},
                {name: "薰衣草永生花礼盒/奢爱礼赞", category: "永生花", price: 168, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong07.jpg"},
                {name: "永生花盒/兔子小姐", category: "永生花", price: 298, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong08.jpg"},
                {name: "永生花盒/我要的爱", category: "永生花", price: 198, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong09.jpg"},
                {name: "永生花盒/海之恋", category: "永生花", price: 498, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong10.jpg"},
                {name: "永生花盒/漫步爱琴海", category: "永生花", price: 326, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong11.jpg"},
                {name: "十二星座经典蓝", category: "永生花", price: 238, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong12.jpg"},
                {name: "泰国进口永生花/心若兰", category: "永生花", price: 238, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong13.jpg"},
                {name: "特色永生花/恋心", category: "永生花", price: 238, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong14.jpg"},
                {name: "特色永生花/爱与祝福", category: "永生花", price: 269, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/flowersong15.jpg"},
                {name: "金箔花/999纯金箔玫瑰+陶瓷花瓶-千足金", category: "最好的礼物", price: 138, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/lp01_220x240.jpg"},
                {name: "十八音水晶钢琴", category: "最好的礼物", price: 228, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/lp02_220x240.jpg"},
                {name: "宝石旋转木马/蓝", category: "最好的礼物", price: 158, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/lp03_220x240.jpg"},
                {name: "Laderach思念TA礼盒", category: "最好的礼物", price: 218, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/lp04_220x240.jpg"},
                {name: "Lindt瑞士莲特醇排装黑巧克力", category: "最好的礼物", price: 178, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/lp05_220x240.jpg"},
                {name: "芭蕾舞女孩永生花礼盒", category: "最好的礼物", price: 289, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/lp06_220x240.jpg"},
                {name: "苹果型3D水晶内雕", category: "最好的礼物", price: 118, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/lp07_220x240.jpg"},
                {name: "浮香曲岸-盆栽花卉绿植", category: "最好的礼物", price: 99, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/lp08_220x240.jpg"},
                {name: "金箔花/kiss娃娃摆件/小号-娃娃千足纯金", category: "最好的礼物", price: 298, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/lp09_220x240.jpg"},
                {name: "音乐盒/童话木马音乐盒-旋转木马音乐盒", category: "最好的礼物", price: 258, desc: "当爱情的火花点燃了两颗年轻的心，整个世界似乎都是为他们而存在，为他们永恒。", imgsrc: "images/lp10_220x240.jpg"},
            ],
            //创建一个对象用于保存用户的收货信息
            shipping: {}
        }
        //发送订单的方法
        //需要知道：$http ;购物信息+收货人信息
        $scope.send = function () {
            //打包好要发送到服务器端的数据order
            var order={};
            order.cart=shopCart.findAll();  //购物信息
            order.shipping=angular.copy($scope.data.shipping);//收货人信息

            //使用http发送，并做相关处理：成功，失败，收尾（不管请求是否成功，最后都要执行.finally函数)
            var url="order.json";//实际开发中是服务器订单接口
            $http.post(url,order)
                .success(function(data){
                    //将服务器的订单号保存起来，并显示在thankYou页面中
                    $scope.data.orderId=data.orderId;
                    //清空购物车
                    shopCart.clear();
                })
                .error(function(err){
                    //将错误信息保存起来，并显示在thankYou页面中
                    $scope.data.orderErr=err;
                })
                //不管请求是否成功，最后都要执行.finally函数
                .finally(function(){
                    //跳转到thankYou页面 用$location.path()方法
                    $location.path("/thanks");
                });
        }
});