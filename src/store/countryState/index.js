import axios from '../../utils/axios'

export default {
  namespaced: true,
  state: {
    users: '',
  },
  getters: {},
  mutations: {

  },
  actions: {
    getModuleList(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get('master-admin/modules-list', { payload })
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    getCountryList(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get('master-admin/country-list', { payload })
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    getStateList(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('master-admin/state-list', { country_id: payload.country_id })
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    getCityList(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('master-admin/city-list', { state_id: payload.state_id })
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
  },
}
