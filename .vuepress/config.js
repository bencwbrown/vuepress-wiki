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
		nav: [
			{ text: 'Home', link: 'https://bencwbrown.co.uk/' },
			{ text: 'Google', link: 'https://google.com' },
		  ],
		
		// Assumes GitHub. Can also be a full GitLab url.
		repo: 'bencwbrown/vuepress-wiki',
    	// Customising the header label
    	// Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
		repoLabel: 'GitHub Repository',
	
		sidebar: [{
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
			'@vuepress/google-analytics',
			{
				'ga': '' // UA-00000000-0
			}
		],

		[
			'latex',
			{
				macros: {
					'\\Z': '\\mathbb{Z}',
					'\\mc': '\\mathcal{#1}',
					'\\PP': '\\mathbb{P}',
				},
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

		['@vuepress/last-updated',
		],

		['@vuepress/plugin-back-to-top',
			{ },
		],

	]
}