<template>
  <div>
    <h1 class="text-center">Login</h1>

    <b-card class="w-50 mt-5 bg-light ml-auto mr-auto">
      <b-form @submit="onSubmit">

        <b-form-group id="username"
                      label="Username:"
                      label-for="input-username">
          <b-form-input id="input-username"
                        v-model="form.username"
                        required>
          </b-form-input>
        </b-form-group>

        <b-form-group id="password"
                      label="Password:"
                      label-for="input-password">
          <b-form-input id="input-password"
                        v-model="form.password"
                        type="password"
                        required>
          </b-form-input>
        </b-form-group>

        <div class="mt-4">

          <b-button type="submit"
                    variant="primary">Login</b-button>
          <b-button @click="$router.push('/')"
                    variant="secondary"
                    class="ml-2">Cancel</b-button>

          <transition name="fade" mode="out-in">
            <img v-if="loginStatus === 'loading'" key="loading" src="../assets/load.svg" alt="Page Loading" class="login-status-icon rotate" />
            <img v-else-if="loginStatus === 'success'" key="success" src="../assets/success.svg" alt="Login Success" class="login-status-icon" />
            <img v-else-if="loginStatus === 'fail'" key="fail" src="../assets/fail.svg" alt="Login Failed" class="login-status-icon" />
          </transition>

        </div>

      </b-form>
    </b-card>

    <div class="mt-5 text-center">
      postResponse: {{ postResponse }}<br>
      postData: {{ postData }}<br>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      loginStatus: undefined,
      form: {
        'username': '',
        'password': '',
      },
      postResponse: {},
      postData: {},
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.login()
    },
    login() {

      this.loginStatus = 'loading';
      
      let url = this.$store.getters.loginUrl;
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.form)
      })
      .then(response => this.postResponse = response.json())
      .then(data => this.postData = data);

      if ('key' in this.postData) {
        localStorage.setItem('apiToken', this.postData.key);
        this.loginStatus = 'success';
      } else {
        this.loginStatus = 'fail';
      }
    },
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
  margin-top: 0.1rem;
  margin-left: 1rem;
  height: 1.5rem;
  width: 1.5rem;
}

</style>
