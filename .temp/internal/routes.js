/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "/home/ben/Repositories/vuepress-wiki/node_modules/@vuepress/core/lib/client/components/GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-f236b05e",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f236b05e").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-00212e1f",
    path: "/algebra/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-00212e1f").then(next)
    },
  },
  {
    path: "/algebra/index.html",
    redirect: "/algebra/"
  },
  {
    name: "v-693053ca",
    path: "/algebra/commutative.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-693053ca").then(next)
    },
  },
  {
    name: "v-c308dce8",
    path: "/algebra/category.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c308dce8").then(next)
    },
  },
  {
    name: "v-a9d49d2c",
    path: "/algebra/group.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a9d49d2c").then(next)
    },
  },
  {
    name: "v-78de648a",
    path: "/algebra/lie.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-78de648a").then(next)
    },
  },
  {
    name: "v-4c565c2e",
    path: "/algebra/noncommutative.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4c565c2e").then(next)
    },
  },
  {
    name: "v-649598ae",
    path: "/algebra/representation.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-649598ae").then(next)
    },
  },
  {
    name: "v-0c810501",
    path: "/geometry/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0c810501").then(next)
    },
  },
  {
    path: "/geometry/index.html",
    redirect: "/geometry/"
  },
  {
    name: "v-35a683a6",
    path: "/geometry/algebraic/algebraic.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-35a683a6").then(next)
    },
  },
  {
    name: "v-dee9eef4",
    path: "/geometry/algebraic/git.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-dee9eef4").then(next)
    },
  },
  {
    name: "v-222ae564",
    path: "/geometry/algebraic/schemes.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-222ae564").then(next)
    },
  },
  {
    name: "v-52093884",
    path: "/geometry/algebraic/sheaves.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-52093884").then(next)
    },
  },
  {
    name: "v-1228cf5e",
    path: "/geometry/algebraic/varieties.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1228cf5e").then(next)
    },
  },
  {
    name: "v-6d42f6ec",
    path: "/geometry/complex/toric.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6d42f6ec").then(next)
    },
  },
  {
    name: "v-71ced54a",
    path: "/geometry/complex/vector-bundles.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-71ced54a").then(next)
    },
  },
  {
    name: "v-a7f50cac",
    path: "/geometry/differential/connections.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a7f50cac").then(next)
    },
  },
  {
    name: "v-0221ba6c",
    path: "/geometry/symplectic/moment-maps.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0221ba6c").then(next)
    },
  },
  {
    name: "v-1b49ce50",
    path: "/home.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1b49ce50").then(next)
    },
  },
  {
    name: "v-c766915a",
    path: "/miscellaneous/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c766915a").then(next)
    },
  },
  {
    path: "/miscellaneous/index.html",
    redirect: "/miscellaneous/"
  },
  {
    name: "v-1e91586c",
    path: "/miscellaneous/linux.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1e91586c").then(next)
    },
  },
  {
    name: "v-441946ea",
    path: "/miscellaneous/manuals.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-441946ea").then(next)
    },
  },
  {
    name: "v-f3cfeab4",
    path: "/miscellaneous/manuals/pypdfocr.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f3cfeab4").then(next)
    },
  },
  {
    name: "v-a9b8d84c",
    path: "/miscellaneous/vuepress.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a9b8d84c").then(next)
    },
  },
  {
    name: "v-6e194161",
    path: "/physics/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6e194161").then(next)
    },
  },
  {
    path: "/physics/index.html",
    redirect: "/physics/"
  },
  {
    name: "v-404fef6c",
    path: "/physics/gauge.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-404fef6c").then(next)
    },
  },
  {
    name: "v-1aa2af14",
    path: "/physics/quantisation.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1aa2af14").then(next)
    },
  },
  {
    name: "v-2c420cb8",
    path: "/physics/string.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2c420cb8").then(next)
    },
  },
  {
    name: "v-1138a58a",
    path: "/physics/supersymmetry.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1138a58a").then(next)
    },
  },
  {
    name: "v-06cc6421",
    path: "/topology/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-06cc6421").then(next)
    },
  },
  {
    path: "/topology/index.html",
    redirect: "/topology/"
  },
  {
    name: "v-5e21026a",
    path: "/topology/cohomology/equivariant.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5e21026a").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]