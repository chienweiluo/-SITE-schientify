<template>
  <div class="hello">
    <div class="top">
      <app-aside></app-aside>
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import AppAside from './aside.vue'
import AppFooter from './footer.vue'
import AppMain from './main.vue'

export default {
  name: 'hello',
  data() {
    return {
      }
  },
  components: {
    AppMain: AppMain,
    AppAside: AppAside,
    AppFooter: AppFooter
  },
  mounted() {



  }
}

</script>
