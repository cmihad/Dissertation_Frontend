import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    adminToken: '',
    isUserInfoUpdate: false
    // your state here
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true // Set isLoggedIn to true on login
    },
    logout(state) {
      state.isLoggedIn = false // Set isLoggedIn to false on logout
    },
    isUserInfoUpdate(state) {
      state.isUserInfoUpdate = true
    }
  },
  actions: {
    // your actions here
  },
  getters: {
    // your getters here
  }
})
