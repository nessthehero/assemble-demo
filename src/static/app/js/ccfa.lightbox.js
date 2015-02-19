/*global window:false */
/*global $:false */

var ccfa = ccfa || {};

$(function () {

	'use strict';

	ccfa.lightbox.init();

});

(function ($, Modernizr, window, document) {

	'use strict';

	ccfa.lightbox = {

		$videos: $('a.video'),
		$boxes: $('a.lightbox'),

		/**
		 * init
		 */
		init: function () {

			this.$videos.magnificPopup({
				type: 'iframe'
			});

			this.$boxes.magnificPopup({
				type: 'image'
			});

		}

	};

})(window.jQuery, window.Modernizr, window, window.document);
