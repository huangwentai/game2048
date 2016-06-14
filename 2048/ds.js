// JavaScript Document

//00 01 02 03
//10 11 12 13
//20 21 22 23
//30 31 32 33

$(document).ready(function() {
	document.ontouchstart=function(){
	  return false;
	}
	var control = navigator.control || {};if (control.gesture) { control.gesture(false);}
	//产生两个随机数
	var guess=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	var what=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	var first=0,dout=0,rdc=0,second=0;
	function randomtwo(){
		dout=0;
		second=0;
		for(i=0;i<4;i++){
			for(j=0;j<4;j++){
				if(guess[i][j]=="0"){first=0;}
                if(guess[i][j]=="2048"){alert("you win!!!!!");}				
			}
		}
		
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
		for(i=0;i<4;i++){
			for(j=0;j<3;j++){
				if(guess[i][j]=="0"||guess[i][j+1]=="0"){dout=1;}
				if(guess[i][j]==guess[i][j+1]||guess[j][i]==guess[j+1][i]){second=1;}				
			}
		}
		
		if(dout==0&&second==0){alert("you game over!!");return 0;}
	}
	//初始化	
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
	//向左边
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
		//向右边
		function to_right(){ 
		
		 for(i=0;i<4;i++){
			for(j=0;j<4;j++){
                what[i][j]=guess[i][j];
			}
		}
		for(a=0;a<4;a++){
			for(i=0;i<4;i++){
				for(j=3;j>0;j--){
					if(guess[i][j]=="0"){					
						guess[i][j]=guess[i][j-1];
						guess[i][j-1]="0";					
					}
				}
			}
	    }
		for(i=0;i<4;i++){
			for(j=3;j>0;j--){
				if(guess[i][j]==guess[i][j-1]&&guess[i][j]!="0"){
					guess[i][j]=parseInt(guess[i][j])+parseInt(guess[i][j-1]);
					guess[i][j-1]="0";
				}
			}
		}
		for(a=0;a<4;a++){
			for(i=0;i<4;i++){
				for(j=3;j>0;j--){
					if(guess[i][j]=="0"){					
						guess[i][j]=guess[i][j-1];
						guess[i][j-1]="0";					
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
		//向上
		function to_up(){ 
		
		  for(i=0;i<4;i++){
			for(j=0;j<4;j++){
                what[i][j]=guess[i][j];
			}
		}
	    for(a=0;a<4;a++){
			for(i=0;i<4;i++){
				for(j=0;j<3;j++){
					if(guess[j][i]=="0"){					
						guess[j][i]=guess[j+1][i];
						guess[j+1][i]="0";					
					}
				}
			}
	    }
		for(i=0;i<4;i++){
			for(j=0;j<3;j++){
				if(guess[j][i]==guess[j+1][i]&&guess[j][i]!="0"){
					guess[j][i]=parseInt(guess[j][i])+parseInt(guess[j+1][i]);
					guess[j+1][i]="0";
				}
			}
		}
		for(a=0;a<4;a++){
			for(i=0;i<4;i++){
				for(j=0;j<3;j++){
					if(guess[j][i]=="0"){					
						guess[j][i]=guess[j+1][i];
						guess[j+1][i]="0";					
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
		//向下 
		function to_down(){ 
		
		   for(i=0;i<4;i++){
			for(j=0;j<4;j++){
                what[i][j]=guess[i][j];
			}
		}
		for(a=0;a<4;a++){
			for(i=0;i<4;i++){
				for(j=3;j>0;j--){
					if(guess[j][i]=="0"){					
						guess[j][i]=guess[j-1][i];
						guess[j-1][i]="0";					
					}
				}
			}
	    }
		for(i=0;i<4;i++){
			for(j=3;j>0;j--){
				if(guess[j][i]==guess[j-1][i]&&guess[j][i]!="0"){
					guess[j][i]=parseInt(guess[j][i])+parseInt(guess[j-1][i]);
					guess[j-1][i]="0";
				}
			}
		}
		for(a=0;a<4;a++){
			for(i=0;i<4;i++){
				for(j=3;j>0;j--){
					if(guess[j][i]=="0"){					
						guess[j][i]=guess[j-1][i];
						guess[j-1][i]="0";					
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
	} 
 
	
	$(document).keydown(function(event){ 
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
	});
	
	
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
             //    alert(y+"px"+x+"px");
 				 if(y<-100&&x<50&&x>-50)
 				//	alert(y+"px"+x+"px");
 					 to_up();
 				 if(x>100&&y<50&&y>-50)
 				//	alert(y+"px"+x+"px");
 			 to_right();
 				 if(x<-100&&y<50&&y>-50)
 				//	alert(y+"px"+x+"px");
 					 to_left();
            }
             document.getElementById("ds2048").addEventListener('touchstart', touchSatrt,false);  
             document.getElementById("ds2048").addEventListener('touchmove', touchMove,false);  
             document.getElementById("ds2048").addEventListener('touchend', touchEnd,false);  
});


