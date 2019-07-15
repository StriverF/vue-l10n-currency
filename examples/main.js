import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueL10nCurrency from '../src'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'


Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
Vue.use(VueL10nCurrency)
const l10nCurrency = new VueL10nCurrency({})
Vue.config.productionTip = false

new Vue({
  l10nCurrency,
  router,
  render: h => h(App)
}).$mount('#app')
