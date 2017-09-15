<template>
  <section class="showarea">
    <div class="search-bar">
      <span class="icon-search" @click="toshowbar()" v-show="!showbar" id="searchspan"></span>
      <input type="text" placeholder="author? cover?" id="inputbar" v-show="showbar" v-on:blur="toshowbar()" v-model="filter">
    </div>

    <transition name="fade">
      <div v-if="this.searching==false">
        <p class="greet"><span>Man, grab one!</span></p>
        <section class="display_list">
          <div v-for="album in loadalbums" @click="toplay(album,$event)">
            <article :style="{background:'url('+album.cover+')'}" class="cover"></article>
            <p class="li_info">{{ album.title }}</p>
            <p>{{album.author}}</p>
            <audio :data-key="album.audio" :src="album.audio"></audio>
          </div>
        </section>
        <p>How is it?</p>
        <section class="savour">
          <div v-for="savour in loadsavours" @click="toplay(savour)">
            <article :style="{background:'url('+savour.cover+')'}"></article>
            <p class="li_info">{{ savour.title }}</p>
            <p>{{savour.author}}</p>
            <audio :data-key="savour.audio" :src="savour.audio"></audio>
          </div>
        </section>
        <p>It's ok, dude</p>
        <section class="maybe_prefer">
          <div v-for="style in loadstyles"  @click="toplay(style)">
            <article :style="{background:'url('+style.cover+')'}"></article>
            <p class="li_info">{{ style.title }}</p>
            <p>{{style.author}}</p>
            <audio :data-key="style.audio" :src="style.audio"></audio>
          </div>
        </section>
        <p>try Billboard</p>
        <section class="billboard">
          <div v-for="billboard in loadbillboards"  @click="toplay(billboard)">
            <article :style="{background:'url('+billboard.cover+')'}"></article>
            <p class="li_info">{{ billboard.title }}</p>
            <p>{{billboard.author}}</p>
            <audio :data-key="billboard.audio" :src="billboard.audio"></audio>
          </div>
        </section>
        <p>此專案僅供demo, 無其他用途</p>
      </div>
    </transition>
<transition name="fade">
  <div v-if="this.searching==true">
    <section class="filtered">
      <div v-for="item in filtered"  @click="toplay(item),getback()">
        <article :style="{background: 'url('+item.cover+')'}"></article>
        <p>{{item.title}}</p>
        <p>{{item.author}}</p>
        <audio :data-key="item.audio" :src="item.audio"></audio>
      </div>
    </section>
  </div>
</transition>

  </section>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data() {
    return {
      showbar: false,
      searching: false,
      filter: "",
    }
  },
  methods: {
    toshowbar() {
      return this.showbar = !this.showbar
    },
    toplay(album,event){
      let ftr = document.getElementById("album")
      let ftrcover = ftr.getElementsByTagName("img")[0]
      let app = document.getElementById("app")
      let audio = document.querySelector(`audio[data-key='${album.audio}']`)

      ftrcover.src = album.cover
      ftrcover.style.width = "60px"
      ftrcover.style.height = "60px"    //playing album img調換

      app.style.backgroundImage = `url('${ftrcover.src}')` //大背景
      this.$store.commit('PLAYTRACK', audio)

    },
    getback(){
      return this.filter=""
    },
  },
  computed: {
    ...mapState([
      'playing_track',
      'isPlaying' // playing_track  :  playing_track
    ]),
    ...mapActions([
      'play_nowtrack'
      ]),
    loadalbums() {
      const albums = this.$store.state.albums
      return albums
    },
    loadsavours() {
      const savours = this.$store.state.savours
      return savours
    },
    loadstyles() {
      const styles = this.$store.state.styles
      return styles
    },
    loadbillboards() {
      const billboards = this.$store.state.billboards
      return billboards
    },
    filtered() {
      const filter_covers = this.$store.state.filtering //[]
      var _this=this
      return filter_covers.filter( (filter_cover)=>{
        var tag = ['title','author'];
        var flag = false;
        tag.forEach(function(now_tag){
        if (filter_cover[now_tag].toLowerCase().indexOf(_this.filter.toLowerCase()) != -1) {
          flag= true;
        }
      });
        return flag;
      })
    }
  },
  watch: {
    filter: function() {
      if (this.filter !== "") {
        return this.searching = true;
      }
      this.searching = false;
    }
  },
  mounted() {

  }
}

</script>
<style scoped lang="sass">
.fade-enter-active,.fade-leave-active
  transition: opacity
.5s .fade-enter,.fade-leave-to
  opacity: 0

.highlight
  background-color: #0099cc
  color: white
  padding: 0 5px

.filtered
  display: flex
  flex-flow: row wrap
  justify-content: center
  padding-left: 90px
  margin-top: 45px
  div
    display: flex
    flex-flow: column nowrap
    align-items: center
    margin-bottom: 45px
    padding: 20px
    article
      width: 150px
      height: 150px
      background-size: 100% 100% !important
      background-position: center center !important
      background-repeat: no-repeat !important
    p
      font-size: 18px
      padding-top: 20px
      position: relative
    + p
      font-size: 16px
</style>
