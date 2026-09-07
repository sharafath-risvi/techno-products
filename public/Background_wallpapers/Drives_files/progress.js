(function (jQuery) {
    "use strict";
    jQuery(document).ready(function () {
        /*------------------------
        Progress Bar
        --------------------------*/
        jQuery('.mill-progress-bar > span').each(function() {
			var jQuerythis = jQuery(this);
			var width = jQuery(this).data('percent');
			jQuerythis.css({
				'transition': 'width 2s'
			});
			setTimeout(function() {
				jQuerythis.appear(function() {
					jQuerythis.css('width', width + '%');
				});
			}, 500);
		});
    });

})(jQuery);