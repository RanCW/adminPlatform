import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/index.vue'
import register from '@/pages/register/index.vue'
import index from '@/pages/index/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta:'登录'
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta:'注册'
    },{
      path: '/index',
      name: 'index',
      component: index,
      meta:'首页'
    }
  ]
})
