<template>
  <footer class="footer text-muted">
    <div class="container text-center align-middle">
      &#169; 2020 Nicholas Moen. Licensed freely under <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank">Creative Commons</a> (CC BY-SA 2.0).
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
}
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4em; /* Set the fixed height of the footer here */
  line-height: 4rem; /* Vertically center the text there */
  background-color: #f5f5f5;
}
</style>
