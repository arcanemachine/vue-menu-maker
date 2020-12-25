<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    this.logout();
  },
  methods: {
    logout() {
      this.$store.dispatch('userLogout');
      this.$router.push({name: 'home'});
    }
  }
}
</script>

