<template>
  <div id="app">

    <nav-bar></nav-bar>

    <div class="container">
      <transition mode="out-in">
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
  components: { NavBar, PageFooter },
  methods: {
    getUserLoginStatus() {
      this.$store.dispatch('getUserLoginStatus');
    }
  },
  mounted() {
    this.$nextTick(() => this.getUserLoginStatus())
  }
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

.v-enter-active, .v-leave-active {
  transition: opacity 0.33s ease;
}

.v-enter, .v-leave-to {
  opacity: 0;
}

.v-move {
  height: 0;
}

</style>
