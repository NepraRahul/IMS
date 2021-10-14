import axios from '../../utils/axios'

export default {
  namespaced: true,
  state: {
    users: '',
  },
  getters: {},
  mutations: {},
  actions: {
    getPermissionSettings() {
      return new Promise((resolve, reject) => {
        axios
          .post('admin/user/show-rights')
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    getUsers() {
      return new Promise((resolve, reject) => {
        axios
          .get('admin/user/show-user-name')
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    getUserTypePermissions(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('admin/user/show-user-rights', payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    saveUserPermission(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('admin/user/edit-user-rights', payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    saveUserTypePermissions(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('admin/user/edit-user-rights', payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },
  },
}
