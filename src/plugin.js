import VueDisqus from "./VueDisqus.vue"

export default function install (Vue) {
  Vue.component('VueDisqus', VueDisqus)
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
