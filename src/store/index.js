import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import companyStore from '../views/SuperAdmin/CreateCompanyForm/companyStore'
import getCountryList from './countryState'
import userPermission from '../views/ManageUsersPermissions/userPermission'
import userManage from '../views/Admin/CreateUserForm/UserManage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    companyStore,
    getCountryList,
    userPermission,
    userManage,
  },
  strict: process.env.DEV,
})
