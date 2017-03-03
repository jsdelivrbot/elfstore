;
(function () {
	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		backHistoryButtonActivate();
	}

	function backHistoryButtonActivate() {
		var btns = document.querySelectorAll('[data-button-prev]'),
				i;
		
		for (i = 0; i < btns.length; i++) {
			new Hammer(btns[i]).on('tap', clickHandler);
		}

		function clickHandler(ev) {
			history.back();
		}
	}
})();
