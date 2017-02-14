;
(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		var root = $('[data-slider-root]'),
				slider = root.find('[data-slider]'),
				prevBtn = root.find('[data-slider-btn-prev]'),
				nextBtn = root.find('[data-slider-btn-next]'),
				counter = root.find('[data-slider-counter]'),
				sliderLength = root.find('[data-slider-length]'),
				i;

			slider.slick({
				infinite: true,
				speed: 300,
				autoplay: true,
				autoplaySpeed: 3000,
				arrows: false
			});

			setCurrentIndex();
			setSlideritemsLength();

			prevBtn.on('click', clickPrevBtnHandler);
			nextBtn.on('click', clickNextBtnHandler);
			slider.on('afterChange', afterChangeHandler);

			function afterChangeHandler() {
				setCurrentIndex();
			}

			function clickPrevBtnHandler() {
				slider.slick('slickPrev');
			}

			function clickNextBtnHandler() {
				slider.slick('slickNext');
			}

			function setCurrentIndex() {
				var count = +slider.slick('slickCurrentSlide') + 1;

				if (count < 10) {
					count = '0' + count;
				}
				counter.text(count);
			}

			function setSlideritemsLength() {
				var items = $('[data-slider-item]');

				if (items.length) {
					sliderLength.text(Math.abs(items.length - 2));
				}
			}
		}
})();
