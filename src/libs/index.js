import { subscribe, publish, cancel } from './event'
import { format2Date, format2Time } from './date'
import lodash from 'lodash'
import axios from './ajax'

let plugin = {
  install: (Vue, option) => {
    // 组件间通信
    Vue.prototype.$subscribe = subscribe
    Vue.prototype.$publish = publish
    Vue.prototype.$cancel = cancel

    // 注册全局过滤器
    Vue.filter('toDate', format2Date)
    Vue.filter('toTime', format2Time)

    // 函数式编程
    Vue.prototype.$lodash = lodash
    // ajax
    Vue.prototype.$ajax = axios
  }
}

export default plugin
