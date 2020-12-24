import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		userLoggedIn: false,
		loginUrl: 'http://192.168.1.120:8000/api/v1/rest-auth/login/'
  },
  getters:{
    loginUrl (state) {
      return state.loginUrl;
    }
  }
})
