
if ($(window).width() > 960) {
	if(navigator.userAgent.indexOf('Mac') > 0)
	$('body').addClass('mac-os');
}


// document ready function

$(document).ready(function(){	

	
	// $('.select2').select2({
	// 	minimumResultsForSearch: Infinity
	// });

	
	$('.main-menu ul li a').click(function() {
		$('.main-menu li.active-menu').removeClass('active-menu');
		$(this).closest('li').addClass('active-menu');
	});

	$(document).on("click", ".mob-menu-btn", function(event){
		$(this).toggleClass('open');
		$('.burger-menu').toggleClass('active');
	});

	function scrollToSection(event) {
		var headerHeight = 97;
		event.preventDefault();
		var $section = $($(this).attr('href')); 
			$('html, body').animate({
				scrollTop: $section.offset().top - headerHeight
			}, 500);
	  }
	$('[data-scroll]').on('click', scrollToSection);


	$(function(){
	  var $elems = $('.hideme');
	  var winheight = $(window).height();
	  var fullheight = $(document).height();
	      $(window).scroll(function(){
	        animate_elems();
	        //onScroll();
	      });

	  function animate_elems() {
	    wintop = $(window).scrollTop();
	    $elems.each(function(){
	      $elm = $(this);
	      if($elm.hasClass('showme')) { return true; }
	      topcoords = $elm.offset().top; 
	      if(wintop > (topcoords - (winheight * 0.9))) {
	        $elm.addClass('showme');
	      }
	    });
	  } 
	});

	$(window).load(function(){
		$(".load-fadein, .load-slide-bottom, .load-slide-top").addClass("active");
	  })

	
});

$(".inner-scroll-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y < 2140) {
    $('.inner-scroll-top').fadeIn();
  } else {
    $('.inner-scroll-top').fadeOut();
  }
});


