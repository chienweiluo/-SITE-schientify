<template>
<transition name="fade">
	<section class="hello">
    <div class="file_photo"><img :src="user.photo" alt=""><span>{{user.name}}</span></div>
    <p class="file_info">
      <table>
        <ul>
           <li><span class="icon-envelop"></span>{{ user.email}}</li>
           <li><span class="icon-address-book"></span>{{ user.id}}</li>
           <li><span class="icon-bubble2"></span>{{ user.plan}}</li>
           <li><span class="icon-link"></span><a :href="user.site">{{ user.site}}</a></li>
           <li><span class="icon-location2"></span>{{ user.locate}}</li>
           <li><span class="icon-quotes-left"></span>Be Water</li>
           <li><router-link to="/"><span class="icon-checkmark"></span>OK, GO BACK</router-link></li>
        </ul>
        </table>
    </p>
    <app-footer></app-footer>
	</section>
</transition>
</template>
<script>
import AppFooter from './footer.vue'
export default{
  data(){
    return{
      user: {
        name: "Chien Wei",
        photo: require('../assets/rainboww.jpg'),
        email: "chienwei0526@gmail.com",
        id: "chienlxd",
        plan: "V.I.P",
        site: "https://chienweiluo.online/",
        locate: "Taoyuan, Taiwan"
    }
    }
  },
  components: {
    AppFooter: AppFooter
  }
}
</script>
<style scoped lang="sass">
.fade-enter-active,.fade-leave-active
  transition: opacity
.5s .fade-enter,.fade-leave-to
  opacity: 0

a
  text-decoration: none
  color: #0099cc

.hello
  display: flex
  justify-content: center
  align-items: center
  height: calc(100vh - 75px )
  .file_photo
    flex: 4.5 1 0
    display: flex
    flex-flow: column nowrap
    align-items: center
    justify-content: center
    img
      border-radius: 5em
      width: 250px
      height: 250px
    span
      padding: 20px 0
      font-style: italic
      font-size: 1.2em

  .file_info
    flex: 4.5 1 0
    table
      ul
        li
          text-align: left
          padding: 20px
          &:last-child
            &:hover
              color: lighten(#0099cc, 50%)
              transition: all .5s
          span
            padding: 0 15px

</style>