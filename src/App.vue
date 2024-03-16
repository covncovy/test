<template>
  <MainHeader />
  
  <RouterView :key="$route.params.id"/>

  

  <MainFooter />
</template>

<script>
import { RouterView } from 'vue-router';
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  components: {
    MainHeader,
    MainFooter,
  }
}
</script>
<style lang="scss">
@import "./style/main.scss"
</style>
