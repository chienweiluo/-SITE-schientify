<template>
	<section class="footer">
		<div class="player-controls">
		  <div class="player-controls__buttons">
		    <button class="control-button icon-shuffle" title="啟用隨機播放" 
        :style="{'color': shuffleon?'#0099cc' : 'gray'}" 
        @click="shuffleon=!shuffleon"
        ></button>
		    <button class="control-button icon-backward2" title="上一步"></button>
		    <button class="control-button" title="播放" :class="{ 'icon-play3': playing, 'icon-pause2':!playing }" id="playicon" @click="playing =!playing"></button>
		    <button class="control-button icon-forward3" title="下一步"></button>
		    <button class="control-button icon-loop2" title="啟用重複播放" 
        :style="{'color': repeaton?'#0099cc' : 'gray'}" 
        @click="repeaton=!repeaton"></button>
		  </div>
		  <div class="playback-bar">
		    <div class="playback-bar__progress-time">0:00</div>
		    <div class="progress-bar">
		      <div class="middle-align progress-bar__bg">
		        <div class="progress-bar__fg" style="width: 0%;"></div>
		        <div class="middle-align progress-bar__slider" style="left: 0%;"></div>
		      </div>
		    </div>
		      <div class="playback-bar__progress-time">0:00</div>
		  </div>
		</div>
		<span id="album">
      <img>
    </span>
	</section>
</template>
<script>
export default{
  data(){
    return{
      playing: true,
      shuffleon: false,
      repeaton: false,
    }
  },
  methods: {
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
      &:hover
        color: darken(#0099CC, 5%)
        transition: color .5s
      &:nth-child(3)
        font-size: 32px

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
      text-align: center
    .progress-bar
      cursor: pointer
      height: 12px
      position: relative
      width: 100%
      .progress-bar__bg
        background-color: #404040
        border-radius: 2px
        display: 2px
        height: 4px
        width: 100%
        .progress-bar__fg
          background-color: #a0a0a0
          border-radius: 2px
          height: 4px
          transition: background-color .1s
        .progress-bar__slider
          background-color: #FFF
          border-radius: 50%
          width: 12px
          height: 12px
          margin-left: -6px
          margin-top: -6px
          z-index: 100
          box-shadow: 0 2px 4px rgba(0,0,0,.5)
          transform: scale(0)
          transition: transform .1s


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