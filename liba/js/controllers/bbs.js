/**
 * Created by hxsd on 2016/12/16.
 */
angular.module("myapp")
    .controller("bbsCtrl",function($scope,speakService){
        $scope.data={
            speaks:[
                {"imgsrc":"images/icon1.jpg","name":"阿悦一朵花","city":"上海","desc":"上周末去工地看了下拆旧工程基本结束了","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon2.jpg","name":"空中高飞的燕","city":"北京","desc":"顺利的话下周就可以开工","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon3.jpg","name":"玫瑰恩","city":"广州","desc":"眼前目标：赶紧把橱柜瓷砖定下来，橱柜的功课基本都在第二页！","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon4.jpg","name":"梨涡Dimple","city":"南京","desc":"昨天在宜山路看了一天的瓷砖，除了次卫其他区域基本都定了下来","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon5.jpg","name":"给我一礼拜的阳光 ","city":"上海","desc":"昨天在宜山路看了一天的瓷砖，除了次卫其他区域基本都定了下来","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon6.jpg","name":"尧尧一只","city":"黄山","desc":"橱柜昨天看了宇邦和小季，报价差不多，小季性价比高一点","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon7.jpg","name":"夏沫冬初","city":"贵州","desc":"眼前目标：周六去把橱柜定下来","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon8.jpg","name":"平淡如水","city":"长春","desc":"​最最重要的...昨天签了施工合同，看了最终报价（果然超预算T T）","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon9.jpg","name":"十里春风","city":"合肥","desc":"悲催的发现虽然赶在十一前开了工","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon10.jpg","name":"声缺","city":"杭州","desc":"但十一期间工人都放假了，到现在家里还是啥拆旧后的状态","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon11.jpg","name":"学长等一下","city":"哈尔滨","desc":"好在赶在国庆硬装要的材料电器基本都定下来了","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon12.jpg","name":"Always悦悦","city":"芜湖","desc":"现在主要就差家具类的了","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon13.jpg","name":"女子瑾","city":"桂林","desc":"水电已验收，进入铺砖阶段","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon1.jpg","name":"校草儿","city":"长春","desc":"家具准备实木定制","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon2.jpg","name":"薄荷酱吖","city":"上海","desc":"款式都已经挑的差不多","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon3.jpg","name":"贾征宇","city":"北京","desc":"厂家在SJZ、LMGF、ASHLEY之间纠结","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon4.jpg","name":"李乐乐乐乐乐儿","city":"海南","desc":"成功没那么严重，做自己反而比较心安理得。明天我们好好的过。​","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon5.jpg","name":"阿星_Girl","city":"苏州","desc":"泥木工验收","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon6.jpg","name":"秋酿的猫里奥","city":"沈阳","desc":"乳胶漆、石膏线选样","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon7.jpg","name":"旧宿倾清","city":"杭州","desc":"橱柜图纸最终确认","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon8.jpg","name":"灯泡发光亮堂堂","city":"深圳","desc":"橱柜这周末才去看，到时候我会来帖子里报告哒~~","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon9.jpg","name":"梁竞纯","city":"南京","desc":"貌似小季橱柜挺火的是不是？","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon10.jpg","name":"樱桃我是小丸子","city":"上海","desc":"我也才买了电器，因为这几天苏宁国美都在搞活动挺划算的","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon11.jpg","name":"听说你喜欢的琉璃就是我","city":"北京","desc":"像冰箱灶头之类的一定要先看好尺寸，不然怕到时候厨具订好了放不进去。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon12.jpg","name":"胜事繁华","city":"天津","desc":"像我家冰箱就是一大痛点。。。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon13.jpg","name":"绿了个泉","city":"重庆","desc":"原本想买西门子对开门的，预留了1米的位置还是不够，实测后发现两边门没法完全打开，只能换成三开门的了","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon1.jpg","name":"五月的小菠萝","city":"成都","desc":"地插，很多人推荐使用地插，没错，地插确实能提升很多舒适度，解决电线悬空，不够长的尴尬。不过随之而来的问题也非常让人头疼。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon2.jpg","name":"橘子demi","city":"北京","desc":"第一，价格昂贵，一个品牌地插价格普遍在200以上。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon3.jpg","name":"可惜我是蓝色","city":"大连","desc":"第二，使用麻烦，需要蹲下。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon4.jpg","name":"嗯我是阿熊","city":"沈阳","desc":"第三，缝隙积灰，不易清洗，虽然表层是防水的，但不能拿着拖把直接上吧。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon5.jpg","name":"夏天听海","city":"长春","desc":"第四，不耐用，卡扣非常容易进灰，然后卡住，之后你的地插就藏不进去了。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon6.jpg","name":"你压着我头发了","city":"哈尔滨","desc":"​第五，由于在地面上，经常会踢到或绊倒，又是纯铜的，有边角，如果穿的是拖鞋，那感觉…..十指连心也包括脚趾呐。 ","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon7.jpg","name":"浪费cq","city":"桂林","desc":"好山好水好天光，好吃好喝好荒凉。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon8.jpg","name":"茶叶蛋青","city":"昆明","desc":"第六，由于插头连接桌子底下，电线更容易被桌下的腿所绊到，火锅吃着吃着，一收腿，整只锅被带下去的情况也不是没有的。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon1.jpg","name":"阿悦一朵花","city":"上海","desc":"地插唯一适合，没有违和感的就是棋牌桌底下，悬空放置的书桌底部，供台灯使用。这两处都是不频繁使用，遮蔽性比较好的。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon2.jpg","name":"空中高飞的燕","city":"北京","desc":"主要品牌评价","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon3.jpg","name":"玫瑰恩","city":"广州","desc":"主要品牌最佳质量（不分排名）：罗格朗、西蒙、梅兰日兰","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon4.jpg","name":"梨涡Dimple","city":"南京","desc":"鲜衣怒马少年时​","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon5.jpg","name":"给我一礼拜的阳光 ","city":"上海","desc":"流年。​","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon6.jpg","name":"尧尧一只","city":"黄山","desc":"你的意中人，是个盖世英雄。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon7.jpg","name":"夏沫冬初","city":"贵州","desc":"像是光与眼睛，疤痕与曾经，它们紧紧相依。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon8.jpg","name":"平淡如水","city":"长春","desc":"​一杯不会止一杯","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon9.jpg","name":"十里春风","city":"合肥","desc":"一头乱发等待会剪的人。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon10.jpg","name":"声缺","city":"杭州","desc":"沉默表演​​​","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon11.jpg","name":"学长等一下","city":"哈尔滨","desc":"世界清净，人人匆忙，人人匆忙，我在远方。一样，匆忙。​","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon12.jpg","name":"Always悦悦","city":"芜湖","desc":"聂鲁达的视野​​","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon13.jpg","name":"女子瑾","city":"桂林","desc":"再美的蓝图不如一幕回忆的绚烂​​","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon1.jpg","name":"校草儿","city":"长春","desc":"我想你与我同行，向着黑暗中的花。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon2.jpg","name":"薄荷酱吖","city":"上海","desc":"你说路太远天太阴，我说阴天里请绽放。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon4.jpg","name":"李乐乐乐乐乐儿","city":"海南","desc":"成功没那么严重，做自己反而比较心安理得。明天我们好好的过。​","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon5.jpg","name":"阿星_Girl","city":"苏州","desc":"泥木工验收","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon6.jpg","name":"秋酿的猫里奥","city":"沈阳","desc":"乳胶漆、石膏线选样","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon7.jpg","name":"旧宿倾清","city":"杭州","desc":"橱柜图纸最终确认","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon8.jpg","name":"灯泡发光亮堂堂","city":"深圳","desc":"橱柜这周末才去看，到时候我会来帖子里报告哒~~","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon9.jpg","name":"梁竞纯","city":"南京","desc":"貌似小季橱柜挺火的是不是？","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon10.jpg","name":"樱桃我是小丸子","city":"上海","desc":"","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon11.jpg","name":"听说你喜欢的琉璃就是我","city":"北京","desc":"像冰箱灶头之类的一定要先看好尺寸，不然怕到时候厨具订好了放不进去。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon12.jpg","name":"胜事繁华","city":"天津","desc":"像我家冰箱就是一大痛点。。。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon13.jpg","name":"绿了个泉","city":"重庆","desc":"原本想买西门子对开门的，预留了1米的位置还是不够，实测后发现两边门没法完全打开，只能换成三开门的了","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon2.jpg","name":"薄荷酱吖","city":"上海","desc":"你说路太远天太阴，我说阴天里请绽放。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon3.jpg","name":"贾征宇","city":"北京","desc":"阴天里，我是你的阳光。","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon4.jpg","name":"李乐乐乐乐乐儿","city":"海南","desc":"成功没那么严重，做自己反而比较心安理得。明天我们好好的过。​","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon5.jpg","name":"阿星_Girl","city":"苏州","desc":"泥木工验收","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon6.jpg","name":"秋酿的猫里奥","city":"沈阳","desc":"乳胶漆、石膏线选样","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon7.jpg","name":"旧宿倾清","city":"杭州","desc":"橱柜图纸最终确认","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon8.jpg","name":"灯泡发光亮堂堂","city":"深圳","desc":"橱柜这周末才去看，到时候我会来帖子里报告哒~~","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon9.jpg","name":"梁竞纯","city":"南京","desc":"貌似小季橱柜挺火的是不是？","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon10.jpg","name":"樱桃我是小丸子","city":"上海","desc":"","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon2.jpg","name":"空中高飞的燕","city":"北京","desc":"主要品牌评价","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon3.jpg","name":"玫瑰恩","city":"广州","desc":"主要品牌最佳质量（不分排名）：罗格朗、西蒙、梅兰日兰主要品牌最佳质量（不分排名）：罗格朗、西蒙、梅兰日兰主要品牌最佳质量（不分排名）：罗格朗、西蒙、梅兰日兰","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon4.jpg","name":"梨涡Dimple","city":"南京","desc":"鲜衣怒马少年时​","time":"2016/6/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)}
            ]
        };

        //点击切换显示与隐藏div
        $scope.fastSay = function () {
            $(".hideSpeak").toggle();
            $(".loginSpeak").show();

        };

        //点击增加内容函数
        $scope.addSpeak=function(){

            //邮箱账号非空验证
            var emailName=$(".emailId").val();
            if(emailName.replace(/^\s+|\s+$/g, "")==''){
                $('.emailId').val('');
                $('.hideTip').slideDown();
                setTimeout(function(){
                    $(".hideTip").slideUp();
                },500);
                return;
            }

            //密码非空验证
            var pwd=$(".emailPwd").val();
            if(pwd.replace(/^\s+|\s+$/g, "")==''){
                $('.emailPwd').val('');
                $('.pwdTip').slideDown();
                setTimeout(function(){
                    $(".pwdTip").slideUp();
                },500);
                return;
            }
            //点击增加内容
            //头像图片随机
            var imgNum=Math.ceil(Math.random()*13);
            //城市随机
            function getCity(cityIcon){
                var city="上海";
                var cities={
                    "1":"上海", "2":"北京", "3":"天津", "4":"杭州", "5":"广州",
                    "6":"哈尔滨", "7":"南京", "8":"昆明", "9":"桂林", "10":"深圳"
                };
                return cities[cityIcon] || city;
            }
            var cityNum=Math.ceil(Math.random()*10);
            //发言时间
            var sayTime=new Date().toLocaleString();

            $scope.data.speaks.unshift({
                "imgsrc":"images/icon"+imgNum+".jpg",
                "name":$scope.emailId,
                "city":getCity(cityNum),
                "desc":$scope.inputContent,
                "time":sayTime,
                "ding":0,
                "cai":0
            });
            $scope.emailId=null;
            $scope.emailPwd=null;
            $scope.inputContent=null;

        };

        //统计跟帖人数
        var mybbs=speakService.findAll();
        //统计speaks中发言总数量
        $scope.sumCount=function(){
            var total=$scope.data.speaks.length;
            //遍历统计
            angular.forEach(mybbs,function(item){
                total+=1;
            });
            return total;
        };

        //顶与踩--参与人数
        $scope.canyu=2581;
        //点击对应按钮,增加顶和踩的数量
        $scope.ding=function(speak){
            speak.ding++;
            $scope.canyu++;
        };
        $scope.cai=function(speak){
            speak.cai++;
            $scope.canyu++;
        }
});