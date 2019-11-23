module.exports = {
	title: 'Personal Wiki',
	description: 'My Personal Wiki',
	serviceWorker: true,
	head: [
		['link', {
			rel: 'icon',
			href: '/hero.png'
		}],
		['meta', {
			name: 'apple-mobile-web-app-capable',
			content: 'yes'
		}],
		['meta', {
			name: 'apple-mobile-web-app-status-bar-style',
			content: 'black'
		}],
		['link', {
			rel: 'apple-touch-icon',
			href: `/icons/apple-touch-icon-152x152.png`
		}],
	],
	themeConfig: {
		smoothScroll: true,
		nav: [{
				text: 'Home',
				link: 'https://bencwbrown.co.uk/'
			},
			{
				text: 'Google',
				link: 'https://google.com'
			},
		],
		// Assumes GitHub. Can also be a full GitLab url.
		repo: 'bencwbrown/vuepress-wiki',
		// Customising the header label
		// Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
		repoLabel: 'GitHub Repository',

		sidebar: [{
				title: 'Algebraic Geometry',
				collapsable: true,
				sidebarDepth: 3,
				children: [
					'/algebraic-geometry/varieties',
					'/algebraic-geometry/schemes',
					'/algebraic-geometry/cohomology',
					'/algebraic-geometry/git',
				]
			},
			{
				title: 'Complex, Differential & Symplectic Geometry',
				collapsable: true,
				sidebarDepth: 3,
				children: [
					'/other-geometry/complex',
					'/other-geometry/differential',
					'/other-geometry/symplectic',
				]
			},
			{
				title: 'Algebra',
				collapsable: true,
				sidebarDepth: 3,
				children: [
					'/algebra/category',
					'/algebra/commutative',
					'/algebra/group',
					'/algebra/lie',
					'/algebra/noncommutative',
					'/algebra/representation',
				]
			},
			{
				title: 'Mathematical Physics',
				collapsable: true,
				sidebarDepth: 3,
				children: [
					'/physics/gauge',
					'/physics/quantisation',
					'/physics/string',
					'/physics/supersymmetry',
				]
			},
			{
				title: 'Miscellaneous',
				collapsable: true,
				sidebarDepth: 3,
				children: [
					'/misc/translations/translations.md',
					'/misc/programming/linux.md',
				]
			},
		]
	},


	plugins: [
		[
			'latex',
			{
				macros: {
					'\\Z': '\\mathbb{Z}',
					'\\mc': '\\mathcal{#1}',
				},
			},
		],

		[
			'vuepress-plugin-container',
			{
				type: 'right',
				defaultTitle: '',
			},
		],
		[
			'vuepress-plugin-container',
			{
				type: 'theorem',
				before: info => `<div class="theorem"><p class="title">${info}</p>`,
				after: '</div>',
			},
		],

		// this is how VuePress Default Theme use this plugin
		[
			'vuepress-plugin-container',
			{
				type: 'tip',
				defaultTitle: {
					'/': 'TIP',
					'/zh/': '提示',
				},
			},
		],

		['@vuepress/search', {
			searchMaxSuggestions: 10
		}],

		['@vuepress/last-updated'],

		['vuepress-plugin-smooth-scroll'],

		[
			'vuepress-plugin-clean-urls',
			{
				normalSuffix: '/',
				indexSuffix: '/',
				notFoundPath: '/404.html',
			},
		],

	]
}