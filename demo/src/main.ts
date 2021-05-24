import { createApp } from 'vue'
import App from './App.vue'
import VueDisqus from '../../src'

createApp(App)
  .use(VueDisqus, { shortname: 'ktquez-dev-test' })
  .mount('#app')
