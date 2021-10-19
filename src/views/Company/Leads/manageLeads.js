import axiosComapny from '../../../utils/axiosCompany'
import axios from '../../../utils/axios'

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
    getVendors(cts, payload) {
      return new Promise((resolve, reject) => {
        axiosComapny
          .post('/lead-generate/auto-complate-vendor-list', payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    getDepartments() {
      return new Promise((resolve, reject) => {
        axios
          .get('/master-admin/department-list')
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    getCustomersTypeList() {
      return new Promise((resolve, reject) => {
        axios
          .post('/master-admin/customer-type-list')
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    createLead(ctx, payload) {
      return new Promise((resolve, reject) => {
        axiosComapny
          .post('/lead-generate/save-lead-generation', payload, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },

  },
}
