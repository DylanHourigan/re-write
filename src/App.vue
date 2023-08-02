<template>
  <div id="app">
    <router-view/>
    <HeaderNav />
    <HomePage/>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';
import HomePage from './views/Homepage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    HeaderNav
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
