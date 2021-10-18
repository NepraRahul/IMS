import axios from '../../../utils/axios'
// import axiosComapny from '../../../utils/axiosCompany'

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
    getServices() {
      return new Promise((resolve, reject) => {
        axios
          .get('/master-admin/service-list')
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    getUsers() {
      return new Promise((resolve, reject) => {
        axios
          .post('/admin/user/list')
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    getUserById(cts, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('/admin/user/getById', payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    getUserType() {
      return new Promise((resolve, reject) => {
        axios
          .get('/admin/user/show-user-type')
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    createUser(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('/admin/user/create', payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    updateUser(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('/admin/user/update', payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
  },
}
