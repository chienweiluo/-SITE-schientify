import * as types from './mutations_type.js'
import Vue from 'vue'

//state
export const state = {
  filtering: [{
      title: "台灣現場",
      cover: require("../assets/pub.jpg"),
      audio: require('../assets/sounds/01_tall_rich.mp3'),
      author: 'someone',
    },
    {
      title: "Bounce Back",
      cover: require("../assets/americaniv.jpg"),
      author: 'John',
      audio: require('../assets/sounds/02_panda.mp3'),
    },
    {
      title: "新歌快遞",
      cover: require("../assets/artistt.jpg"),
      author: ' Alice',
      audio: require('../assets/sounds/03_loyalty.mp3'),
    },
    {
      title: "DJ 100 百大特選",
      cover: require("../assets/blackk.jpg"),
      author: 'Leon',
      audio: require('../assets/sounds/04_china.mp3'),
    },
    {
      title: "週末清聽",
      cover: require("../assets/colo.jpg"),
      author: ' Apple',
      audio: require('../assets/sounds/05_mask.mp3'),
    },
    {
      title: "15 Without You ",
      cover: require("../assets/friend.jpg"),
      author: 'Kjobs',
      audio: require('../assets/sounds/06_redbone.mp3'),
    },
    {
      title: "K-Pop Daebak",
      cover: require("../assets/fox.jpg"),
      author: 'Lunnon',
      audio: require('../assets/sounds/07_caroline.mp3'),
    },
    {
      title: "Get Your Mind Right",
      cover: require("../assets/greemcar.jpg"),
      author: 'Chien',
      audio: require('../assets/sounds/08_bounceback.mp3'),
    },
    {
      title: "GOOD Music",
      cover: require("../assets/jpbeatles.jpg"),
      author: 'WeiLee',
      audio: require('../assets/sounds/09_higherpanda.mp3'),
    },
    {
      title: "88 Rising",
      cover: require("../assets/ozomatli.jpg"),
      author: 'LeeHom',
      audio: require('../assets/sounds/10_wechat.mp3'),
    },
    {
      title: "Higher Brothers",
      cover: require("../assets/pub.jpg"),
      author: 'Hotdogs',
      audio: require('../assets/sounds/11_fireflies.mp3'),
    },
    {
      title: "Chilling",
      cover: require("../assets/rainboww.jpg"),
      author: 'Lil Kayne',
      audio: require('../assets/sounds/12_regiedrugs.mp3'),
    },
    {
      title: "XOXO",
      cover: require("../assets/spectrumm.jpg"),
      author: 'Smash',
      audio: require('../assets/sounds/13_virgo.mp3'),
    },
    {
      title: "Coloring Book",
      cover: require("../assets/StealThisAlbum.png"),
      author: 'Actoy',
      audio: require('../assets/sounds/14_glowdat.mp3'),
    },
    {
      title: "DAMN",
      cover: require("../assets/takethatprogress.jpg"),
      author: 'Dutoo',
      audio: require('../assets/sounds/15_sthjustthis.mp3'),
    },
    {
      title: "全球前50名",
      cover: require("../assets/wildd.jpg"),
      author: 'DODOO',
      audio: require('../assets/sounds/16_lkafu.mp3'),
    },
    {
      title: "Look after you",
      cover: require("../assets/wxiiisoundtracktaiwan.jpg"),
      author: 'the Fray',
      audio: require('../assets/sounds/17_lookafter.mp3'),
    },
    {
      title: "Over my Head",
      cover: require("../assets/jjscale.jpg"),
      author: 'the Fray',
      audio: require('../assets/sounds/18_ovmhead.mp3'),
    },
  ],
  albums: [{
      title: "高, 還沒富, 但帥",
      cover: require("../assets/pub.jpg"),
      audio: require('../assets/sounds/01_tall_rich.mp3'),
      author: 'psy.p',
    },
    {
      title: "Bounce Back",
      cover: require("../assets/americaniv.jpg"),
      audio: require('../assets/sounds/02_panda.mp3'),
      author: 'someone',
    },
    {
      title: "新歌快遞",
      cover: require("../assets/artistt.jpg"),
      audio: require('../assets/sounds/03_loyalty.mp3'),
      author: 'someone',
    },
    {
      title: "DJ 100 百大特選",
      cover: require("../assets/blackk.jpg"),
      audio: require('../assets/sounds/04_china.mp3'),
      author: 'someone',
    },
    {
      title: "週末清聽",
      cover: require("../assets/colo.jpg"),
      audio: require('../assets/sounds/05_mask.mp3'),
      author: 'someone',
    },
    {
      title: "15 Without You ",
      cover: require("../assets/friend.jpg"),
      audio: require('../assets/sounds/06_redbone.mp3'),
      author: 'someone',
    },
    {
      title: "K-Pop Daebak",
      cover: require("../assets/fox.jpg"),
      audio: require('../assets/sounds/07_caroline.mp3'),
      author: 'someone',
    },
  ],
  savours: [{
      title: "Get Your Mind Right",
      cover: require("../assets/greemcar.jpg"),
      audio: require('../assets/sounds/08_bounceback.mp3'),
      author: 'someone',
    },
    {
      title: "GOOD Music",
      cover: require("../assets/jpbeatles.jpg"),
      audio: require('../assets/sounds/09_higherpanda.mp3'),
      author: 'someone',
    },
    {
      title: "88 Rising",
      cover: require("../assets/ozomatli.jpg"),
      audio: require('../assets/sounds/10_wechat.mp3'),
      author: 'someone',
    },
    {
      title: "Higher Brothers",
      cover: require("../assets/pub.jpg"),
      audio: require('../assets/sounds/11_fireflies.mp3'),
      author: 'someone',
    },
  ],
  styles: [{
      title: "Chilling",
      cover: require("../assets/rainboww.jpg"),
      audio: require('../assets/sounds/12_regiedrugs.mp3'),
      author: 'someone',
    },
    {
      title: "XOXO",
      cover: require("../assets/spectrumm.jpg"),
      audio: require('../assets/sounds/13_virgo.mp3'),
      author: 'someone',
    },
    {
      title: "Coloring Book",
      cover: require("../assets/StealThisAlbum.png"),
      audio: require('../assets/sounds/14_glowdat.mp3'),
      author: 'someone',
    },
    {
      title: "DAMN",
      cover: require("../assets/takethatprogress.jpg"),
      audio: require('../assets/sounds/15_sthjustthis.mp3'),
      author: 'someone',
    },
  ],
  billboards: [{
      title: "全球前50名",
      cover: require("../assets/wildd.jpg"),
      audio: require('../assets/sounds/16_lkafu.mp3'),
      author: 'someone',
    },
    {
      title: "亞洲前50名",
      cover: require("../assets/wxiiisoundtracktaiwan.jpg"),
      audio: require('../assets/sounds/17_lookafter.mp3'),
      author: 'someone',
    },
    {
      title: "台灣前50名",
      cover: require("../assets/jjscale.jpg"),
      audio: require('../assets/sounds/18_ovmhead.mp3'),
      author: 'someone',
    }
  ],
  playing_track: [],
  isPlaying: false,
  vol: 1,
}

//mutations

export const mutations = {
  [types.PLAYTRACK](state, song) {
    state.playing_track.push(song);
    song.currentTime = 0;

    if (state.playing_track.length > 0) {
      state.isPlaying = true
    }

    if (state.playing_track.length < 2) {
      state.playing_track[0].currentTime = 0
      state.playing_track[0].play();
      console.log(song)
    } else {
      state.playing_track[0].pause();
      state.playing_track[0].currentTime = 0;
      state.playing_track[1].currentTime = 0;
      state.playing_track[1].play();

      state.playing_track.shift();
    }

  },
  [types.CONTROLPLAYING](state) {
    state.isPlaying = !state.isPlaying
  },
  [types.RESTARTPLAYING](state) {
    state.playing_track[0].pause();
    state.playing_track[0].currentTime = 0;
    state.isPlaying = false
  },
  [types.VOLUMECON](state) {
    state.vol > 3 ? state.vol = 1 : state.vol += 1;
    switch (state.vol) {
      case 1:
        state.playing_track[0].volume = 0.75; //o))
        break
      case 2:
        state.playing_track[0].volume = 1; //o)))
        break
      case 3:
        state.playing_track[0].muted = true; //ox
        break
      case 4:
        state.playing_track[0].muted = false;
        state.playing_track[0].volume = 0.4; //o)
        break
    }
  },
  [types.DOWNPLAYBAR](state){
    state.isPlaying = false
  },
  [types.MOVEPLAYBAR](state, bar){
    let dis = bar.event.offsetX;
    dis = bar.width
    dis = bar.left
  },
  [types.UPPLAYBAR](state,bar){
    bar.event = null
  }

  //action 發出commit會對應到 mutation 使用的是Object key方式
  // [types.TYPE_NAME](state) {
  // 	//在mutation 改變state
  // 	   ...do some change...
  // },
}
