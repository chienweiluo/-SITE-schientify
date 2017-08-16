<template>
  <div id="fav">
    <div class="container">
      <div data-key="65" class="instrument">A<span>boom</span></div>
      <div data-key="83" class="instrument">S<span>clap</span></div>
      <div data-key="68" class="instrument">D<span>hihat</span></div>
      <div data-key="70" class="instrument">F<span>kick</span></div>
      <div data-key="71" class="instrument">G<span>openhat</span></div>
      <div data-key="72" class="instrument">H<span>ride</span></div>
      <div data-key="74" class="instrument">J<span>snare</span></div>
      <div data-key="75" class="instrument">K<span>tink</span></div>
      <div data-key="76" class="instrument">L<span>tom</span></div>
    </div>
    <div class="back">
      <router-link to="/"><span class="icon-music"></span>Back<span class="icon-music"></span></router-link>
    </div>
    <audio data-key="65" :src="boom"></audio>
    <audio data-key="83" :src="clap"></audio>
    <audio data-key="68" :src="hihat"></audio>
    <audio data-key="70" :src="kick"></audio>
    <audio data-key="71" :src="openhat"></audio>
    <audio data-key="72" :src="ride"></audio>
    <audio data-key="74" :src="snare"></audio>
    <audio data-key="75" :src="tink"></audio>
    <audio data-key="76" :src="tom"></audio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      boom: require('../assets/sounds/boom.mp3'),
      clap: require('../assets/sounds/clap.mp3'),
      hihat: require('../assets/sounds/hihat.mp3'),
      kick: require('../assets/sounds/kick.mp3'),
      openhat: require('../assets/sounds/openhat.mp3'),
      ride: require('../assets/sounds/ride.mp3'),
      snare: require('../assets/sounds/snare.mp3'),
      tink: require('../assets/sounds/tink.mp3'),
      tom: require('../assets/sounds/tom.mp3'),
    }
  },
  mounted(){
  window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const button = document.querySelector(`div[data-key='${e.keyCode}']`);
    if(!audio) return;  //避免不是綁定的鍵會error, 所以return
    audio.currentTime = 0; //dom操作, currentTime是音原播放的當前位置
    button.classList.add('playing');;
    audio.play(); //play執行
  });
    const keys = document.querySelectorAll('.instrument')   //array

    keys.forEach(function(key){
      key.addEventListener('transitionend',function(){  //綁定transitionend事件
        key.classList.remove('playing')
      })
    })
  }
}
</script>

<style lang="sass">
#fav
  font-family: 'Microsoft JhengHei'
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  background: url('../assets/band.jpg')
  background-position: center center
  background-size: cover
  background-repeat: no-repeat
  display: inline-flex
  flex-flow: column nowrap
  justify-content: center
  align-items: center
  width: 100%
  height: 100vh
  .container
    width: 100vw
  .back
    margin-top: 50px
    padding: 10px
    a
      text-decoration: none
      color: #0055cc
      text-shadow: 0 0 5px blue
      font-size: 32px
      span
        padding: 0 10px 0 10px

.instrument
  width: 65px
  height: 80px
  border: 5px solid orange
  margin: 10px 20px 10px 20px
  display: inline-block
  line-height: 80px
  font-size: 35px
  border-radius: 0.2em
  background-color: rgba(0,0,0,.7)
  transition: all .1s
  color: white
  &:hover,:focusl
    transform: scale(1.1)
  span
    display: block
    font-size: 24px
    color: #ffc600
    text-shadow: 1px 1px 5px black

.playing
  transform: scale(1.1)
  border-color: #ffc600
  color: #ffc600
  box-shadow: 1px 1px 20px #ffc600
</style>
