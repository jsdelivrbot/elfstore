;
(function () {
	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		numberPickerInit();
		
		function numberPickerInit() {
			var components = document.querySelectorAll('[data-number-picker-component]'),
					inputs = [],
					btns = [],
					i, j;

				for (i = 0; i < components.length; i++) {
					inputs[i] = components[i].querySelector('[data-number-picker-component-input]');
					inputs[i].addEventListener('input', inputHandler);
					inputs[i].addEventListener('blur', blurHandler);

					btns[i] = components[i].querySelectorAll('[data-number-picker-component-btn]');
				}

				for (i = 0; i < btns.length; i++) {
					for (j = 0; j < btns[i].length; j++) {
						new Hammer(btns[i][j]).on('tap', clickHandler);
					}
				}

				function inputHandler(ev) {
					ev.target.value = ev.target.value.replace(/\D/ig, '');
				}

				function blurHandler(ev) {
					if (ev.target.value === '') {
						ev.target.value = 0;
					}
				}

				function clickHandler(ev) {
					var upClick = ev.target
						.hasAttribute('data-number-picker-component-btn-up') ||
						ev.target.closest('[data-number-picker-component-btn]')
						.hasAttribute('data-number-picker-component-btn-up');

					var downClick = ev.target
						.hasAttribute('data-number-picker-component-btn-down') || 
						ev.target.closest('[data-number-picker-component-btn]')
						.hasAttribute('data-number-picker-component-btn-down');

					var input = ev.target
						.closest('[data-number-picker-component]')
						.querySelector('[data-number-picker-component-input]');


					if (upClick) {
						input.value = +input.value + 1;
					}

					if (downClick) {
						if (+input.value > 0) {
							input.value = +input.value - 1;
						}
					}
				}
			}
		}
})();
