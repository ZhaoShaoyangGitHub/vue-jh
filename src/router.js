import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/404', component: () => import('@/views/404') },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/experts',
      name: 'experts',
      component: () => import(/* webpackChunkName: "experts" */ './views/Experts.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/registerPhone',
      name: 'registerPhone',
      component: () => import('./views/RegisterPhone.vue')
    },
    {
      path: '/registerEmail',
      name: 'registerEmail',
      component: () => import('./views/RegisterEmail.vue')
    },
    {
      path: '/forgetPassword',
      name: 'forget',
      component: () => import('./views/Forget.vue')
    },
    { path: '*', redirect: '/404' }
  ]
})
