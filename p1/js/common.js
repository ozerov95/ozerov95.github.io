

var text_slide_cur=0;
var text_slider_cur=0;
function showtext_slide(){
	$('#text_slide'+(text_slide_cur+1)).css({opacity: 0}).animate({opacity: 1.0,left: "25px"}, 1000);
	setTimeout(hidetext_slide, 12000);
}
function hidetext_slide(){
	$('#text_slide'+(text_slide_cur+1)).css({opacity: 1}).animate({opacity: 0,left: "-25px"}, 1000,function(){showtext_slide();});
	text_slide_cur=(text_slide_cur+1)%3;
}
////////////////////////////////////////////////////////////////
function showtext_slider(){
	$('#text_slider'+(text_slider_cur+1)).css({opacity: 0}).animate({opacity: 1.0}, 1000);
	setTimeout(hidetext_slider, 15000);
}
function hidetext_slider(){
	$('#text_slider'+(text_slider_cur+1)).css({opacity: 1}).animate({opacity: 0}, 1000,function(){showtext_slider();});
	text_slider_cur=(text_slider_cur+1)%4;
}

/// Spincrement

$(window).scroll(function () {
	var scrTop = $(window).scrollTop();
	if(scrTop>$('.inner').offset().top - $(window).height()  ) {
		numAnimate();
	}
});
function numAnimate () {
	$('.spinc4').animate({ num: 145 - 1 }, {
		duration: 3000,
		step: function (num){
			this.innerHTML = (num + 1).toFixed(0)
		}
	});
	$('.spinc5').animate({ num: 120 - 1 }, {
		duration: 3000,
		step: function (num){
			this.innerHTML = (num + 1).toFixed(0)
		}
	});
	$('.spinc6').animate({ num: 17 - 1 }, {
		duration: 3000,
		step: function (num){
			this.innerHTML = (num + 1).toFixed(0)
		}
	});
};

////////////////////////////////////////////// START///////////////////////////////

$(document).ready(function(){

// Photo-carousel
$('.carousel').carousel({
	dist: -50,
	shift: 40,
	duration: 300
});



// Text slider

showtext_slide();
showtext_slider();

// Logo go

$("#logo-wrap").on("click", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
});

////fancy box



$(".fancybox").fancybox({
	openEffect  : 'none',
	closeEffect : 'none',
	iframe : {
		preload: false
	}
});


//respons slider

   $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: false
   });


   // move next carousel
   $('.moveNextCarousel2').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel2').carousel('next');
   });

   // move prev carousel
   $('.movePrevCarousel2').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel2').carousel('prev');
   });

   /////////


   // move next carousel
   $('.moveNextCarousel1').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel1').carousel('next');
   });

   // move prev carousel
   $('.movePrevCarousel1').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel1').carousel('prev');
   });




// start carrousel
   // $('.carousel.carousel-slider').carousel({
   //    fullWidth: true,
   //    indicators: false
   // });


   // // move next carousel
   // $('.moveNextCarousel').click(function(e){
   //    e.preventDefault();
   //    e.stopPropagation();
   //    $('.carousel').carousel('next');
   // });

   // // move prev carousel
   // $('.movePrevCarousel').click(function(e){
   //    e.preventDefault();
   //    e.stopPropagation();
   //    $('.carousel').carousel('prev');
   // });


});



