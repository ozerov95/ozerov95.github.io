$(document).ready(function(){

			$(".button").on("click",function(){
				
				$("#menu").animate({
					left:"0px"
				},1000);
				
			});
			$(".ex").on("click",function(){
				
				$("#menu").animate({
					left:"-250px"
				},1000);
				
			});
	
	
	$(window).resize(function(){
		
		var width = $(this).width();
		
		
		
		
		if(width>=1009){
			
			$("#menu").css({
				
				left:"-250px"
			});
			
			
			
		}
		
		
	});
	
	
	
	function win_width(){
		
		var width = $(window).width();
		
		console.log(width);	
		
		if(width>=1009){
			
			$("#menu").css({
				
				left:"-250px"
			});
		
		
	}
	}
	win_width();
	
	
	
	
	$(".form-win").on("click",function(e){
		e.preventDefault();
		
		$("#form-win").fadeIn(1500);
	});
	
	$("#form-win .ex").click(function(){
		$("#form-win").fadeOut(1500);
	});
	
	var pos;
	
	$(".men li").each(function(i){
		$(this).click(function(e){
			e.preventDefault();
			if(i==0){
				 pos=$("#block5").position().top;
				console.log(pos);
				$("html").animate({
					
					scrollTop:pos
					
				},1000);
			}
			if(i==1){
				 pos=$("#block6").position().top;
				console.log(pos);
				$("html").animate({
					
					scrollTop:pos
					
				},1000);
			}
			if(i==2){
				 pos=$("#block7").position().top;
				console.log(pos);
				$("html").animate({
					
					scrollTop:pos
					
				},1000);
			}
		});
	});
	
	
	

});