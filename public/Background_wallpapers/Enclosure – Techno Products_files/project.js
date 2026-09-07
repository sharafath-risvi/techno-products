(function (jQuery) {
    "use strict";

    jQuery(window).ready(function () {

        /*------------------------
        Masonry
        --------------------------*/

        if (jQuery('.iqonic-masonry-grid').length > 0) {

            jQuery('.iqonic-masonry-grid').each(function () {
                jQuery(".iqonic-masonry-block").imagesLoaded(function () {
                    jQuery(".iqonic-masonry-grid").masonry({
                        columnWidth: ".grid-sizer",
                        itemSelector: ".iqonic-masonry-item",
                        horizontalOrder: true
                    });
                });

            });
        }


    });





})(jQuery);
