<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <transition-group tag="ul" class='slide-ul' :name="name">
      <li v-for="(item , index ) in slides" :key="index" v-show="index===nowIndex">
        <a :href="item.href" :target="target">
          <img :src="item.src" alt="">
        </a>
        <div class="slide_word">
        	<h1>{{item.head}}</h1>
        	<p>{{item.author}}</p>
        	<p><i class="icon-location2"></i>{{item.date}}</p>
        	<button>{{item.btn}}</button>
        </div>
      </li>
    </transition-group>
    <ul class="slide-pages">
      <li v-for="(item, index) in slides"
          @click="goto(index)"
          class="slide-page-point"
      >
        <a :class="{'active': index === nowIndex}">{{ index + 1 }}</a>
      </li>
    </ul>
    <div class="control-wrapper">
      <a class="prev" @click="goto(prevIndex)"></a>
      <a class="next" @click="goto(nextIndex)"></a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 5000
      },
      name: {
        type: String,
        default: 'move'
      },
      target: {
        type: String,
        default: '_blank'
      },
      now_show:{
      	type: Number,
      	default: 0
      }
    },
    data () {
      return {
        nowIndex: 0,
      }
      },
    computed: {
      prevIndex () {
        if (this.nowIndex === 0) {
          return this.slides.length - 1 //現在在第一張時, 倒回最後一張
        } else {
          return this.nowIndex - 1 //前一張
        }
      },
      nextIndex () {
        if (this.nowIndex === this.slides.length - 1) {  //最後一張時回到第一張
          return 0
        } else {
          return this.nowIndex + 1  //下一張
        }
      },
      clonedshow:{
      	set(){
      		return this.now_show
      	},
      	get(new_index){
      		this.$emit('index_change',new_index)
      	}
      }
    },
    methods: {
      goto (index) {
        this.nowIndex = index
      },
      runInv () {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clearInv () {
        clearInterval(this.invId)  //setInterval時返回的值就是invId
      }
    },
    mounted () {
      this.runInv()

      window.addEventListener('keydown',(e)=>{
        if(e.keyCode ==39){
        	console.log(e.keyCode)
        	this.goto(this.nextIndex)
        }
        if(e.keyCode ==37){
        	console.log(e.keyCode)
        	this.goto(this.prevIndex)
        }
        //作法待改進
      })
    }
  }
</script>

<style lang="sass" scoped>
  .slide-pages
    position: absolute
    bottom: 20px
    right: 30px
    li
      display: inline-block
      height: 18px
      a
        display: block
        width: 6px
        height: 6px
        margin: 0 5px
        border: 2px solid #fff
        border-color: rgba(255, 255, 255, 0.3)
        text-align: left
        text-indent: -9999px
        overflow: hidden
        _zoom: 1
        background: #f5f5f5
        background: rgba(0, 0, 0, 0.4)
        -webkit-transition: all .2s
        transition: all .2s
        cursor: pointer
        transform: translateX(-100%)
        &.active
          background: #fff
          background-color: #DCD9D4; 
          background-image: linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%)
          background-blend-mode: soft-light,screen
          border-color: #757575
          border-color: rgba(0, 0, 0, 0.4)

  .control-wrapper
    a
      display: inline-block
      position: absolute
      top: 50%
      width: 41px
      height: 100vh
      transform: translateY(-50%)
      background-color: rgba(0,0,0,.5)
  .prev
    left: 0
    background: url("http://c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png") no-repeat -84px 50%
    &:hover
      background-position: 0 50%
  .next
    right: 0
    display: inline-block
    background: url(http://c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -125px 50%
    &:hover
      background-position: -42px 50%


  .slide-show
    display: flex
    position: relative
    overflow: hidden
    align-self: center
    max-width: 100%
    max-height: calc(100% - 75px)

  .slide-ul
    width: 100%
    height: 100%
    overflow: hidden
    li
      position: absolute
      width: 100%
      height: 100%
      img
        height: 100%
        width: 100%
      .slide_word
        position: absolute
        top: 50%
        left: 50%
        transform: translate3d(-50%,-50%,0)
        padding: 20px
        background-color: rgba(0,0,0,.2)
        box-shadow: 1px 1px 5px rgba(0,0,0,0)
        i
          font-size: 1em
          margin-right: 10px
        h1
          margin: 10px 0
          font-style: italic
          font-size: 3em
        p
          margin-top: 20px
        button
          font-family: 'Raleway'
          margin-top: 15px
          background: rgba(0,0,0,.7)
          color: azure
          font-size: 1.2em
          border: 1px solid white
          padding: 10px 20px
          cursor: pointer
          outline: none
          transition: all .5s
          &:hover
            transform: scale(1.1)
            background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)
            color: royalblue
          &:active,:focus
            transform: scale(0.9)
            color: blue

  .move-enter-active
    transition: all 0.5s ease
    transform: translateX(0)

  .move-leave-active
    transition: all 0.5s ease
    transform: translateX(-100%)

  .move-enter
    transform: translateX(100%)

  .move-leave
    transform: translateX(0)

  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
  .fade-enter, .fade-leave
    opacity: 0
</style>