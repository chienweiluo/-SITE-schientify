<template>
	<section class="aside-box">
		<router-link to="/" class="icon-music"></router-link>
		<router-link to="/favorite" class="icon-heart"></router-link>
		<router-link to="/playlist" class="icon-earth"></router-link>
		<router-link to="/main2" class="info-cover" :style="{backgroundImage: 'url('+info+')' }"></router-link>
	</section>
</template>
<script>
export default{
	data(){
		return{
			info: require('../assets/rainboww.jpg')
		}
	}
}
</script>
<style scoped lang="sass">
a
  text-decoration: none
  color: #00699c
</style>