<template>
  <div id="app">
    <!--<transition name="fade" mode="out-in">-->
      <!--<router-view></router-view>-->
    <!--</transition>-->
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/common/Home.vue'

export default {
  name: 'app',
  components: {
      Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
</style>
