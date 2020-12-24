<template>
  <b-navbar variant="danger" type="dark">

    <b-link :to="{name: 'home'}">
      <b-navbar-brand>Menu Maker</b-navbar-brand>
    </b-link>

    <!-- Login/Registration -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item :to="{name: 'login'}">Login</b-nav-item>
    </b-navbar-nav>

  </b-navbar>
</template>

<script>
export default {
  name: 'App',
}
</script>


