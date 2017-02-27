var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";
	
	//Parallax Scrolling
	$(window).bind('load', function () {
		parallaxInit();						  
	});
	function parallaxInit() {		
		$("#call-to-action").parallax("50%", 0.3);
		$("#statistics").parallax("50%", 0.3);
		$("#testimonial").parallax("50%", 0.3);
		$("#twitter").parallax("50%", 0.3);	
		$("#contact").parallax("50%", 0.3);	
	}	
	parallaxInit();	
	
	//Scroll Menu
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>767 ){
			$('.navbar-default').addClass('navbar-fixed-top animated fadeInDown');
		} else {
			$('.navbar-default').removeClass('navbar-fixed-top');
		}
	});
			
	//Menu Scrolling
	$('.navbar-nav').onePageNav({
		currentClass: 'active',
		filter: ':not(.exclude)',
	});

	$('.navbar-collapse ul li a').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 79}, 1000);
		return false;
	});
	
		
	//Initiat WOW JS
	new WOW().init();
	
	//smoothScroll
	smoothScroll.init();
	
	// Active mixitup
	$("#portfolio_filter_action").mixitup({
		effects: ['fade','rotateZ'],
		easing: 'snap'
	});	
		
	//Countdown
	$('#statistics').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});
	
	//navbar-collapse
	$(document).ready(function () {
		$(".navbar-nav li a").click(function(event) {
		$(".navbar-collapse").collapse('hide');
		});
	});
		
	//Pretty Photo
	$("a[data-rel^='prettyPhoto']").prettyPhoto({
	  social_tools: false
	});

			
});


