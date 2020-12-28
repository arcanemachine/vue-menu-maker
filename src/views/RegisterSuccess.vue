<template>
  <div class="text-center">
    <h1>Registration Successful!</h1>
    
    <p>We have sent a confirmation email to {{ $route.params.email }}.</p>
    <p>Please check your email inbox for your activation link.</p>

  </div>
</template>

<script>

export default {
  name: 'registerSuccess',
}
</script>
