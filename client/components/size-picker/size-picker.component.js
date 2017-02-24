;
(function () {
	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		sizePickerInit();

		function sizePickerInit() {
			var components = document.querySelectorAll('[data-size-picker-component]'),
					btns = [],
					i, j;

			for (i = 0; i < components.length; i++) {
				btns[i] = components[i].querySelectorAll('[data-size-picker-component-btn]');
			}

			for (i = 0; i < components.length; i++) {
				for (j = 0; j < btns[i].length; j++) {
					new Hammer(btns[i][j]).on('tap', btnHandler);
				}
			}

			function btnHandler(ev) {
				var parent = ev.target.closest('[data-size-picker-component]');

				parent
					.querySelector('[data-size-picker-component-input]')
					.value = ev.target.getAttribute('data-size-picker-component-value');

				setActiveClass(parent, ev.target);
			}

			function setActiveClass(parent, el) {
				var btns = parent.querySelectorAll('[data-size-picker-component-btn]'),
						i;

				for (i = 0; i < btns.length; i++) {
					if (btns[i].classList.contains('js-is-active')) {
						btns[i].classList.remove('js-is-active');
					}
				}

				el.classList.add('js-is-active');
			}
		}
	}
})();
