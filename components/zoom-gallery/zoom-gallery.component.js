;
(function () {
	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		var bg, firstStart = true;
		zoomGalleryInit();

		window.addEventListener('resize', resizeHandler);

		function resizeHandler() {
			getBackgroundImage()
				.then(function (bg) {
					zoomGalleryDestroy()
						.then(function() {
							zoomGalleryInit(bg);
						});
				});
		}

		function getBackgroundImage() {
			return new Promise(function (resolve) {
				var bg = $('.zoomWindow').css('background-image');

				if (bg) {
					resolve(bg);
				}
			});
		}

		function replaceBackgroundImage(bg) {
			if (bg) {
				$('.zoomWindow').css('background-image', bg);
			}
		}

		function zoomGalleryInit(bg) {
			$('#zoom-gallery-root').ezPlus({
				zoomType: 'inner',
				containLensZoom: true,
				gallery: 'zoom-gallery-thumbnails',
				cursor: 'crosshair',
				galleryActiveClass: 'active',
				borderSize: 2,
				borderColour: '#ffde13',
				galleryItem: 'span',
				zIndex: 10,
				responsive: true,
				onZoomedImageLoaded: function () {
					if (!firstStart) {
						replaceBackgroundImage(bg);
					}
					firstStart = false;
				}
			});
		}

		function zoomGalleryDestroy() {
			return new Promise(function (resolve) {
				var len = $('.zoomContainer').length,
						i;

				for (i = 0; i < len; i++) {
					$('.zoomContainer').remove();
				}
				if ($('.zoomContainer').length === 0) {
					resolve();
				}
			});
		}
	}
})();