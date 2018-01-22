$(function() {
	// var numberOfActiveSlide = $('.active').data('number');


	




	// function numberChanger() {
	// 	var numberOfActiveSlide = $('.active').data('number');
	// 	$('.activeNumber').text(numberOfActiveSlide);

	// };

$('#designControls').on('slid.bs.carousel', function() {
		var currentSlideName = $('#design-id');
		var activeSlideNumber = $('div.active').data('number');
		currentSlideName.text(activeSlideNumber);
	});

});