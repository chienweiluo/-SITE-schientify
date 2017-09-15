import Vue from 'vue'

import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Main2 from '../components/main2.vue'
import favorite from '../components/favorite.vue'
import playlist from '../components/playlist.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base:'/schientify/',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/main2',
      name: 'Main2',
      component: Main2
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: favorite
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: playlist
    },
  ]
})
