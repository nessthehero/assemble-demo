/*global window:false */
/*global $:false */

var ccfa = ccfa || {};

$(function () {

	'use strict';

	ccfa.main.init();

});

(function ($, Modernizr, window, document) {

	'use strict';

	ccfa.main = {

		$container: null,
		$toggleMobileNavBtn: null,
		$globalHeader: null,

		/**
		 * init
		 */
		init: function () {

			// mobile
			this.$toggleMobileNavBtn = $('#js-global-navigation-toggle-btn').on('click', $.proxy(this.toggleMobileNav, this));

			$('.unveil').unveil(100, function () {
				$(this).load(function () {
					$(this).addClass('unveiled');
				});
			});

			$('.go-back').on('click', function (event) {
				window.history.back();
			});

            $(document).on('click', $.proxy(this.closeOpenMenus, this));

		},

		unveilAgain: function () {
			$('.unveil').trigger('unveil');
		},

		toggleMobileNav: function (event) {

			if (this.$globalHeader === null) {
				this.$globalHeader = $('#js-global-header');
			}

			this.$globalHeader.toggleClass('is-open');

			return false;

		},

		closeOpenMenus: function (event) {

			if (this.$globalHeader === null) {
				this.$globalHeader = $('#js-global-header');
			}

			var length = $(event.target).closest(this.$globalHeader).length;
            var okToClose = length > 0 ? false : true;

			if (okToClose) {
				this.$globalHeader.removeClass('is-open');
			}

		}

	};

})(window.jQuery, window.Modernizr, window, window.document);
