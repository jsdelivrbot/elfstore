;
(function () {
	document.addEventListener('DOMContentLoaded', ready);

	function ready() {
		modalInit();
	}

	function modalInit() {
		var btns = document.querySelectorAll('[data-modal-trigger]'),
				overlay = document.querySelector('.modals__overlay'),
				hammerOverlay,
				hammerCloseBtn,
				i;

		for (i = 0; i < btns.length; i++) {
			new Hammer(btns[i]).on('tap', clickModalBtnsHandler);
		}

		function clickModalBtnsHandler(ev) {
			var id, target, closeBtn, i;

			if (ev.target.hasAttribute('data-modal-trigger')) {
				id = ev.target.getAttribute('data-modal-trigger');
			} else {
				id = ev.target.closest('[data-modal-trigger]').getAttribute('data-modal-trigger');
			}

			target = document.querySelector('[data-modal-target="' + id + '"]');
			closeBtn = document.querySelector('[data-modal-target="' + id + '"] [data-modal-close]');

			if (!hammerOverlay) {
				hammerOverlay = new Hammer(overlay).on('tap', clickCloseBtnHandler);
			}

			if (!hammerCloseBtn) {
				hammerCloseBtn = new Hammer(closeBtn).on('tap', clickCloseBtnHandler);
			}

			if (!target.classList.contains('js-is-open')) {
				target.classList.add('js-is-open');
			}

			if (!overlay.classList.contains('js-is-open')) {
				overlay.classList.add('js-is-open');
			}
			blockScroll();
			googleMapsInit();

			function clickCloseBtnHandler() {
				if (target.classList.contains('js-is-open')) {
					target.classList.remove('js-is-open');
				}
				if (overlay.classList.contains('js-is-open')) {
					overlay.classList.remove('js-is-open');
				}
				unblockScroll();
			}
		}

		function blockScroll() {
			var body = document.querySelector('body');

			if (isScrollDesktop()) {
				body.style.paddingRight = '17px';
			}
			body.style.overflow = 'hidden';
		}

		function unblockScroll() {
			var body = document.querySelector('body');

			body.style.overflow = 'auto';
			if (isScrollDesktop()) {
				body.style.paddingRight = '0px';
			}
		}

		function isScrollDesktop() {
			if (window.innerWidth !== document.documentElement.clientWidth) {
				return true;
			}

			return false;
		}
	}

	function googleMapsInit() {
		var targets, input, iconPath, mapStyles, markers, map, i, j;

		targets = document.querySelectorAll('[data-info-target]');
		triggers = document.querySelectorAll('[data-info-trigger]');
		input = document.querySelector('[data-delivery-variants-input]');
		iconPath = './images/icons/location.png';
		mapStyles = [{
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#d3d3d3"
			}]
		}, {
			"featureType": "transit",
			"stylers": [{
				"color": "#808080"
			}, {
				"visibility": "off"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#b3b3b3"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#ffffff"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry.fill",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#ffffff"
			}, {
				"weight": 1.8
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#d7d7d7"
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry.fill",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#ebebeb"
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry",
			"stylers": [{
				"color": "#a7a7a7"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#ffffff"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#ffffff"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry.fill",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#efefef"
			}]
		}, {
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#696969"
			}]
		}, {
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#737373"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "on"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [{
				"visibility": "on"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#d6d6d6"
			}]
		}, {
			"featureType": "road",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "on"
			}]
		}, {}, {
			"featureType": "poi",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#dadada"
			}]
		}];

		markers = [{
				title: 'Санкт-Петербург, Пушкинская, д.6',
				store: 'Самовывоз: Пункт выдачи 1',
				lat: 59.930178,
				lng: 30.357697,
			},
			{
				title: 'Санкт-Петербург, дом Культуры имени Кирова',
				store: 'Самовывоз: Пункт выдачи 2',
				lat: 59.933738,
				lng: 30.2544517,
			},
			{
				title: 'Санкт-Петербург, Московский проспект 145',
				store: 'Самовывоз: Пункт выдачи 3',
				lat: 59.8773317,
				lng: 30.3189278,
			}
		];

		map = new GMaps({
			el: '#googleMap',
			lat: markers[0].lat,
			lng: markers[0].lng,
			zoom: 11
		});

		map.addStyle({
			styledMapName: 'Styled Map',
			styles: mapStyles,
			mapTypeId: 'custom_style'
		});

		map.setStyle('custom_style');

		for (i = 0; i < markers.length; i++) {
			(function(i) {
				map.addMarker({
					lat: markers[i].lat,
					lng: markers[i].lng,
					title: markers[i].title,
					icon: iconPath,
					click: function (e) {
						if (input) {
							console.log('click', markers[i]);
							input.value = markers[i].store;
						}
						if (targets) {
							for (j = 0; j < targets.length; j++) {
								targets[j].classList.remove('js-is-active');
								triggers[j].classList.remove('js-is-active');
							}
							targets[i].classList.add('js-is-active');
							triggers[i].classList.add('js-is-active');
						}
					}
				});
			})(i);
		}
	}
})();
