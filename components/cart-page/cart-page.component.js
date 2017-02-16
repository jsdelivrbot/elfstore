;
(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		couponComponentInit();
		
		function couponComponentInit() {
			var couponCancelBtns = document.querySelectorAll('[data-coupon-component-btn]'),
					i;

				for (i = 0; i < couponCancelBtns.length; i++) {
					new Hammer(couponCancelBtns[i]).on('tap', clickCouponCancelHandler);
				}

				function clickCouponCancelHandler(ev) {
					var input = ev.target
						.closest('[data-coupon-component]')
						.querySelector('[data-coupon-component-input]');

					input.value = '';
				}
			}
		}
})();
