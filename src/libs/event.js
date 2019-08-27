/**
 * 跨组件通信
 */
import Vue from 'vue'
// 用于跨组件通信
let eventHub = new Vue()

/**
 * 跨组件发布消息
 * @param  {[type]}    key  名称
 * @param  {...[type]} args 数据
 * @return {[type]}         [descriptin]
 */
function publish (key, ...args) {
  eventHub.$emit(key, ...args)
  return this
}

/**
 * 跨组件订阅消息
 * @param  {[type]}   key      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function subscribe (key, callback) {
  eventHub.$on(key, callback.bind(this))
  return this
}

/**
 * 事件移除
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
function cancel (...args) {
  eventHub.$off(...args)
}

export {
  publish,
  subscribe,
  cancel
}
