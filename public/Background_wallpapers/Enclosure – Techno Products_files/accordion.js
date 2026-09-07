/*------------------------
Accordion
--------------------------*/
(function (jQuery) {
    "use strict";
    jQuery(document).ready(function () {
       
        jQuery('.mill-accordion .mill-accordion-block .mill-accordion-details').hide();
        jQuery('.mill-accordion .mill-accordion-block:first').addClass('mill-active').children().slideDown('slow');
        jQuery('.mill-accordion .mill-accordion-title').on("click", function () {
            let ele = jQuery(this).parent().hasClass('mill-active');
            jQuery('.mill-accordion .mill-accordion-block').removeClass('mill-active').children('div.mill-accordion-details').slideUp('slow');
            if (ele) {
                jQuery(this).parent().removeClass('mill-active');
            }else{
                jQuery(this).parent().addClass('mill-active').children('div.mill-accordion-details').slideDown('slow');
            }
        }); 
    });
})(jQuery);


