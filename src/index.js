import VueDisqus from "./vue-disqus"

export default function install (Vue) {
  Vue.component('VueDisqus', VueDisqus)
}

// auto install
if (typeof Vue !== 'undefined') {
  Vue.use(install)
}