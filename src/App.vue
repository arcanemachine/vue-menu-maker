<template>
  <div id="app">

    <nav-bar></nav-bar>

    <div class="container">
      <router-view id="content" :key="$route.path" class="mt-3"></router-view>
    </div>

    <page-footer></page-footer>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'App',
  components: { NavBar, PageFooter }
}
</script>

<style>

ul {
  list-style-type: '- ';
}

.bottom-links {
  margin-top: 3rem;
  font-weight: bold;
}

</style>
