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
        </div>

      </b-form>
    </b-card>

    <div class="mt-5 text-center">
      postResponse: {{ postResponse }}<br>
      postData: {{ postData }}<br>
      <button @click="debug()" class="mt-2 btn btn-primary">Debug</button>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
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
      console.log('login()');
      this.login()
    },
    login() {
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
        console.log(this.postData.key);
      }
    },
  }
}
</script>

