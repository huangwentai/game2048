# game2048
这是非常早期写的一个2048的游戏，有次老师在课间时看到同学在玩2048，老师说这么简单能不能去写一个，于是我去写了一个，测了好像没有bug，但是还有很多的不足，像没有过渡动画，毕竟太早期

##主要html代码布局
id和class调转使用了，不要注意这个细节，没有用id做事件，只是用来当样式
```html
<div class="ds2048">
	<div class="ds00" id="d0"></div>
	<div class="ds01" id="d0"></div>
	<div class="ds02" id="d0"></div>
	<div class="ds03" id="d0"></div>
	
	<div class="ds10" id="d0"></div>
	<div class="ds11" id="d0"></div>
	<div class="ds12" id="d0"></div>
	<div class="ds13" id="d0"></div>
	
	<div class="ds20" id="d0"></div>
	<div class="ds21" id="d0"></div>
	<div class="ds22" id="d0"></div>
	<div class="ds23" id="d0"></div>
	
	<div class="ds30" id="d0"></div>
	<div class="ds31" id="d0"></div>
	<div class="ds32" id="d0"></div>
	<div class="ds33" id="d0"></div>
</div>
````

##全局变量
```javascript
var guess=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];//改变后的数组
var what=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];//前一个数组
var first=0,//滑动的次数
	dout=0,//判断有没有空位
	rdc=0,//数字是多少
	second=0;//判断相连的两个数字是否相同
````

##初始化
生成两个两个数字
```javascript
while(first<2){
var rdx=Math.ceil(Math.random()*4)-1;	
   var rdy=Math.ceil(Math.random()*4)-1;
   if(Math.ceil(Math.random()*8)==4){rdc=4}else rdc=2;
	if(guess[rdx][rdy]=="0"){
		guess[rdx][rdy]=rdc;
	    $(".ds"+rdx+""+rdy).text(rdc);
		$(".ds"+rdx+""+rdy).attr("id","d"+rdc);
	first ++;}
}
````

##向左边滑动的事件
每一行往左边相加一次，其他三个方向类似
```javascript
function to_left(){ 
	//do somethings; 
	for(i=0;i<4;i++){
		for(j=0;j<4;j++){
			 what[i][j]=guess[i][j];
		}
	}
	for(a=0;a<4;a++){
		for(i=0;i<4;i++){
			for(j=0;j<3;j++){
				if(guess[i][j]=="0"){					
					guess[i][j]=guess[i][j+1];
					guess[i][j+1]="0";					
				}
			}
		}
    	}
	for(i=0;i<4;i++){
		for(j=0;j<3;j++){
			if(guess[i][j]==guess[i][j+1]&&guess[i][j]!="0"){
				guess[i][j]=parseInt(guess[i][j])+parseInt(guess[i][j+1]);
				guess[i][j+1]="0";
			}
		}
	}
	for(a=0;a<4;a++){
		for(i=0;i<4;i++){
			for(j=0;j<3;j++){
				if(guess[i][j]=="0"){					
					guess[i][j]=guess[i][j+1];
					guess[i][j+1]="0";					
				}
			}
		}
    	}
	for(i=0;i<4;i++){
		for(j=0;j<4;j++){
			$(".ds"+i+""+j).text("");
			$(".ds"+i+""+j).attr("id","");
		}
	}
	for(i=0;i<4;i++){
		for(j=0;j<4;j++){
			if(guess[i][j]!="0"){									
				$(".ds"+i+""+j).text(guess[i][j]);
			    $(".ds"+i+""+j).attr("id","d"+guess[i][j]);
				
			}
		}
	}

    	randomone();
};
````

##判断改变前和改变后的是不是一样的
```javascript
function randomone(){
	for(i=0;i<4;i++){
		for(j=0;j<4;j++){
			if(what[i][j] != guess[i][j]){					
				randomtwo();
			    break;
			}
		}
	}
}
````

##如果不一样则添加一位
```javascript
function randomtwo(){
	dout=0;
	second=0;
	//是否达到了2048，达到则成功
	for(i=0;i<4;i++){
		for(j=0;j<4;j++){
			if(guess[i][j]=="0"){first=0;}
        if(guess[i][j]=="2048"){alert("you win!!!!!");}				
		}
	}
	//生成一个新数字
	while(first<1){
       var rdx=Math.ceil(Math.random()*4)-1;	
	   var rdy=Math.ceil(Math.random()*4)-1;
	   if(Math.ceil(Math.random()*8)==4){rdc=4}else rdc=2;
		if(guess[rdx][rdy]=="0"){
			guess[rdx][rdy]=rdc;
		    $(".ds"+rdx+""+rdy).text(rdc);
			$(".ds"+rdx+""+rdy).attr("id","d"+rdc);
		first ++;}
    }
    //判断是否还有空位和相邻的两个数是不是相同，都不符合则提示失败
	for(i=0;i<4;i++){
		for(j=0;j<3;j++){
			if(guess[i][j]=="0"||guess[i][j+1]=="0"){dout=1;}
			if(guess[i][j]==guess[i][j+1]||guess[j][i]==guess[j+1][i]){second=1;}				
		}
	}
	
	if(dout==0&&second==0){alert("you game over!!");return 0;}
}
````

##然后加上触发的事件
```javascript
//判断当event.keyCode 为37时（即左方面键），执行函数to_left(); 
//判断当event.keyCode 为39时（即右方面键），执行函数to_right(); 
//判断当event.keyCode 为38时（即左方面键），执行函数to_up(); 
//判断当event.keyCode 为40时（即右方面键），执行函数to_down(); 
if(event.keyCode == 37){ 
   to_left(); 
}else if (event.keyCode == 39){  
   to_right(); 
}else if (event.keyCode == 38){ 
   to_up(); 
}else if (event.keyCode == 40){ 
   to_down();  
}

//点击事件
$(".left").click(function(){
	to_left();
});	
$(".right").click(function(){
	 to_right();
});	
$(".up").click(function(){
	to_up();
});	
$(".down").click(function(){
	to_down();
});

//手指滑动事件
var startX,//触摸时的坐标
startY,
x, //滑动的距离
y,
aboveY=0; //设一个全局变量记录上一次内部块滑动的位置 

var inner=document.getElementById("inner");

function touchSatrt(e){//触摸
e.preventDefault();
var touch=e.touches[0];
	startX = touch.pageX;
startY = touch.pageY;   //刚触摸时的坐标              
}

function touchMove(e){//滑动          
 e.preventDefault();        
 var  touch = e.touches[0];               
 y = touch.pageY - startY;//滑动的距离
	  x = touch.pageX - startX;//滑动的距离
//inner.style.webkitTransform = 'translate(' + 0+ 'px, ' + y + 'px)';  //也可以用css3的方式     
// inner.style.top=aboveY+y+"px"; //这一句中的                          
}  

function touchEnd(e){//手指离开屏幕
      e.preventDefault();                   
      if(y>100&&x<50&&x>-50) 
   		to_down();
	if(y<-100&&x<50&&x>-50)
		 to_up();
	if(x>100&&y<50&&y>-50)
 		to_right();
	if(x<-100&&y<50&&y>-50)
		 to_left();
}
document.getElementById("ds2048").addEventListener('touchstart', touchSatrt,false);  
document.getElementById("ds2048").addEventListener('touchmove', touchMove,false);  
document.getElementById("ds2048").addEventListener('touchend', touchEnd,false); 
````

##自适应手机屏幕
用js去改变css3放大
```javascript
var width=$(window).width();
$(".ds2048").css("-webkit-transform","scale("+width/450+")");
````

##最后
一个2048的游戏就这样完成了，第一次写是很粗糙的，也没有改进过这个代码游戏，我觉得还是挺适合新手去看的，面向过程的代码，一步到下一步
