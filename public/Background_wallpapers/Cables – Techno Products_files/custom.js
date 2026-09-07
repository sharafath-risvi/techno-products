(function (jQuery) {
    "use strict";
    jQuery(document).ready(function () {
        jQuery('.owl-carousel.mill-post').each(function () {
            var jQuerycarousel = jQuery(this);
            jQuerycarousel.owlCarousel({
                items: 1,
                loop: true,
                nav: false,
                dots: true,
                autoplay: true,
                navText: ['<div class="mill-leftarrow"><div class="left-arrow tringle"></div><i class="fas fa-chevron-left"></i> </div>', '<div class="mill-rightarrow"><div class="right-arrow tringle"></div><i class="fas fa-chevron-right"></i></div>'],
                responsiveClass: true
            });
        });
		window.dispatchEvent(new Event('resize'));
        jQuery('.woocommerce .button').each((index,val) => {
            if(jQuery(val).find('span').length == 0){
                let html = jQuery(val).html();
                let newHtml = '<span class="text-btn">'+html+'</span>';
                jQuery(val).html(newHtml);
            }
        });
jQuery('.wishlist-items-wrapper .product-add-to-cart .add_to_cart_button').each((index,val) => {
    if(jQuery(val).find('span').length == 0){
        let html = jQuery(val).html();
        let newHtml = '<span class="text-btn">'+html+'</span>';
        jQuery(val).html(newHtml);
    }
});
    });
})(jQuery);