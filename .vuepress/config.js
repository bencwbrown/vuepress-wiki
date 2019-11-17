module.exports = {
	title: 'Personal Wiki',
	description: 'My Personal Wiki',
	serviceWorker: true,
	head: [
		['link', { rel: 'icon', href: '/hero.png' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
	],
	themeConfig: {
		sidebar: [
			{
				title: 'Geometry',
				collapsable: true,
				sidebarDepth: 3,
				children: [
					'/geometry/algebraic',
					'/geometry/cohomology',
					'/geometry/complex',
					'/geometry/differential',
					'/geometry/git',
					'/geometry/symplectic',
					
				]
			},
			{
				title: 'Algebra',
				collapsable: true,
				sidebarDepth: 3,
				children: [
					'/algebra/category',
					'/algebra/commutative',
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
					'/misc/linux.md',
					'/misc/markdown.md',
					'/misc/server.md',
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
				},
			  },
		  ],
		  
		  [
			'vuepress-plugin-container',
			{
			  type: 'definition',
			  before: info => `<div class="definition"><p class="title">${info}</p>`,
			  after: '</div>',
			},
		  ],

		  [
			'vuepress-plugin-container',
			{
			  type: 'lemma',
			  before: info => `<div class="lemma"><p class="title">${info}</p>`,
			  after: '</div>',
			},
		  ],

		  ['@vuepress/search', {
			searchMaxSuggestions: 10
		  }],

		]
	}