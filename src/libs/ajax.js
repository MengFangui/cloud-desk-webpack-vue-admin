import axios from 'axios'
import Cookies from 'js-cookie'
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

// 获取用户名
function getToken () {
  return Cookies.get('username') || ''
}

// 扩展请求参数
function extendToken (data) {
  return {
    ...data,
    'username': getToken() // 添加token信息
  }
}

// create an axios instance
const service = axios.create({
  baseURL: baseUrl, // url = base url + request url
  withCredentials: true // send cookies when cross-domain requests
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    let { method, data, params } = config

    if (method.toLowerCase() === 'get') {
      config.params = extendToken(params)
    } else {
      // 文件上传FormData不需要
      if ((data instanceof FormData)) {
        config.data = data
      } else {
        config.data = extendToken(data)
      }
    }

    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
