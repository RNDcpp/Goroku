var $container
var $innercontainer
var $vertical_cent
var $cont_size
var $scroll_top
var $scroll_bottom
var $goroku_scroll_top
function windowInitialize(){
	console.log("ready");
	$('#goroku').niceScroll({scrollspeed:2,mousescrollstep:10,hwacceleration: false}).hide();
	$('#goroku').scroll(updateListSize);
	$goroku_scroll_top = 	$('#goroku').scrollTop();
	$container = $("#panel-container")
	$innercontainer = $("#inner-container")
	$scroll_top = $("#scroll_top")
	$scroll_bottom = $("#scroll_bottom")
	setInterval(containerCentering, 500);
//	setInterval(updateListSize,40);
	setInterval(infScroll,60);
	var list=new Array(
		"A","AA","AAA","AAAA","AAAAA","AAAAAA","AAAAAAA","AAAAAAAA","AAAAAAAAA","AAAAAAAAAA","AAAAAAAAAAA",
		"AAAAAAAAAAAA","AAAAAAAAAAAAA","AAAAAAAAAAAAAA","AAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAA",
		"AAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAA","B","BB","BBB","BBBB","BBBBB","BBBBBB"
		);
	for(i in list){
		console.log(list[i]);
		$innercontainer.append('<div class="panel">'+list[i]+'</div>');
	}
}
function containerCentering(){
	$container.verticalCentering();
//	console.log('centeringContainer'+$container);
}
function updateListSize(){
	$vertical_cent = $(window).height()/2
	$cont_size = $container.height()
	$(".panel").each(function(){
		dist= $vertical_cent - $(this).position().top;
		if(Math.abs(dist)>$cont_size/2){
			dist=((dist<0)?-1:1)*$cont_size/2;
		}
		dist_cos=Math.cos(dist/$cont_size*2*Math.PI);
	//	console.log(dist_cos);
//		$(this).height(40+50*dist_cos);
		$(this).width(100+510*dist_cos);
		$(this).css(
			{
				opacity:(dist_cos*3-2.2)
			});				
	})
}
function infScroll(){
	$vertical_cent = $(window).height()/2
	$cont_size = $container.height()
	console.log($scroll_top.position().top-$vertical_cent);
	if($scroll_top.position().top>-20){
		console.log('scroll-to-top');
		panels = $(".panel")
		btm=panels[panels.length - 1]
		btm_txt=btm.textContent
		btm.remove()		
		$innercontainer.prepend('<div class="panel">'+btm_txt+'</div>')
		$("#goroku").scrollTop($("#goroku").scrollTop()+100);
/*		var list=new Array("AAA","BBB","CCC","DDD","EEE","FFF","GGG","HHH","III","JJJ","KKK","LLL","MMM","NNN","III","JJJ","KKK","LLL","MMM","NNN");
		for(i in list){
			console.log(list[i]);
			$innercontainer.append('<div class="panel">'+list[i]+'</div>');
		}		
*/	}
	else if( $scroll_bottom.position().top<$cont_size/2){
		console.log('scroll-to-bottom');
		panels = $(".panel");
		top_itm=panels[0];
		top_itm_txt=top_itm.textContent;
		top_itm.remove();
		$("#goroku").scrollTop($("#goroku").scrollTop()-100);
//		var list=new Array("AAA","BBB","CCC","DDD","EEE","FFF","GGG","HHH","III","JJJ","KKK","LLL","MMM","NNN","III","JJJ","KKK","LLL","MMM","NNN");
//		for(i in list.reverse()){
//			console.log(list[i]);
//			$innercontainer.append('<div class="panel">'+list[i]+'</div>');
//		}
		$innercontainer.append('<div class="panel">'+top_itm_txt+'</div>')
	}
	$goroku_scroll_top = $('#goroku').scrollTop()
}
$(window).load(windowInitialize);
