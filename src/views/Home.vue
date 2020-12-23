<template>
  <div>
    <h1 class="text-center">Menu Maker</h1>

    <p class="mt-5 font-weight-bold">
      <router-link :to="{name: 'restaurantList'}">View Restaurants</router-link>
    </p>

  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

