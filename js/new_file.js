//焦点图轮播
function dotClick(ulName,dotName,moveTime){
	var myUl=$(ulName)  //将ul里的sum对象赋给myUl变量
	var myli=$(ulName).children("li:first");  //将第一个li元素赋给myli变量
	var mylis=$(ulName).children("li");
	var oldot=$(dotName);
	var dotNumbers=1;
	for(var i=0;i<mylis.length;i++){
		dotNumbers++;
		oldot.append("<span></span>");
	}
	var tbsc=null;
	var tips=$(myli).clone(true);
	myUl.append(tips);
	var mylilast=$(ulName).children("li:last");
	$(dotName).children("span:first").addClass("active");
	var mydotlast=$(dotName).children("span:last");
	var num=0;
	var num1=0;
	var imgwidth=myUl.children("li").css("width");
	imgwidth=parseInt(imgwidth);
	var steps=myUl.children("li").length;
	myUl.width(imgwidth*steps);
	function sport(){
		num1++;
		num++;
		var distance=imgwidth*-num;
		if(num>myUl.children("li:last").index()){
			num=1;
			myUl.css("left",0).stop().animate({left:(imgwidth*-1)},300);
		}else{
			myUl.stop().animate({left:distance},300);
		};
		if(num1>mydotlast.index()){
			num1=0;
			oldot.children("span").eq(num1).addClass("active").siblings().removeClass("active");
		}else{
			oldot.children("span").eq(num1).addClass("active").siblings().removeClass("active");
		}
	}
	tbsc=setInterval(sport,moveTime);
	var distbts;
	oldot.children("span").click(function(){
		distbts=imgwidth*$(this).index()*-1;
		$(this).addClass("active").siblings().removeClass("active");
		myUl.animate({left:distbts},300);
        num=$(this).index();
        num1=$(this).index();
        clearInterval(tbsc);
        tbsc=setInterval(sport,moveTime);
	})
	mylis.hover(function(){
		clearInterval(tbsc);
	},function(){
		setInterval(sport,moveTime);
	})
}
dotClick($("#sum"),$(".dot"),3000);

//图片透明度交互
$("#w_con li img").hover(function(){
	$(this).css({opacity:"0.6"});
},function(){
	$(this).css({opacity:"1"});
})
//4G元年大事记
$(function(){
	$(".w962 li:first").find(".txt_bg").css({display:"block"});
	$(".w962 li").hover(function(){
		var num3=$(this).index();
		if(num3==0){
			$(".w962 li:first").find(".txt_bg").css({display:"block"});
		    $(this).addClass("show").siblings().removeClass("show");
		}else{
			$(".w962 li:first").find(".txt_bg").css({display:"none"});
			$(this).addClass("show").siblings().removeClass("show");
		}
	})
})

//4G终端盘点交互
$(function(){
	/*在UI内部结尾处插入一个和第一个一样的li*/
	function rollByEachPic(ulName1,rightBtn,leftBtn,startPicNum,moveTime1){
		var theUl=$(ulName1);
		var theRightBtn=$(rightBtn);
		var theLeftBtn=$(leftBtn);
		//var myli=$(".sum li").slice(0,4);  //根据初始页面li的数量取值
		var myli1=theUl.children("li").slice(0,startPicNum);  //根据初始页面li的数量取值
		//alert(myli.length);
		var mylis1=theUl.children("li");
		var tbsc1=null;
		var tips1=$(myli1).clone(true);
		theUl.append(tips1);
		/*点击事件*/
		var num4=0; /*图片的*/
		var imgwidth1=parseInt(mylis1.css("width"));  //获取插入图片的宽度
		var imgmr=parseInt(mylis1.css("margin-right"));
		var moveDistance=imgwidth1+imgmr;
		var steps1=theUl.children("li").length;/*获取li个数*/
		theUl.width(moveDistance*steps1)  /*给ul赋值--宽度*/
		theRightBtn.click(function(){
			clearInterval(tbsc1);
			num4++;
			var distance1=moveDistance*-num4;
			if(num4>(mylis1.length)){
				num4=1;
				theUl.css("left",0).stop().animate({left:(moveDistance*-1)},300);
			}else{
				theUl.stop().animate({left:distance1},300);
			};
			});
			theLeftBtn.click(function(){
				clearInterval(tbsc1);
				num4--;
				var num6=mylis1.length;
				var dist1=moveDistance*num4*-1;
				if(num4<0){
					num4=num6-1;
					theUl.css("left",(num6*-1*moveDistance)).stop().animate({left:((num6-1)*-1*moveDistance)},300);
				}else{
					theUl.stop().animate({left:dist1},300);
				}
				tbsc1=setInterval(sports1,moveTime1);
				})
				/*鼠标放上stop,离开回复动*/
				theUl.children("li").hover(function(){
					clearInterval(tbsc1);
				},function(){
					tbsc1=setInterval(sports1,moveTime1);
				})
				/*定时器*/
				function sports1(){
					num4++;
			        var distance1=moveDistance*-num4;
			        if(num4>(mylis1.length)){
				      num4=1;
				      theUl.css("left",0).stop().animate({left:(moveDistance*-1)},300);
			        }else{
				      theUl.stop().animate({left:distance1},300);
			        };
				}
				tbsc1=setInterval(sports1,moveTime1);
		
	}
rollByEachPic($(".sum1"),$(".next"),(".prev"),4,5000);
})

//右侧侧边导航交互
$(".top").click(function(){
	$("html,body").animate({scrollTop:0},120)
})
