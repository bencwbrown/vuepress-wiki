import Vue from 'vue'
Vue.component("Bit", () => import("/home/ben/Repositories/vuepress-wiki/docs/.vuepress/components/Bit"))
Vue.component("UpgradePath", () => import("/home/ben/Repositories/vuepress-wiki/docs/.vuepress/components/UpgradePath"))
Vue.component("demo-1", () => import("/home/ben/Repositories/vuepress-wiki/docs/.vuepress/components/demo-1"))
Vue.component("OtherComponent", () => import("/home/ben/Repositories/vuepress-wiki/docs/.vuepress/components/OtherComponent"))
Vue.component("diagram-markdown-slot-relationship", () => import("/home/ben/Repositories/vuepress-wiki/docs/.vuepress/components/diagram-markdown-slot-relationship"))
Vue.component("svg-container", () => import("/home/ben/Repositories/vuepress-wiki/docs/.vuepress/components/svg-container"))
Vue.component("Foo-Bar", () => import("/home/ben/Repositories/vuepress-wiki/docs/.vuepress/components/Foo/Bar"))

Vue.component("Badge", () => import("/home/ben/Repositories/vuepress-wiki/node_modules/@vuepress/theme-default/global-components/Badge"))


export default {}