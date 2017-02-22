;
(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		var options = {
			allowedTypes: 'png|jpg|jpeg|gif',
			animationSpeed: 250,
			preloadNext: true,
			enableKeyboard: true,
			quitOnEnd: false,
			quitOnImgClick: false,
			quitOnDocClick: true,
			onStart: overlayOn,
			onEnd: overlayOff,
			onLoadStart: activityIndicatorOn,
			onLoadEnd: activityIndicatorOff
		};

		$('[data-product-feedback-item]').imageLightbox(options);

		function overlayOn() {
			$('<div id="imagelightbox-overlay"></div>').appendTo('body');
		}

		function overlayOff() {
			$('#imagelightbox-overlay').remove();
		}

		function activityIndicatorOn() {
			$( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
		}

		function activityIndicatorOff() {
			$( '#imagelightbox-loading' ).remove();
		}
	}
})();
