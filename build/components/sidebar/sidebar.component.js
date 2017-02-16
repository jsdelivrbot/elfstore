;
(function() {
'use strict';

	document.addEventListener('DOMContentLoaded', ready)

	function ready() {
		var target = document.querySelector('#aside-toggle');

		if (target) {
			var toggle = new Hammer(target);
			var aside = document.querySelector('#aside');

			toggle.on('tap', toggleHandler);

			function toggleHandler() {
				aside.classList.toggle('js-is-mobile--hide');
				aside.classList.toggle('js-is-mobile--show');
			}
		}
	}
})();