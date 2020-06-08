import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueDisqus from '../vue-disqus'

Vue.use(VueDisqus, {
  shortname: 'ktquez'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
