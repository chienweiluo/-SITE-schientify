<template>
	<section class="footer">
		<div class="player-controls">
		  <div class="player-controls__buttons">
		    <!-- <button class="control-button icon-shuffle" title="啟用隨機播放"
        :style="{'color': shuffleon?'#0099cc' : 'gray'}"
        @click="shuffleon=!shuffleon"
        ></button> -->
		    <!-- <button class="control-button icon-backward2" title="上一步"></button> -->
        <button class="control-button icon-stop2" title="停止" @click="restart_now()"></button>
        <button v-if="isPlaying" class="control-button icon-pause2" title="停止" @click="stop_now()" ></button>
		    <button v-else class="control-button icon-play3 " title="播放" @click="play_now()"></button>
         <button class="control-button" :class="volume_inc" title="音量" @click="incre_vol()"></button>
		    <!-- <button class="control-button icon-forward3" title="下一步"></button> -->
	<!-- 	    <button class="control-button icon-loop2" title="啟用重複播放"
        :style="{'color': repeaton?'#0099cc' : 'gray'}"
        @click="repeaton=!repeaton"></button> -->
		  </div>

		  <div class="playback-bar">
		    <div class="playback-bar__progress-time">
          {{song_curTime}}
        </div>
		    <div class="progress-bar">
		      <div class="middle-align progress-bar__bg">
		        <div class="progress-bar__fg"
            :style="{width: bar_width}"></div>
		        <div class="middle-align progress-bar__slider"
            :style="{left: point_left}"
            ></div>
		      </div>
		    </div>
		      <div class="playback-bar__progress-time"> {{song_leng}} </div>
		  </div>
		</div>
		<span id="album">
      <img>
    </span>
	</section>
</template>
<script>
import {mapState,mapActions} from 'vuex'

export default{
  data(){
    return{
      shuffleon: false,
      repeaton: false,
      track_duration: 0,
      curt: 0,
      bar_width: 0,
      point_left: 0,
      vol: 1,
    }
  },
  methods: {
    stop_now(){
      this.playing_track[0].pause()
      this.$store.commit('CONTROLPLAYING')
      // console.log(this.playing_track[0].currentTime)
    },
    play_now(){
      this.playing_track[0].play()
      this.$store.commit('CONTROLPLAYING')
      // console.log(this.playing_track[0].currentTime)
    },
    restart_now(){
      this.$store.commit('RESTARTPLAYING')
    },
    incre_vol(){
      this.vol > 3 ? this.vol=1: this.vol+=1;
      this.$store.commit('VOLUMECON')
    },
  },
  computed:{
    ...mapState([
      'playing_track', // playing_track  :  playing_track
      'isPlaying'
    ]),
    volume_inc(){
      switch(this.vol){
        case 1:
          return 'icon-volume-medium';
        case 2:
          return 'icon-volume-high';
        case 3:
          return 'icon-volume-mute2';
        case 4:
          return 'icon-volume-low';
      }
    },
    bar_move(){
      let percent = parseFloat(this.curt/this.track_duration);
      this.bar_width = this.point_left;
      console.log(Math.round(percent*10000)/100.00+"%")

      bar_width = percent
      return percent <=0?"0" : (Math.round(percent*10000)/100.00+"%")
    },
    song_leng(){
      if(this.playing_track == 0){
        return
      }
      this.track_duration = this.playing_track[0].duration
      let dur_min = Math.floor(this.track_duration/60)
      let dur_sec = Math.floor(this.track_duration%60)
      if (dur_sec < 10){
        dur_sec = `0${dur_sec}`
      }
      // console.log(this.playing_track[0],this.track_duration,dur_min,dur_sec)

      return `${dur_min}:${dur_sec}`
    },

    song_curTime(){
      if(this.playing_track == 0){
        return
      };
      this.curt = this.playing_track[0].currentTime
      let cur_min = Math.floor(this.curt/60)
      let cur_sec = Math.floor(this.curt%60)
      if(cur_sec<10){
        cur_sec =`0${cur_sec}`
      }

      return `${cur_min}:${cur_sec}`
    },

  },
  mounted(){
  window.setInterval(()=>{  //curTime 增加
      this.curt += 1

      let percent = parseFloat(this.curt/this.track_duration);

      this.bar_width = percent <=0?"0" : ((percent*100)+"%")
      this.point_left = percent <=0?"0" : ((percent*100)+"%")
      return percent <=0?"0" : ((percent*100)+"%")
  },500)
  }
}

</script>
<style scoped lang="sass">
.player-controls
  width: 40%
  max-width: 722px
  display: flex
  flex-flow: column wrap
  align-items: center
  .player-controls__buttons
    margin-bottom: 12px
    cursor: default
    display: -ms-flexbox
    display: flex
    width: 224px
    -ms-flex-pack: justify
    justify-content: space-between
    -ms-flex-direction: row
    flex-direction: row
    -ms-flex-wrap: nowrap
    flex-wrap: nowrap
    .control-button
      background: transparent
      font-size: 20px
      border: none
      color: #a0a0a0
      cursor: pointer
      width: 332px
      min-height: 32px
      height: 32px
      position: relative
      transition: all 33ms
      top: 9.5px
      outline: none
      &:hover,:focus
        color: darken(#0099CC, 5%)
        transform: scale(1.2)
      &:active
        transform: scale(0.8)
      &:nth-child(3)
        font-size: 28px

  .playback-bar
    width: 100%
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center
    .playback-bar__progress-time
      font-weight: 400
      color: #a0a0a0
      font-size: 11px
      min-width: 40px
      margin-left: 5px
      text-align: center
    .progress-bar
      cursor: pointer
      height: 12px
      position: relative
      width: 100%
      .progress-bar__bg
        background-color: #404040
        border-radius: 2px
        height: 4px
        width: 100%
        .progress-bar__fg
          background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)
          border-radius: 2px
          height: 4px
          transition: all .3s
        .progress-bar__slider
          background-color: #FFF
          border-radius: 50%
          width: 12px
          height: 12px
          margin-left: -6px
          margin-top: -6px
          z-index: 100
          box-shadow: 0 2px 4px rgba(0,0,0,.5)
          transform: scale(1)
          transition: all .2s


#album
  padding: 5px
  align-self: center

.solid
  opacity: .3

.middle-align
  position: absolute
  top: 50%
  transform: translateY(-50%)



</style>