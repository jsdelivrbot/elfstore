;
(function() {
'use strict';

	document.addEventListener('DOMContentLoaded', ready)

	function ready() {
		var toggle = new Hammer(document.querySelector('#aside-toggle'));
		var aside = document.querySelector('#aside');

		toggle.on('tap', toggleHandler);

		function toggleHandler() {
			aside.classList.toggle('js-is-mobile--hide');
			aside.classList.toggle('js-is-mobile--show');
		}
	}
})();