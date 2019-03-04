$(document).ready(function(){
  
    
    
    $("#switch span").each(function(i){
       $(this).on("click",function(){
           
           if(i==0){
            
               $(".com2").fadeOut(1500);
               $(".com3").fadeOut(1500);
               
               
               setTimeout(function(){
                   $(".com1").fadeIn(1000);
               },1500);
               $("#switch span").removeClass('bg-col');
               $(this).addClass('bg-col');
               
           }
           if(i==1){
               $(".com1").fadeOut(1500);
               $(".com3").fadeOut(1500);
               
               
               setTimeout(function(){
                   $(".com2").fadeIn(1000);
               },1500)
                $("#switch span").removeClass('bg-col');
               $(this).addClass('bg-col');
           }
           if(i==2){
               $(".com1").fadeOut(1500);
               $(".com2").fadeOut(1500);
               
               
               setTimeout(function(){
                   $(".com3").fadeIn(1000);
               },1500)
                $("#switch span").removeClass('bg-col');
               $(this).addClass('bg-col');
           }
       }); 
    });
    
    
    
    
    
    
    
    
    
    
    
    
});



