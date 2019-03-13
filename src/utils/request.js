import axios from 'axios'
import store from '@/store'
import Qs from 'qs'
import router from '@/router'
import Vue from 'vue'
import { Message } from 'element-ui'
Vue.use(Message)

// 创建axios 实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 10000, // 请求超时时间
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    Platform: 'web'
  }
})

// request 拦截器
service.interceptors.request.use(
  config => {
    // 这里可以自定义一些config 配置
    if (localStorage.getItem('auth_token')) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        'auth_token'
      )}`
    }

    // POST 请求参数处理成 axios post 方法所需的格式
    if (
      config.method === 'post' &&
      config.headers['Content-Type'] !== 'multipart/form-data'
    ) {
      config.data = Qs.stringify(config.data)
    }

    // loading + 1
    store.dispatch('SetLoading', true)

    return config
  },
  error => {
    // 这里处理一些请求出错的情况

    // loading清0
    setTimeout(function () {
      store.dispatch('SetLoading', 0)
    }, 300)
    return Promise.reject(error)
  }

)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 这里处理一些response 正常放回时的逻辑
    if (res.code !== 'OK') {
      if (res.code === 'Unauthorized') {
        router.push('/login')
      } else {
        Message.error({
          showClose: true,
          message: res.message
        });
        return res
      }
      return Promise.resolve()
    } else {
      // loading - 1
      store.dispatch('SetLoading', false)
      return res
    }
  },
  error => {
    // 这里处理一些response 出错时的逻辑
    // loading - 1
    store.dispatch('SetLoading', false)
    return Promise.reject(error)
  }
)

export default service
