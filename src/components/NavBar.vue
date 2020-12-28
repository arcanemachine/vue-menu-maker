<template>
  <b-navbar variant="danger" type="dark" class="navbar-main">

    <b-link :to="{name: 'home'}">
      <b-navbar-brand>Menu Maker</b-navbar-brand>
    </b-link>

    <!-- Login/Registration -->
    <b-navbar-nav v-if="$store.getters.userLoggedIn" key="logged-in" class="ml-auto">
      <b-nav-item :to="{name: 'logout'}" class="active">Logout</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav v-if="!$store.getters.userLoggedIn" key="logged-out" class="ml-auto">
      <b-nav-item :to="{name: 'register'}" class="active">Register</b-nav-item>
      <b-nav-item :to="{name: 'login'}" class="active">Login</b-nav-item>
    </b-navbar-nav>

  </b-navbar>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.navbar-main {
  background-color: #DD2222;
}
</style>

