import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/index.vue'
import register from '@/pages/register/index.vue'
import index from '@/pages/index/index.vue'
import goodsIndex from '@/pages/goodsindex/index'
import goodsDetail from '@/pages/goodsdetail/index'
import newsIndex from '@/pages/newsindex/index'
import newsDetail from '@/pages/newsdetail/index'

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
      meta:'首页',
      children:[
        {//商品首页
          path:'/',
          name:'newsIndex',
          component:newsIndex
        },
        {//商品首页
          path:'goods',
          name:'goodsIndex',
          component:goodsIndex
        },
        {//商品详情页面
          path:'goodsdetail',
          name:'goodsDetail',
          component:goodsDetail
        },
        {//新闻首页
          path:'news',
          name:'newsIndex',
          component:newsIndex
        },
        {//新闻详情页面
          path:'newsdetail',
          name:'newsDetail',
          component:newsDetail
        }

      ]
    }
  ]
})
