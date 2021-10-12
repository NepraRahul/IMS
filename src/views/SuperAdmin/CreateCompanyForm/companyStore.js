/* eslint-disable no-unused-vars */
import axios from './axios'

export default {
  namespaced: true,
  state: {
    users: '',
  },
  getters: {},
  mutations: {
    setUser(state, response) {
      state.users = response.data.data
    },
  },
  actions: {
    getCompanyList({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .post('master-admin/company/list')
          .then(response => {
            resolve(response)
            commit('setUser', response)
          })
          .catch(error => reject(error))
      })
    },
    getCompanybyId(ctx, payload) {
      const { company_id } = payload
      return new Promise((resolve, reject) => {
        axios
          .post('master-admin/company/getById', { company_id })
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    createCompany(ctx, payload) {
      const { data } = payload.data
      return new Promise((resolve, reject) => {
        axios
          .post('master-admin/company/create', { username: data.username })
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    updataCompany({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .post('master-admin/company/list')
          .then(response => {
            resolve(response)
            commit('setUser', response)
          })
          .catch(error => reject(error))
      })
    },
  },
}
