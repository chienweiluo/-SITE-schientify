<template>
	<div class="global">
		<slider :slides="slides" :inv="inv" :style="styleObject" :name="transitionName1" :target="target"></slider>
	</div>
</template>
<script>
import slider from './slider.vue'
	export default{
		components:{
			slider: slider
		},
		data(){
			return{
			  slides: [
          {
            src: 'https://unsplash.it/1226/460?image=836',
            href: '',
            head: 'Vintage Soul!',
            author: 'Plain Band',
            btn: 'Buy Tickets',
            date: 'thePipe/ July, 18, 2017',
          },
          {
            src: 'https://unsplash.it/1226/460?image=692',
            href: '',
            head: 'After Journey',
            author: 'After Journey',
            btn: 'Buy Tickets',
            date: 'Room18/ Sep, 24, 2017',
          },
          {
            src: 'https://unsplash.it/1226/460?image=691',
            href: '',
            head: 'Morning Coffee',
            author: 'the Relaxing',
            date: 'Sep, 18, 2017',
            btn: 'Buy Tickets',
            date: 'AlcoholBar/ Aug, 23, 2017',
          },
          {
            src: 'https://unsplash.it/1226/460?image=453',
            href: '',
            head: 'ROCK FOREVER!',
            author: 'the Beatles',
            date: 'Search/ Oct, 27, 2017',
            btn: 'Buy Tickets',
          },
          {
            src: 'https://unsplash.it/1226/460?image=452',
            href: '',
            head: 'Good Vibe & Chilling',
            author: 'Gordon',
            date: 'theWall/ May, 26, 2018',
            btn: 'Buy Tickets',
          }
        ],
        inv: 100000,
        styleObject: {
          width: '100%',
          height: '100%'
        },
        transitionName1: 'move',
        transitionName2: 'fade',
        target: '_blank',
			}
		},
		methods:{
		},
		mounted(){

       }

		}
</script>
<style lang="sass">
.global
  display: flex
  flex-flow: column nowrap
  width: 100%
  height: 100vh
</style>