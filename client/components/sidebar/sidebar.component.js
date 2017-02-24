;
(function() {
	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		var target = document.querySelector('#aside-toggle');

		if (target) {
			var aside = document.querySelector('#aside');
			target.addEventListener('click', toggleHandler)

			function toggleHandler() {
				aside.classList.toggle('js-is-mobile--hide');
				aside.classList.toggle('js-is-mobile--show');
			}
		}
	}
})();
