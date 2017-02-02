;
(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		var menuBtn = document.querySelector('#menuBtn'),
				menuIcon = document.querySelector('#menuBtnIcon'),
				menuContent = document.querySelector('#menuContent'),
				menuOverlay = document.querySelector('#menuOverlay'),
				hammerMenuBtn = new Hammer(menuBtn),
				hammerMenuOverlay = new Hammer(menuOverlay),
				click = 0;

		hammerMenuBtn.on('tap', clickMenuBtnHandler);
		hammerMenuOverlay.on('tap panleft', clickMenuOverlayHandler);

		function clickMenuBtnHandler() {
			click++;

			if (click % 2) {
				menuIcon.style.color = '#181818';
				menuContent.style.transform = 'translateX(0px)';
				menuOverlay.style.display = 'block';
			} else {
				menuIcon.style.color = '#fff';
				menuContent.style.transform = 'translateX(-200px)';
				menuOverlay.style.display = 'none';
			}
		}

		function clickMenuOverlayHandler() {
			click = 0;
			menuIcon.style.color = '#fff';
			menuContent.style.transform = 'translateX(-200px)';
			menuOverlay.style.display = 'none';
		}
	};
})();
