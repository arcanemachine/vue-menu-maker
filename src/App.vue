<template>
  <div id="app">

    <b-navbar variant="primary" type="dark">
      <b-navbar-brand>Hello World!</b-navbar-brand>
    </b-navbar>

    <img alt="Vue logo" src="./assets/logo.png">
    <router-view :key="$route.path"></router-view>
    <HelloWorld :msg="$store.getters.helloWorld"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
