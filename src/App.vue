<template>
  <div id="app">

    <nav-bar></nav-bar>

    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view id="content" :key="$route.path" class="mt-3"></router-view>
      </transition>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.33s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
