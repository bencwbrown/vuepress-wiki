const {
  fs,
  path
} = require('@vuepress/shared-utils')

module.exports = ctx => ({
  dest: '../html',
  locales: {
    '/': {
      lang: 'en-GB',
      title: 'Wiki',
      description: 'Personal wiki for my research'
    },
  },

  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.png`
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
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
    ['link', {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#3eaf7c'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/icons/msapplication-icon-144x144.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
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
          '/geometry/': getGeometrySidebar('Algebraic Geometry', 'Complex Geometry', 'Symplectic Geometry', 'Differential Geometry'),
          '/topology/': getTopologySidebar('Cohomology'),
          '/algebra/': getAlgebraSidebar('Algebras', 'Category Theory', 'Group Theory', 'Representation Theory', 'Rings'),
          '/physics/': getPhysicsSidebar('Gauge Theory', 'Quantisation', 'String Theory', 'Supersymmetry'),
          '/miscellaneous/': getMiscSidebar('Linux', 'Mathematics'),
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
    ['tabs'],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-120544103-2',
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

//    ['@vuepress/last-updated', {
//      transformer: timestamp => timestamp || new Date(),
//    }],

    ['flowchart'],

    ['latex', {
      macros: {

      }
    }],
  ],

  extraWatchFiles: [
    '.vuepress/nav/en.js',
  ]
})

function getGeometrySidebar(groupA, groupB, groupC, groupD) {
  return [{
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        './algebraic/varieties',
        './algebraic/schemes',
        './algebraic/sheaves',
        './algebraic/git',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        './complex/toric',
        './complex/vector-bundles',
      ]
    },
    {
      title: groupC,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        './symplectic/moment-maps',
      ]
    },
    {
      title: groupD,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        './differential/connections'
      ]
    }
  ]
}

function getTopologySidebar(groupA) {
  return [{
    title: groupA,
    collapsable: false,
    sidebarDepth: 2,
    children: [
      './cohomology/equivariant'
    ]
  }]
}

function getAlgebraSidebar(groupA, groupB, groupC, groupD, groupE) {
  return [{
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'algebras/algebras',
        'algebras/weil'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'categories/categories'
      ]
    },
    {
      title: groupC,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'groups/actions',
        'groups/lie'
      ]
    },
    {
      title: groupD,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'representation/representation',
      ]
    },
    {
      title: groupE,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'rings/rings',
      ]
    }
  ]
}

function getPhysicsSidebar(groupA, groupB, groupC, groupD) {
  return [{
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'gauge/gauge',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'quantisation/deformation',
        'quantisation/geometric'
      ]
    },
    {
      title: groupC,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'string/string'
      ]
    },
    {
      title: groupD,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'supersymmetry/intro'
      ]
    },
  ]
}

function getMiscSidebar(groupA, groupB) {
  return [{
    title: groupA,
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'computing/linux'
    ]},
    {
      title: groupB,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'maths/workshop-list',
      ]},
 ]
}