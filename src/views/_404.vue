<template>
  <div class="text-center">
    <h1>404: Page Not Found</h1>

    <h4>The page you are looking for could not be found.</h4>

    <p class="mt-5 font-weight-bold">
      <router-link :to="{name: 'home'}">Return to homepage</router-link>
    </p>

  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

