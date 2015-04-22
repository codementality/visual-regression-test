module.exports = {
	host: 'https://www.7digital.local:3000',
	selector: 'body',
	viewports: {
		'smartphone-portrait': [320, 480],
		'smartphone-landscape': [480, 320],
		'tablet-portrait': [768, 1024],
		'tablet-landscape': [1024, 768],
		'desktop-standard': [1280, 1024]
	},
	pages: {
		'home': {
			path: '/'
		},
		'artist': {
			path: '/artist/keane'
		},
		'release': {
			path: '/artist/keane/release/perfect-symmetry-1'
		},
		'charts': {
			path: '/charts'
		},
		'search': {
			path: '/search?q=three-pages-of-results'
		},
		'search-release': {
			path: '/search/release?q=three-pages-of-results'
		},
		'search-artist': {
			path: '/search/artist?q=three-pages-of-results'
		},
		'search-track': {
			path: '/search/track?q=three-pages-of-results'
		},
		'genres': {
			path: '/genre'
		},
		'genre': {
			path: '/genre/pop'
		},
		'feature-interview': {
			path: '/features/VFuGfygAACcA-uY6/honeyblood'
		},
		'feature-best-of': {
			path: '/features/VFOr4ygAACcA6zaV/best-of-2014'
		},
		'feature-product-list': {
			path: '/features/VFNrPigAACcA6rd4/new-tracks'
		},
		'feature-ones-to-watch': {
			path: '/features/VJLvkigAACkA24Z2/ones-to-watch-2015'
		},
		'feature-awards-prize': {
			path: '/features/VRq9kCkAAA2fUChH/label-focus',
			'headers': {
				'x-7d-prismic-ref': 'VS0WZScAADkA1F2_'
			}
		},
		'feature-awards-award': {
			path: '/features/VOMHUyYAAPWHdX_G/brits-music-award'
		},
		'basket': {
			path: '/search?q=keane',
			cookies: [{
				name: 'SevenDigital.Web.Session',
				value: 'sid2=basket-with-two-items'
			}],
			setup: function showBasket(casper) {
				casper.thenClick('.header-basket-link');
				casper.waitForSelector('.notification.basket.is-visible');
			}
		}
	}
};