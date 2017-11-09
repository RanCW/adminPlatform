// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入elementUI start
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
//引入elementUI end
//引入axios start
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000';
Vue.prototype.$axios = axios
//引入axios end


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
