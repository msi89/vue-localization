import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: { code: 'en', label: 'English', iso: 'us' },
  },
  mutations: {
    SETLOCALE(state, lang) {
      state.locale = lang
    }
  },
  actions: {

  }
})
