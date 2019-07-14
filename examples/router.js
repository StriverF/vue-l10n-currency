import Vue from 'vue'
import Router from 'vue-router'
import Demo from './views/Demo.vue'
import Doc from './views/Doc.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'demo',
      component: Demo
    },
    {
      path: '/doc',
      name: 'doc',
      component: Doc
    }
  ]
})
