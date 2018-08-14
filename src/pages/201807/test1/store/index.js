import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => {
  const store = new Vuex.Store({
    state: {
      count: localStorage.count || 1
    },
    mutations: {
      updateCount (state, { num }) {
        state.count = num
        localStorage.count = num
      }
    },
    getters: {
      getCountArr (state) {
        const countStr = `${state.count}`
        return countStr.split('')
      }
    },
    actions: {
      updateCountAsync (store, { num, time }) {
        setTimeout(() => {
          store.commit('updateCount', {num: num})
        }, time)
      }
    }
  })
  return store
}
