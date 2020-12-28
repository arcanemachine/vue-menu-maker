import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		userLoggedIn: undefined,
		userToken: undefined
  },
  getters: {
    userLoggedIn (state) {
      return state.userLoggedIn;
    },
    userToken (state) {
      return state.userToken;
    }
  },
  mutations: {
    userLoggedIn (state, bool) {
      state.userLoggedIn = bool;
    },
    userToken (state, token) {
      state.userToken = token;
    }
  },
  actions: {
    getUserLoginStatus (context) {
      if (localStorage.getItem('apiToken')) {
        context.commit('userLoggedIn', true);
        context.commit('userToken', localStorage.getItem('apiToken'));
      }
    },
    userLogin (context, token) {
      localStorage.setItem('apiToken', token);
      context.commit('userLoggedIn', true);
      context.commit('userToken', token);
    },
    userLogout (context) {
      localStorage.removeItem('apiToken');
      context.commit('userLoggedIn', undefined);
      context.commit('userToken', undefined);
    }
  }
})
