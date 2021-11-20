export const state = () => ({
  navOpen: false,
})

export const getters = {
}

export const mutations = {
  SET_NAV(state) {
      state.navOpen = !state.navOpen
  },
  SET_CLOSE_NAV(state) {
      state.navOpen = false
  },
  SET_OPEN_NAV(state) {
      state.navOpen = true
  },
}

export const actions = {
  toggleNav({ commit }) {
      commit('SET_NAV');
    },
  closeNav({ commit }) {
      commit('SET_CLOSE_NAV')
  },
  openNav({ commit }) {
      commit('SET_OPEN_NAV')
  },
}
