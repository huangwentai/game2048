# game2048
这是非常早期写的一个2048的游戏，有次老师在课间时看到同学在玩2048，老师说这么简单能不能去写一个，于是我去写了一个，测了好像没有bug，但是还有很多的不足，像没有过渡动画，毕竟太早期

初始化
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
