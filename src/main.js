// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import jQuery from 'jquery'

import store from './store/index.js'
import App from './App'
import router from './router'

import "./assets/style/public.sass" //使用sass方法2

Vue.use(Vuex)

Vue.prototype.axios = Axios


Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,   //把store對象提共給store選項, 將store的instance注入所有子組件
  template: '<App/>',
  components: { App }
})
