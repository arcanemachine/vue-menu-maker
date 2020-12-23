<template>
  <div>
    <h1 class="text-center">Restaurant List</h1>

    <h4 class="mt-4">Restaurants:</h4>
    <ul>
      <li v-for="restaurant in restaurantList" :key="restaurant.id">{{ restaurant.name }}</li>
    </ul>

    <div class="bottom-links">
      <p><router-link :to="{name: 'home'}">Go to homepage</router-link></p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'RestaurantList',
  data: function () {
    return {
      restaurantList: [
        {
          id: 0,
          name: 'Chez Nic',
          slug: 'chez-nic'
        }
      ]
    }
  }
}
</script>
