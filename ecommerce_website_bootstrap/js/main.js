$(document).ready(function(){
	$('#slick_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		focusOnSelect: true,
		prevArrow: $(".second_slider_container .second_slider_controls.left"),
		nextArrow: $(".second_slider_container .second_slider_controls.right"),
	});
	$(".second_slider_container .second_slider_controls")

	$( function() {
    	$( ".accordion" ).accordion ({
    	heightStyle: "content",
    	active: 2,
      	collapsible: true,
      	event: "mouseover"
    	});
  	});
});