const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  dest: '../../vuepress',
  locales: {
    '/': {
      lang: 'en-GB',
      title: 'Wiki',
      description: 'Personal wiki for my research'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: '@vuepress/vue',
  themeConfig: {
    repo: 'bencwbrown/vuepress-wiki',
    editLinks: true,
    docsDir: 'packages/docs/docs',
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./en'),
        sidebar: {
          '/geometry/': getGeometrySidebar('Algebraic', 'Complex', 'Symplectic', 'Differential'),
          '/algebra/': getAlgebraSidebar('Commutative', 'Non-Commutative', 'Representation Theory'),
          '/physics/': getPhysicsSidebar('Theme', 'Introduction'),
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: ''
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }],
    ['flowchart'],
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
  ]
})

function getGeometrySidebar (geometryAlgebraic, geometryComplex, geometrySymplectic, geometryDifferential) {
  return [
    {
      title: geometryAlgebraic,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'varieties',
        'schemes',
        'sheaves',
        'git'
      ]
    },
    {
      title: geometryComplex,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'vector-bundles'
      ]
    },
    {
      title: geometrySymplectic,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'moment-maps'
      ]
    },
    {
      title: geometryDifferential,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'connections'
      ]
    }
  ]
}

function getAlgebraSidebar (algebraCategory, algebraGroups, algebraCommutative, algebraNoncommutative, algebraRepresentation) {
  return [
    {
      title: algebraCategory,
      collapsable: false,
      sidebarDepth: 2,
      children: [
      ]
    },
    {
      title: algebraGroups,
      collapsable: false,
      sidebarDepth: 2,
      children: [
      ]
    },
    {
      title: algebraCommutative,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'algebras'
      ]
    },
    {
      title: algebraNoncommutative,
      collapsable: false,
      sidebarDepth: 2,
      children: [
      ]
    },
    {
      title: algebraRepresentation,
      collapsable: false,
      sidebarDepth: 2,
      children: [
      ]
    }
  ]
}

function getPhysicsSidebar (groupA, introductionA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
//        ['', introductionA]
      ]
    },
  ]
}
