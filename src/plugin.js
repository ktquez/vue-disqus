import Disqus from './Disqus.vue'
import DisqusCount from './DisqusCount.vue'

export default function install (Vue, options = {}) {
  Vue.component('Disqus', Disqus)
  Vue.component('DisqusCount', DisqusCount)

  Vue.prototype.$disqus = {
    shortname: options.shortname || null
  }
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
