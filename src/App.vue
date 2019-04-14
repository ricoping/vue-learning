<template>
  <div id="app">
    <my-nav></my-nav>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import MyNav from '@/components/MyNav'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  created () {

  }
}

Vue.component(
  'my-nav', MyNav
)

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
body{
  padding: 0px;
  margin: 0px;
  background: #fcfcfc;

}
</style>
