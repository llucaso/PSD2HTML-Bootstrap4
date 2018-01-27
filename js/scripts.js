$(function() {

$(window).scroll(function() {
  	if($(document).scrollTop() > 50) {
    	$('#nav').addClass('shrink');
    }
    else {
    $('#nav').removeClass('shrink');
    }
  });




	$('body').scrollspy({ target: '#navigation-bar' });

	$('#designControls').on('slid.bs.carousel', function() {
			var currentSlideName = $('#design-id');
			var activeSlideNumber = $('div.active').data('number');
			currentSlideName.text(activeSlideNumber);
	});

});