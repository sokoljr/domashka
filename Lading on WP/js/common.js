$(document).ready(function() {

	$('#portfolio_grid').mixItUp(); //MixItUp

	$(".top_mnu ul a").mPageScroll2id(); //scroll on page

	$('.s_portfolio li').click(function() { //bottom active menu
		$('.s_portfolio li').removeClass('active');
		$(this).addClass('active');
	});
	
	$('.popup').magnificPopup({type:'image'});// popup with image and content
	$('.popup_content').magnificPopup({type:'inline', mouse:'click'});

	$('.section_header, .right .resume_item, .left .resume_item, .animation_2, .animation_3, .platform_icon ').animated('fadeInUp', 'fadeOutDown'); // content animation
	$('.animation_1').animated('flipInY', 'flipOutY');

	function heightDetect() {
		$('.main_head').css('height', $(window).height()) //all height function
	};
	heightDetect();

	$(window).resize(function() {
		heightDetect()
	});

	$("#head-title").typed({ //typed js
      	strings: ["Sokol Sergey", "Front-end developer", "Create websites^1000", " 24/7 in touch"],
      	typeSpeed: 80,
      	loop: true,
      	startDelay: 1000
    });

	$(".toggle_mnu").click(function() { //animation for sandvich
  		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() { //hide main menu
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").click(function() { //show main menu
		if($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		}
	});

	$('.portfolio_item').each(function(i) { //find item
		$(this).find('a').attr('href', "#work_" + i);
		$(this).find('.prod_descr').attr('id', 'work_' + i);
	});

	$(function () { $("input,select,textarea").jqBootstrapValidation(); } ); //validation
});

$(window).load(function() { //load with gif
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut(500);
});