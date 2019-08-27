import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import normalization from './views/data-import/normalization'
import special from './views/data-import/special'
import templateaudit from './views/data-import/template-audit'
import tradingpath from './views/data-import/trading-path'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About
    },
    {
      path: '/normalization',
      name: 'normalization',
      component: normalization
    },
    {
      path: '/special',
      name: 'special',
      component: special
    },
    {
      path: '/templateaudit',
      name: 'templateaudit',
      component: templateaudit
    },
    {
      path: '/tradingpath',
      name: 'tradingpath',
      component: tradingpath
    }
  ]
})
