;
(function () {
	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		var items = document.querySelectorAll('[data-delivery-variants-item]'),
				triggers = document.querySelectorAll('[data-delivery-variants-item-trigger]'),
				input = document.querySelector('[data-delivery-variants-input]'),
				i;

		for (i =0; i < triggers.length; i++) {
			new Hammer(triggers[i]).on('tap', triggerHandler);
		}

		function triggerHandler(ev) {
			var parent = ev.target.closest('[data-delivery-variants-item]');

			hideAllItems();
			parent.classList.toggle('js-is-active');

			input.value = parent.getAttribute('data-value');
		}

		function hideAllItems() {
			for (i =0; i < items.length; i++) {
				items[i].classList.remove('js-is-active');
			}
		}
	}
})();
