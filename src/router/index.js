import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/index.vue'
import register from '@/components/register/index.vue'

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
      path: 'register',
      name: 'register',
      component: register,
      meta:'注册'
    }
  ]
})
