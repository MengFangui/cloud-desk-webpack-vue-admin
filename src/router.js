import Vue from 'vue'
import Router from 'vue-router'
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
      component: normalization
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
