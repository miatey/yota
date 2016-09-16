$(document).ready(function() {

	$('.btn-nav').on('click', function(){
			var menu = $('.header__nav');
			menu.toggleClass('open-nav')
		});

	$('.js-slick').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
	});

});
