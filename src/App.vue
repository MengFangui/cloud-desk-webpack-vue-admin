<template>
  <div id="app">
    <Vlayout></Vlayout>
  </div>
</template>

<script>
import Vlayout from '@/views/layout.vue'
export default {
  name: 'app',
  components: {
    Vlayout
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
}
</style>
