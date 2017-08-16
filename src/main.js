// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Tween from 'tween.js'

import App from './App'
import router from './router'

import "./assets/style/public.sass" //使用sass方法2

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    filtering: [
      { title: "台灣現場", cover: require("./assets/pub.jpg"), author:' someone' },
      { title: "Bounce Back", cover: require("./assets/americaniv.jpg"), author:' none' },
      { title: "新歌快遞", cover: require("./assets/artistt.jpg"), author:' playlist' },
      { title: "DJ 100 百大特選", cover: require("./assets/blackk.jpg") , author:' mof'},
      { title: "週末清聽", cover: require("./assets/colo.jpg"), author:' Apple' },
      { title: "15 Without You ", cover: require("./assets/friend.jpg"), author:' ' },
      { title: "K-Pop Daebak", cover: require("./assets/fox.jpg"), author:' ' },
      { title: "Get Your Mind Right", cover: require("./assets/greemcar.jpg"), author:'' },
      { title: "GOOD Music", cover: require("./assets/jpbeatles.jpg"), author:' ' },
      { title: "88 Rising", cover: require("./assets/ozomatli.jpg"), author:' ' },
      { title: "Higher Brothers", cover: require("./assets/pub.jpg"), author:' ' },
      { title: "Chilling", cover: require("./assets/rainboww.jpg"), author:' ' },
      { title: "XOXO", cover: require("./assets/spectrumm.jpg"), author:' ' },
      { title: "Coloring Book", cover: require("./assets/StealThisAlbum.png"), author:' ' },
      { title: "DAMN", cover: require("./assets/takethatprogress.jpg"), author:' ' },
      { title: "全球前50名", cover: require("./assets/wildd.jpg") , author:' '},
      { title: "亞洲前50名", cover: require("./assets/wxiiisoundtracktaiwan.jpg") , author:' '},
      { title: "台灣前50名", cover: require("./assets/jjscale.jpg"), author:' ' },
      { title: "台灣現場", cover: require("./assets/pub.jpg"), author:' a' },
      { title: "Bounce Back", cover: require("./assets/americaniv.jpg"), author:' b' },
      { title: "新歌快遞", cover: require("./assets/artistt.jpg"), author:' d' },
      { title: "DJ 100 百大特選", cover: require("./assets/blackk.jpg") , author:' c'},
      { title: "週末清聽", cover: require("./assets/colo.jpg"), author:' ' },
      { title: "15 Without You ", cover: require("./assets/friend.jpg"), author:' ' },
      { title: "K-Pop Daebak", cover: require("./assets/fox.jpg"), author:' ' },
      { title: "Get Your Mind Right", cover: require("./assets/greemcar.jpg"), author:'' },
      { title: "GOOD Music", cover: require("./assets/jpbeatles.jpg"), author:' ' },
      { title: "88 Rising", cover: require("./assets/ozomatli.jpg"), author:' ' },
      { title: "Higher Brothers", cover: require("./assets/pub.jpg"), author:' ' },
      { title: "Chilling", cover: require("./assets/rainboww.jpg"), author:' ' },
      { title: "XOXO", cover: require("./assets/spectrumm.jpg"), author:' ' },
      { title: "Coloring Book", cover: require("./assets/StealThisAlbum.png"), author:' ' },
      { title: "DAMN", cover: require("./assets/takethatprogress.jpg"), author:' ' },
      { title: "全球前50名", cover: require("./assets/wildd.jpg") , author:' '},
      { title: "亞洲前50名", cover: require("./assets/wxiiisoundtracktaiwan.jpg") , author:' '},
      { title: "台灣前50名", cover: require("./assets/jjscale.jpg"), author:' ' },
      { title: "台灣現場", cover: require("./assets/pub.jpg"), author:' a' },
      { title: "Bounce Back", cover: require("./assets/americaniv.jpg"), author:' b' },
      { title: "新歌快遞", cover: require("./assets/artistt.jpg"), author:' d' },
      { title: "DJ 100 百大特選", cover: require("./assets/blackk.jpg") , author:' c'},
      { title: "週末清聽", cover: require("./assets/colo.jpg"), author:' ' },
      { title: "15 Without You ", cover: require("./assets/friend.jpg"), author:' ' },
      { title: "K-Pop Daebak", cover: require("./assets/fox.jpg"), author:' ' },
      { title: "Get Your Mind Right", cover: require("./assets/greemcar.jpg"), author:'' },
      { title: "GOOD Music", cover: require("./assets/jpbeatles.jpg"), author:' ' },
      { title: "88 Rising", cover: require("./assets/ozomatli.jpg"), author:' ' },
      { title: "Higher Brothers", cover: require("./assets/pub.jpg"), author:' ' },
      { title: "Chilling", cover: require("./assets/rainboww.jpg"), author:' ' },
      { title: "XOXO", cover: require("./assets/spectrumm.jpg"), author:' ' },
      { title: "Coloring Book", cover: require("./assets/StealThisAlbum.png"), author:' ' },
      { title: "DAMN", cover: require("./assets/takethatprogress.jpg"), author:' ' },
      { title: "全球前50名", cover: require("./assets/wildd.jpg") , author:' '},
      { title: "亞洲前50名", cover: require("./assets/wxiiisoundtracktaiwan.jpg") , author:' '},
      { title: "台灣前50名", cover: require("./assets/jjscale.jpg"), author:' ' },
      { title: "台灣現場", cover: require("./assets/pub.jpg"), author:' a' },
      { title: "Bounce Back", cover: require("./assets/americaniv.jpg"), author:' b' },
      { title: "新歌快遞", cover: require("./assets/artistt.jpg"), author:' d' },
      { title: "DJ 100 百大特選", cover: require("./assets/blackk.jpg") , author:' c'},
      { title: "週末清聽", cover: require("./assets/colo.jpg"), author:' ' },
      { title: "15 Without You ", cover: require("./assets/friend.jpg"), author:'okok' },
      { title: "K-Pop Daebak", cover: require("./assets/fox.jpg"), author:'Korean' },
      { title: "Get Your Mind Right", cover: require("./assets/greemcar.jpg"), author:'playlists' },
      { title: "GOOD Music", cover: require("./assets/jpbeatles.jpg"), author:'GOOD Music' },
      { title: "88 Rising", cover: require("./assets/ozomatli.jpg"), author:'88 Rising' },
      { title: "Nomidiac", cover: require("./assets/pub.jpg"), author:'Higher Brothers' },
      { title: "Made in China", cover: require("./assets/rainboww.jpg"), author:'Higher Brothers' },
      { title: "XOXO", cover: require("./assets/spectrumm.jpg"), author:'' },
      { title: "Coloring Book", cover: require("./assets/StealThisAlbum.png"), author:'Chance The Rapper' },
      { title: "DAMN", cover: require("./assets/takethatprogress.jpg"), author:'Kendrick Lamar' },
      { title: "Helios", cover: require("./assets/wildd.jpg") , author:'the Fray'},
      { title: "How to save a life", cover: require("./assets/wxiiisoundtracktaiwan.jpg") , author:'the Fray'},
      { title: "the Fray", cover: require("./assets/jjscale.jpg"), author:'the Fray' },
    ],
    albums: [
      { title: "台灣現場", cover: require("./assets/pub.jpg") },
      { title: "Bounce Back", cover: require("./assets/americaniv.jpg") },
      { title: "新歌快遞", cover: require("./assets/artistt.jpg") },
      { title: "DJ 100 百大特選", cover: require("./assets/blackk.jpg") },
      { title: "週末清聽", cover: require("./assets/colo.jpg") },
      { title: "15 Without You ", cover: require("./assets/friend.jpg") },
      { title: "K-Pop Daebak", cover: require("./assets/fox.jpg") },
    ],
    savours: [
      { title: "Get Your Mind Right", cover: require("./assets/greemcar.jpg") },
      { title: "GOOD Music", cover: require("./assets/jpbeatles.jpg") },
      { title: "88 Rising", cover: require("./assets/ozomatli.jpg") },
      { title: "Higher Brothers", cover: require("./assets/pub.jpg") },
    ],
    styles: [
      { title: "Chilling", cover: require("./assets/rainboww.jpg") },
      { title: "XOXO", cover: require("./assets/spectrumm.jpg") },
      { title: "Coloring Book", cover: require("./assets/StealThisAlbum.png") },
      { title: "DAMN", cover: require("./assets/takethatprogress.jpg") },
    ],
    billboards: [
      { title: "全球前50名", cover: require("./assets/wildd.jpg") },
      { title: "亞洲前50名", cover: require("./assets/wxiiisoundtracktaiwan.jpg") },
      { title: "台灣前50名", cover: require("./assets/jjscale.jpg") }
    ]
  },
  mutations: {}
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
