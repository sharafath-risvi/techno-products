(function (jQuery) {
	"use strict";
	jQuery(document).ready(function () {
		// Multi slider 
		
		jQuery('.testimonial-slider.slider-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: false,
			arrows: false,
			focusOnSelect: true,
			responsive: [
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				},
			]
		});
		var slider = jQuery('.testimonial-slider.slider-for, .testimonial-sliders');

		if (slider.length) {
			var currentSlide;
			var slidesCount;

			var sliderCounter = document.createElement('div');
			sliderCounter.classList.add('slider__counter');
			var updateSliderCounter = function (slick, currentIndex) {

				currentSlide = slick.slickCurrentSlide() + 1;
				slidesCount = jQuery('.testimonial-slider.slider-for .slider__item,.testimonial-sliders .slider__item').length;
				jQuery(sliderCounter).html('<span>0' + currentSlide + ' /</span> 0' + slidesCount)
			};
			
			slider.on('init', function (event, slick) {
				slider.parent().find(".testimonial-arrow").prepend(sliderCounter);
				updateSliderCounter(slick);
			});

			slider.on('afterChange', function (event, slick, currentSlide) {
				updateSliderCounter(slick, currentSlide);
			});
			
			jQuery('.testimonial-sliders').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				fade: true,
				dots: false,
				focusOnSelect: true,
				appendArrows: '.testimonial-arrow'
			});
			jQuery('.testimonial-slider.slider-for').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				fade: true,
				dots: false,
				focusOnSelect: true,
				asNavFor: '.slider-nav',
				appendArrows: '.testimonial-arrow'
			});
			
		}

		


		
	});
})(jQuery);