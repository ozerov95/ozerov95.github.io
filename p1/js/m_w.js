$(document).ready(function(){

    
    $(".phone").click(function(e){
        
    e.preventDefault();
       
               $(".win-phone").fadeIn(1500);
                 var docHeight = $(document).height();
               $("body").append("<div id='overlay'></div>");
               $("#overlay")
                  .height(docHeight);   
           });

    $(".cancel").click(function(){
         $("#overlay").remove();
        $(".win-phone").fadeOut(1500);
    });
    
});