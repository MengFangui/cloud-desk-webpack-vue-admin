import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import plugin from '@/libs/index.js'

Vue.config.productionTip = false
// 安装插件
Vue.use(plugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
