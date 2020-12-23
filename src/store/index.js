import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    helloWorld: 'Hello World!'
  },
  getters:{
    helloWorld (state) {
      return state.helloWorld;
    }
  }
})
