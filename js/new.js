



new WOW().init();

var typed = new Typed('.element', {
  strings: ['Freelancer', 'web designer'],
  smartBackspace: true,
  loop:true,
   typeSpeed: 80,
    backSpeed: 50,
});


var typed = new Typed('.element1', {
  strings: ['If You Create Any Website,Please Contact Me', ''],
  smartBackspace: true,
  loop:true,
   typeSpeed: 80,
   backSpeed:70
   
});




$(document).ready(function() {

	$('.nav-container').sticky({

		 topSpacing:0,
		 zIndex:999,
	});



  AOS.init({

  	 offset: 275,
  	  duration: 600,
  });



});


function myloader() {

document.querySelector('.preloader').style.display="none";
	
};



$(document).ready(function () {

setTimeout(function () {

$('.popupmain').css({

	display:'block',

})


},30000);

	
});

$('.btn-danger').click(function() {

	$('.popupmain').css({

	display:'none',
});


});


$('.counter').counterUp({
    delay: 5,
    time: 1000
});








