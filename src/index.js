import ScrollbarAutoHide from './ScrollbarAutoHide.vue'

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('scrollbar-auto-hide', ScrollbarAutoHide)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

ScrollbarAutoHide.install = install

export default ScrollbarAutoHide
