<template>
  <div id="app">
    <NavFooter></NavFooter>
    <router-view/>
  </div>
</template>

<script>
import NavFooter from '@/components/nav'


export default {
  name: 'App',
  components:{
      NavFooter
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
body{
  margin: 0;
  padding: 0;
  font-size: 16px;
}
</style>
