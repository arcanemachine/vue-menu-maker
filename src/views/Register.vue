<template>
  <div>
    <h1 class="text-center">Register New User</h1>

    <b-card class="w-50 mt-5 bg-light ml-auto mr-auto">
      <b-form @submit="onSubmit">

        <b-form-group id="username"
                      label="Username:"
                      label-for="input-username">
          <b-form-input id="input-username"
                        v-model="form.username"
                        @keyup="checkUsername()"
                        required>
          </b-form-input>
          <transition mode="out-in">
            <small v-if="usernameHelpText" :class="usernameHelpTextClass">{{ usernameHelpText }}</small>
          </transition>
        </b-form-group>

        <b-form-group id="password"
                      label="Password:"
                      label-for="input-password"
                      class="mt-5">
          <b-form-input id="input-password"
                        v-model="form.password"
                        type="password"
                        required>
          </b-form-input>
        </b-form-group>

        <b-form-group id="password"
                      label="Confirm password:"
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
          <b-button @click="$router.go(-1)"
                    variant="secondary"
                    class="ml-2">Cancel</b-button>

          <transition-group mode="out-in">
            <img v-if="remoteStatus === 'loading'" key="loading" src="../assets/loading.svg" alt="Page Loading" class="login-status-icon rotate" />
            <img v-else-if="remoteStatus === 'success'" key="success" src="../assets/success.svg" alt="Login Success" class="login-status-icon" />
            <img v-else-if="remoteStatus === 'fail'" key="fail" src="../assets/fail.svg" alt="Login Failed" class="login-status-icon" />
          </transition-group>

        </div>

      </b-form>
    </b-card>

    <div class="deleteme text-center mt-4">
    </div>


  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      remoteStatus: undefined,

      form: {
        "username": "",
        "email": "",
        "password1": "",
        "password2": "",
      },

      usernameHelpText: 'Enter your desired username',
      usernameHelpTextClass: {"text-muted": true},
      timeout: undefined,

      postData: {},

    }
  },
  computed: {
    dUrl() {
      return 'http://192.168.1.120:8000/api/v1/users/is-username-available/' + this.form.username + '/';
    }
  },
  methods: {
    checkUsername() {
      let myUrl = this.dUrl;
      clearTimeout(this.timeout);
      this.usernameHelpText = '';
      this.timeout = setTimeout(() => {
        fetch(myUrl)
          .then(response => response.json()) // delete this line
          .then(data => {
            if (data.isUsernameAvailable === true) {
              this.usernameHelpText = 'This username is available';
              this.usernameHelpTextClass = {'text-success': true};
            } else {
              this.usernameHelpText = 'This username is taken';
            }
          })
      }, 750);
    },
    onSubmit(event) {
      event.preventDefault()
      this.register()
    },
    login() {
      let url = this.$store.getters.loginUrl;
      this.remoteStatus = 'loading';

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.form)
      })
      .then(response => this.postResponse = response.json())
      .then(data => {
        this.postData = data;
        if ('key' in this.postData) {
          this.remoteStatus = 'success';
          this.$store.dispatch('userLogin', this.postData.key);
          this.$router.push({name: 'home'});
        } else {
          this.remoteStatus = 'fail';
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
