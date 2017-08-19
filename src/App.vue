<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppFooter from './components/footer.vue'
export default {
  name: 'app',
  components:{
    AppFooter: AppFooter
  }
}

</script>
<style>
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
    @keyframes slide-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
#app {
  font-family: "Microsoft JhengHei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 100%;
  background: linear-gradient(174deg, rgba(13, 12, 15, 0.7)35%, rgba(21, 44, 77, 0.8)87%);
}

</style>
