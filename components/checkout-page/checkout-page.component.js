;
(function () {
	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		itemsInit();
		itemsInfoInit();
	}

	function itemsInit() {
		var items = document.querySelectorAll('[data-delivery-variants-item]'),
				triggers = document.querySelectorAll('[data-delivery-variants-item-trigger]'),
				input = document.querySelector('[data-delivery-variants-input]'),
				i;

		for (i = 0; i < triggers.length; i++) {
			new Hammer(triggers[i]).on('tap', triggerHandler);
		}

		function triggerHandler(ev) {
			var parent = ev.target.closest('[data-delivery-variants-item]'),
					infoTargets = document.querySelectorAll('[data-info-target]')

			hideAllItems(items);
			hideAllItems(infoTargets);
			parent.classList.toggle('js-is-active');
			infoTargets[0].classList.add('js-is-active');
			input.value = parent.getAttribute('data-value');
		}

		function hideAllItems(items) {
			for (i = 0; i < items.length; i++) {
				items[i].classList.remove('js-is-active');
			}
		}
	}

	function itemsInfoInit() {
		var triggers = document.querySelectorAll('[data-info-trigger]'),
				targets = document.querySelectorAll('[data-info-target]'),
				i;

		for (i = 0; i < triggers.length; i++) {
			new Hammer(triggers[i]).on('tap', triggerHandler);
		}

		function triggerHandler(ev) {
			var input = document.querySelector('[data-delivery-variants-input]'),
					targetIdx,
					i;

			if (ev.target.hasAttribute('data-info-trigger')) {
				targetIdx = ev.target.getAttribute('data-info-trigger');
				setActiveStyleForTrigger(ev.target);
			} else {
				targetIdx = ev.target.closest('[data-info-trigger]')
					.getAttribute('data-info-trigger');
					setActiveStyleForTrigger(ev.target.closest('[data-info-trigger]'));
			}

			for (i = 0; i < targets.length; i++) {
				targets[i].classList.remove('js-is-active');
			}

			for (i = 0; i < targets.length; i++) {
				if (targets[i].getAttribute('data-info-target') === targetIdx) {
					input.value = targets[i].getAttribute('data-info-target-locations');
					targets[i].classList.add('js-is-active');
				}
			}

			function setActiveStyleForTrigger(el) {
				for (i = 0; i < triggers.length; i++) {
					if (triggers[i].classList.contains('js-is-active')) {
						triggers[i].classList.remove('js-is-active');
					}
				}
				el.classList.add('js-is-active');
			}
		}
	}
})();
