<template>
  <div class="text-center">

    <h1>Email Confirmation Complete</h1>

    <p class="mt-2">{{ message }}</p>

    <transition>
      <p><router-link :to="{name: 'login'}" class="font-weight-bold">Login</router-link></p>
    </transition>

  </div>
</template>

<script>

export default {
  name: 'Home',
  props: ['confirmToken'],
  data() {
    return {
      registrationComplete: false,
      message: 'Confirming your registration...',
    }
  },
  mounted() {
    this.emailConfirm();
  },
  methods: {
    emailConfirm() {
      let registerUrl = this.$helpers.urls.registerConfirmEmail;
      fetch(registerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"key": this.confirmToken})
      })
      .then(response => response.json())
      .then(data => {
        if (data.detail === 'ok') {
          this.message = 'Your account is now active';
          this.registrationComplete = true;
        }
      });
    },
    remoteStatusToggle() {
      if (!this.remoteStatus || this.remoteStatus === 'fail') {
        this.remoteStatus = 'loading';
      } else if (this.remoteStatus === 'loading') {
        this.remoteStatus = 'success';
      } else {
        this.remoteStatus = 'fail';
      }
    }
  }
}
</script>

<style>

@keyframes a-rotate {
  100% {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: a-rotate 3s linear infinite;
}

.login-status-icon {
  position: absolute;
  margin-top: 0.5rem;
  margin-left: 1rem;
  height: 1.5rem;
  width: 1.5rem;
}

</style>
