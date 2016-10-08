$(document).ready(function() {

	$('#portfolio_grid').mixItUp();
	$(".top_mnu ul a").mPageScroll2id();

	$('.s_portfolio li').click(function() {
		$('.s_portfolio li').removeClass('active');
		$(this).addClass('active');
	});
	
	$('.popup').magnificPopup({type:'image'});
	$('.popup_content').magnificPopup({type:'inline', mouse:'click'});

	$('.section_header').animated('fadeInUp', 'fadeOutDown');
	$('.animation_1').animated('flipInY', 'flipOutY');
	$('.animation_2').animated('fadeInLeft', 'fadeOutDown');
	$('.animation_3').animated('fadeInRight', 'fadeOutDown');

	$('.left .resume_item').animated('fadeInLeft', 'fadeOutDown');
	$('.right .resume_item').animated('fadeInRight', 'fadeOutDown');

	function heightDetect() {
		$('.main_head').css('height', $(window).height()) //чтоб занимал всю высоту
	};
	heightDetect();

	$(window).resize(function() { //под ширину высоту браузера bg
		heightDetect()
	});

	$("#head-title").typed({
      	strings: ["Sokol Sergey", "Front-end developer", "Create websites^1000", " 24/7 in touch"],
      	typeSpeed: 80,
      	loop: true,
      	startDelay: 1000
    });

	$(".toggle_mnu").click(function() { //для сендвича анимация
  		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() { //клик по ссылке и меню исчезает
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").click(function() { //появление меню затемненного
		if($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");//выезжает меню
		} else {
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		}
	});

	$('.portfolio_item').each(function(i) {
		$(this).find('a').attr('href', "#work_" + i);
		$(this).find('.prod_descr').attr('id', 'work_' + i);
	});

	$(function () { $("input,select,textarea").jqBootstrapValidation(); } );
});

$(window).load(function() { //загрузка медленная
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});