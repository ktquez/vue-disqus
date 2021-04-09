import { createApp } from 'vue'
import App from './App.vue'
import Disqus from '../../src'

createApp(App)
  .use(Disqus, { shortname: 'vue-disqus-test' })
  .mount('#app')
