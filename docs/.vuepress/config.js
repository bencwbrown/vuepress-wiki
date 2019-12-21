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
          '/topology/': getTopologySidebar('Algebraic Topology', 'Cohomology'),
          '/algebra/': getAlgebraSidebar('Category Theory', 'Group Theory', 'Homological Algebra', 'Representation Theory', 'Rings, Modules & Algebras'),
          '/physics/': getPhysicsSidebar('Gauge Theory', 'Quantisation', 'String Theory', 'Supersymmetry'),
          '/misc/': getMiscSidebar('Linux', 'Mathematics', 'Other'),
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
    ['vuepress-plugin-container', {
      type: 'definition',
      defaultTitle: 'Definition',
      before: info => `<div class="definition"><p class="title">${info}</p>`,
      after: '</div>',
    }],
    ['vuepress-plugin-container', {
      type: 'example',
      defaultTitle: 'Example',
      before: info => `<div class="example"><p class="title">${info}</p>`,
      after: '</div>',
    }],
    ['vuepress-plugin-container', {
      type: 'lemma',
      defaultTitle: 'Lemma',
      before: info => `<div class="lemma"><p class="title">${info}</p>`,
      after: '</div>',
    }],
    ['vuepress-plugin-container', {
      type: 'proposition',
      defaultTitle: 'Proposition',
      before: info => `<div class="proposition"><p class="title">${info}</p>`,
      after: '</div>',
    }],
    ['vuepress-plugin-container', {
      type: 'theorem',
      defaultTitle: 'Theorem',
      before: info => `<div class="theorem"><p class="title">${info}</p>`,
      after: '</div>',
    }],
    ['vuepress-plugin-container', {
      type: 'remark',
      defaultTitle: 'Remark',
      before: info => `<div class="remark"><p class="title">${info}</p>`,
      after: '</div>',
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
  ],

  extendMarkdown: md => {
    md.set({ breaks: true })
    md.use(require('markdown-it-container'), 'spoiler', {

      validate: function(params) {
        return params.trim().match(/^spoiler\s+(.*)$/);
      },
    
      render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
    
        if (tokens[idx].nesting === 1) {
          // opening tag
          return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
    
        } else {
          // closing tag
          return '</details>\n';
        }
      }
    });
    
  }
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
        './complex/higgs-bundles',
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

function getTopologySidebar(groupA, groupB) {
  return [{
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        './algebraic/k-theory'
      ]
    },
    {
    title: groupB,
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
        'categories/cats-funs.md',
        'categories/structures.md',
        'categories/add-ab.md'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'groups/actions',
        'groups/lie'
      ]
    },
    {
      title: groupC,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'homological/test',
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
        'rings-mod-alg/fundamentals',
        'rings-mod-alg/modules-structure',
        'rings-mod-alg/ext-tor'
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
        'supersymmetry/superalgebras',
        'supersymmetry/g-star-modules'
      ]
    },
  ]
}

function getMiscSidebar(groupA, groupB, groupC) {
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
    {
        title: groupC,
        collapsable: false,
        sidebarDepth: 2,
        children: [
          'other/media-bias',
          'other/lists',
    ]},
 ]
}