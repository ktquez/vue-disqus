import { App } from 'vue'
import { DISQUS_CONFIG_KEY } from './constants'
import { VueDisqusOptions, VueDisqusInstance } from './types';
import Disqus from './Disqus.vue'
import DisqusCount from './DisqusCount.vue'

export default function install (app: App, options: VueDisqusOptions = {}) {
  app.component('Disqus', Disqus)
  app.component('DisqusCount', DisqusCount)

  const disqusConfig: VueDisqusInstance = {
    shortname: options.shortname,
    reset: null
  }

  app.provide(DISQUS_CONFIG_KEY, disqusConfig)
}
