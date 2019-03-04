$(document).ready(function(){
    
    $(".bth").click(function(){
        $('.menu2').animate({
            left:0
        },1500)
        
    });
     $(".ex").click(function(){
        $('.menu2').animate({
            left:"-250px"
        },1000)
        
    });
    
    
    var pos;
    
    $(".menu1 li a").each(function(i){
        $(this).on('click',function(e){
            e.preventDefault();
            if(i==0){
                pos=$('#catalog').position().top;
                $("html").animate({
                    scrollTop:pos
                },1500)
            }
            if(i==1){
                pos=$('#work').position().top;
                $("html").animate({
                    scrollTop:pos
                },1500)
            }
            if(i==2){
                pos=$('#comments').position().top;
                $("html").animate({
                    scrollTop:pos
                },1500)
            }
            if(i==3){
                pos=$('#form').position().top;
                $("html").animate({
                    scrollTop:pos
                },1500)
            }
        });
    });
    $(".menu2 li a").each(function(i){
        $(this).on('click',function(e){
            e.preventDefault();
            if(i==0){
                pos=$('#catalog').position().top;
                $("html").animate({
                    scrollTop:pos
                },1500)
            }
            if(i==1){
                pos=$('#work').position().top;
                $("html").animate({
                    scrollTop:pos
                },1500)
            }
            if(i==2){
                pos=$('#comments').position().top;
                $("html").animate({
                    scrollTop:pos
                },1500)
            }
            if(i==3){
                pos=$('#form').position().top;
                $("html").animate({
                    scrollTop:pos
                },1500)
            }
        });
    });
    
    
    
    
    
    
    
    
    
    
});