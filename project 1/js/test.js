$(document).ready(function(){
    $("#start").on("click",function(){
    
        $(".button").fadeOut(1000);
        
        
    setTimeout(function(){
        $(".q1").fadeIn(500);
    },1000);    
    });
    
    
    $("#next1").on("click",function(){
    
        $(".q1").fadeOut(1000);
        
        
        setTimeout(function(){
            $(".q2").fadeIn(500);
        },1000);    
    });
    
    $("#next2").on("click",function(){
    
        $(".q2").fadeOut(1000);
        
        
    setTimeout(function(){
        $(".q3").fadeIn(500);
    },1000);    
    });
    
    $("#next3").on("click",function(){
    
        $(".q3").fadeOut(1000);
        
        
        setTimeout(function(){
            $(".q4").fadeIn(500);
        },1000);    
    });
    $("#next4").on("click",function(){
    
        $(".q4").fadeOut(1000);
        
        
    setTimeout(function(){
        $(".q5").fadeIn(500);
    },1000);    
    });
    $("#next5").on("click",function(){
    
        $(".q5").fadeOut(1000);
        
        
    setTimeout(function(){
        $(".q6").fadeIn(500);
    },1000);    
    });
    $("#next6").on("click",function(){
    
        $(".q6").fadeOut(1000);
        
        
    setTimeout(function(){
        $(".q7").fadeIn(500);
    },1000);    
    });
    $("#next7").on("click",function(){
    
        $(".q7").fadeOut(1000);
        
        
    setTimeout(function(){
        $(".q8").fadeIn(500);
    },1000);    
    });
    
    $("#next8").on("click",function(){
    
        $(".q8").fadeOut(1000);
        
        
    setTimeout(function(){
          $(".q9").fadeIn(500);
    },1000);    
    });
    
    $("#next9").on("click",function(){
    
        $(".q9").fadeOut(1000);
        
        
    setTimeout(function(){
          $(".button_end").fadeIn(500);
    },1000);    
    });
});