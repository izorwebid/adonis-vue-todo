import HTTP from '../http'
import router from '../router/index'

export default {
  namespaced: true,
  state: {
    registerEmail: 'testing@mail.com',
    registerPassword: '1234',
    registerError: null,
    token: null
  },
  actions: {
    logout ({ commit }) {
      commit('setToken', null)
      router.push('/')
    },
    register ({ commit, state }) {
      commit('setRegisterError', null)
      return HTTP().post('/auth/register', {
        email: state.registerEmail,
        password: state.registerPassword
      })
        .then(({ data }) => {
          commit('setToken', data.token)
          router.push('/')
        })
        .catch(() => {
          commit('setRegisterError', 'An error has occured trying to create your account')
        })
    }
  },
  getters: {
    isLoggedIn (state) {
      return !!state.token
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setRegisterError (state, error) {
      state.registerError = error
    },
    setRegisterEmail (state, email) {
      state.registerEmail = email
    },
    setRegisterPassword (state, password) {
      state.registerPassword = password
    }
  }
}
