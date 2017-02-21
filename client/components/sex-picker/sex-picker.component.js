;
(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		sexPickerInit();

		function sexPickerInit() {
			var components = document.querySelectorAll('[data-sex-picker-component]'),
					btns = [],
					i, j;

			for (i = 0; i < components.length; i++) {
				btns[i] = components[i].querySelectorAll('[data-sex-picker-component-btn]');
			}

			for (i = 0; i < components.length; i++) {
				for (j = 0; j < btns[i].length; j++) {
					new Hammer(btns[i][j]).on('tap', btnHandler);
				}
			}

			function btnHandler(ev) {
				var parent = ev.target.closest('[data-sex-picker-component]');

				parent
					.querySelector('[data-sex-picker-component-input]')
					.value = ev.target.getAttribute('data-sex-picker-component-value');

				
				setActiveClass(parent, ev.target);
			}

			function setActiveClass(parent, el) {
				var btns = parent.querySelectorAll('[data-sex-picker-component-btn]'),
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
