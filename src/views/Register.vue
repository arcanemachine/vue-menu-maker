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
                        @keyup="usernameCheck()"
                        :style="usernameFormInputStyle"
                        required>
          </b-form-input>
          <transition>
            <small v-show="usernameHelpText" :class="usernameHelpTextClass" mode="out-in">{{ usernameHelpText }}</small>
          </transition>
        </b-form-group>

        <b-form-group id="email"
                      label="Email:"
                      label-for="input-email"
                      type="email">
          <b-form-input id="input-email"
                        v-model="form.email"
                        @keyup="emailCheck()"
                        :style="emailFormInputStyle"
                        required>
          </b-form-input>
          <transition mode="out-in">
            <small v-show="emailHelpText" :class="emailHelpTextClass" mode="out-in">{{ emailHelpText }}</small>
          </transition>
        </b-form-group>

        <b-form-group id="password"
                      label="Password:"
                      label-for="input-password">
          <b-form-input id="input-password"
                        v-model="form.password1"
                        @keyup="passwordCheck()"
                        type="password"
                        required>
          </b-form-input>
        </b-form-group>

        <b-form-group id="password"
                      label="Confirm password:"
                      label-for="input-password">
          <b-form-input id="input-password"
                        v-model="form.password2"
                        type="password"
                        @keyup="passwordCheck()"
                        :style="passwordFormInputStyle"
                        required>
          </b-form-input>
          <transition mode="out-in">
            <small v-show="passwordHelpText" :class="passwordHelpTextClass" mode="out-in">{{ passwordHelpText }}</small>
          </transition>
        </b-form-group>

        <div>

          <b-button type="submit" variant="primary">Register</b-button>
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

      usernameFormInputStyle: {"margin-bottom": "2.5em"},
      usernameHelpText: '',
      usernameHelpTextClass: {
        "text-muted": true,
      },
      usernameTimeout: undefined,

      emailFormInputStyle: {"margin-bottom": "2.5em"},
      emailHelpText: '',
      emailHelpTextClass: {
        "text-muted": true,
      },
      emailTimeout: undefined,

      passwordFormInputStyle: {"margin-bottom": "2.5em"},
      passwordHelpText: '',
      passwordHelpTextClass: {
        "text-muted": true,
      },
      passwordTimeout: undefined,

    }
  },
  methods: {
    usernameCheck() {

      clearTimeout(this.usernameTimeout);
      this.usernameHelpText = '';
      this.usernameFormInputStyle = {"margin-bottom": "2.5em"};
      if (!this.form.username) {return false;} // do not continue if form empty

      this.usernameTimeout = setTimeout(() => {
        let checkUrl = this.$helpers.urls.isUsernameAvailable(this.form.username);
        fetch(checkUrl)
          .then(response => response.json())
          .then(data => {
            if (data.isUsernameAvailable === true) {
              this.usernameFormInputStyle = {};
              this.usernameHelpText = 'This username is available';
              this.usernameHelpTextClass = ['text-success'];
            } else {
              this.usernameFormInputStyle = {};
              this.usernameHelpText = 'This username is not available';
              this.usernameHelpTextClass = ['text-danger'];
            }
          })
      }, 750);
    },
    emailIsValid(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    emailCheck() {
      clearTimeout(this.emailTimeout);
      this.emailHelpText = '';
      this.emailFormInputStyle = {"margin-bottom": "2.5em"};
      if (!this.form.email) {return false;} // do not continue if form empty

      this.emailTimeout = setTimeout(() => {

        if (!this.emailIsValid(this.form.email)) {
          this.emailFormInputStyle = {};
          this.emailHelpText = 'Please enter a valid email address';
          this.emailHelpTextClass = ['text-danger'];
          return false;
        }

        let checkUrl = this.$helpers.urls.isEmailAvailable(this.form.email);
        fetch(checkUrl)
          .then(response => response.json())
          .then(data => {
            if (data.isEmailAvailable === true) {
              this.emailFormInputStyle = {};
              this.emailHelpText = 'This email address is available';
              this.emailHelpTextClass = ['text-success'];
            } else {
              this.emailFormInputStyle = {};
              this.emailHelpText = 'This email address is not available';
              this.emailHelpTextClass = ['text-danger'];
            }
          })

      }, 750);
    },
    passwordCheck() {
      clearTimeout(this.passwordTimeout);

      this.passwordHelpText = '';
      this.passwordFormInputStyle = {"margin-bottom": "2.5em"};
      if (!this.form.password1 || !this.form.password2) {return false;}

      // password is too short
      if (this.form.password1.length < 8) {
        this.passwordFormInputStyle = {};
        this.passwordHelpText = 'Password must be at least 8 characters long';
        this.passwordHelpTextClass = {'text-danger': true};
        return false;
      }

      this.passwordTimeout = setTimeout(() => {
        if (this.form.password1 === this.form.password2) {

          // password is weak
          this.passwordFormInputStyle = {};
          this.passwordHelpText = 'Passwords match';
          this.passwordHelpTextClass = {'text-success': true};
        } else {
          // passwords do not match
          this.passwordFormInputStyle = {};
          this.passwordHelpText = 'Passwords do not match';
          this.passwordHelpTextClass = {'text-danger': true};
        }
      }, 400)
    },
    onSubmit(event) {
      event.preventDefault();
      this.register();
    },
    register() {
      this.remoteStatus = 'loading';

      let registerUrl = this.$helpers.urls.register;
      fetch(registerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.form)
      })
      .then(response => response.json())
      .then(data => {
        if ('key' in data) {
          this.remoteStatus = 'success';
          this.$router.push({
            name: 'registerSuccess',
            params: {
              'email': this.form.email
            }
          });
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
