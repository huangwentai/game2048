# game2048
这是非常早期写的一个2048的游戏，有次老师在课间时看到同学在玩2048，老师说这么简单能不能去写一个，于是我去写了一个，测了好像没有bug，但是还有很多的不足，像没有过渡动画，毕竟太早期

##主要html代码布局
id和class调转使用了，不要注意这个细节，没有用id做事件，只是用来当样式
```javascript
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

