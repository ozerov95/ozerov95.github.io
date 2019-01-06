


 





$(document).ready(function(){
    var i=0;
    var j=0;
    
    $(".show1").click(function(){
      
        if(i==0){
            $(".list1").slideDown(1500);
            setTimeout(function(){
                 $(".show1").text("Закрыть");
            },1500);
            i++;
        }else if(i==1){
            i=0;
            $(".list1").slideUp(1500);
            setTimeout(function(){
                 $(".show1").text("Показать");
            },1500);
        }
    });
    $(".show2").click(function(){
         if(j==0){
               $(".list2").slideDown(1500);
            setTimeout(function(){
                 $(".show2").text("Закрыть");
            },1500); 
            j++;
        }else if(j==1){
            j=0;
           $(".list2").slideUp(1500);
           setTimeout(function(){
                 $(".show2").text("Показать");
            },1500); 
        }
        
    });
    
    
    
    
    $("#DQ").click(function(){
       $("#modal2").fadeIn(1000); 
    });
    $("#DC").click(function(){
       $("#modal3").fadeIn(1000); 
    });
   /* 
    $("#next1").click(function(){

    		qs1 = $("#qt1").val();
    		console.log(qs1);

    });
    $("#next2").click(function(){
    	qs2 = $("#qt2").val();
    		console.log(qs2);

    })
    $("#next3").click(function(){
    		qr3 = $(".q3 input[name='qr3']:checked").val();
    		console.log(qr3);

    });
    $("#next4").click(function(){
    		qr4 = $(".q4 input[name='qr4']:checked").val();
    		val_41=$("#val_41").val();
    		val_42=$("#val_42").val();
    		console.log(qr4+":"+val_41+":"+val_42);
    });
    $("#next5").click(function(){
    	   qr5 = $(".q5 input[name='qr5']:checked").val();
    		val_51=$("#val_51").val();
    		val_52=$("#val_52").val();
    		console.log(qr5+":"+val_51+":"+val_52);

    });
    $("#next6").click(function(){
    		qr6 = $(".q6 input[name='qr6']:checked").val();
    		val_61=$("#val_61").val();
    		val_62=$("#val_62").val();
    		console.log(qr6+":"+val_61+":"+val_62);

    });
    $("#next7").click(function(){
    			qs7 = $("#qt7").val();
    		console.log(qs7);

    });
    $("#next8").click(function(){
    	qr8 = $(".q8 input[name='qr8']:checked").val();
    	console.log(qr8);
    });
    $("#next9").click(function(){
    	qs9 = $("#qt9").val();
    		console.log(qs9);

    });
    
  */
    $('#ex1').click(function(){
    		      $("#modal2").fadeOut(1000);
    		
            });
            $('#ex2').click(function(){
                    $("#modal3").fadeOut(1000);
            });
           
    
    
});