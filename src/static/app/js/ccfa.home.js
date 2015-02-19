/*global window:false */
/*global Instafeed:false */
/*global $:false */

var ccfa = ccfa || {};

$(function () {

	'use strict';

	ccfa.home.init();

});

(function ($, Modernizr, window, document) {

	'use strict';

	ccfa.home = {

		$instafeed: null,
		clientID: '9433ce3d5ef441fa9cba667f4952f0d4',
		hashtag: 'IBDselfie',
		//hashtag: 'pug',

		/***
			* init
			*/
		init: function () {

			this.$instafeed = new Instafeed({
				clientId: this.clientID,
				get: 'tagged',
				limit: 6,
				resolution: 'low_resolution',
				tagName: this.hashtag,
				target: 'js-instafeed',
				template: '<div class="gallery-image"><a href="{{link}}" target="_blank" title="{{caption}}"><img src="/img/placeholder-instafeed.gif" data-src="{{image}}" alt="{{caption}}" class="instafeed unveil" /></a></div>',
				after: function () {
					$('#js-instafeed-loader').remove();
					$('#js-instafeed .unveil').unveil(100, function () {
						$(this).load(function () {
							$(this).addClass('unveiled');
						});
					});
				},
				error: function (errorMsg) {
					$('#js-instafeed-loader').remove();
					$('#js-instafeed').html('<p>' + errorMsg + '.</p>');
				}
			});

			this.$instafeed.run();

		}

	};

})(window.jQuery, window.Modernizr, window, window.document);