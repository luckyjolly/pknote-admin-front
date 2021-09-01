import { createStore } from 'vuex'
import menuStore from './modules/menu'

export interface GlobalStore {
  count: number
}

const store = createStore({
  state() {
    return {
      count: 0
    } as GlobalStore
  },
  mutations: {
    increase(state: GlobalStore) {
      state.count++
    }
  },
  modules: {
    menuStore
  }
})

export default store
