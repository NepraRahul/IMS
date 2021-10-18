import checkPermission from '@/utils/utils'
import leads from './Leads'

const routes = [
  ...leads,
  {
    path: '/user-management/company-user/list',
    name: 'user-management/company-user/list',
    component: () => import('@/views/Company/CreateUserForm/UsersList.vue'),
    beforeEnter: (to, from, next) => {
      checkPermission(to, from, next)
    },
    meta: {
      requiresAuth: true,
      key: '1001',
      pageTitle: 'List Company User',
      breadcrumb: [
        {
          text: 'List Company User',
          active: true,
        },
      ],
    },
  },
  {
    path: '/company/create-user',
    name: 'company/create-user',
    component: () => import('@/views/Company/CreateUserForm/CreateUsers.vue'),
    beforeEnter: (to, from, next) => {
      checkPermission(to, from, next)
    },
    meta: {
      requiresAuth: true,
      key: '2000',
      pageTitle: 'Company Create User',
      breadcrumb: [
        {
          text: 'Company Create User',
          active: true,
        },
      ],
    },
  },
  {
    path: '/company/user/edit-user/:id',
    name: 'company/user/edit-user',
    component: () => import('@/views/Company/CreateUserForm/CreateUsers.vue'),
    beforeEnter: (to, from, next) => {
      checkPermission(to, from, next)
    },
    meta: {
      requiresAuth: true,
      key: '1001',
      pageTitle: 'Company User Edit',
      breadcrumb: [
        {
          text: 'Company User Edit',
          active: true,
        },
      ],
    },
  },
  {
    path: '/company/user-type-permission-settings',
    name: 'company/user-type-permission-settings',
    component: () => import('@/views/Company/ManageUsersPermissions/UserTypePermissions.vue'),
    meta: {
      key: 1004,
      pageTitle: 'Permission Settings',
      breadcrumb: [
        {
          text: 'User Permissions',
          active: true,
        },
      ],
    },
  },
  {
    path: '/company/user-permission-settings',
    name: 'company/user-permission-settings',
    component: () => import('@/views/Company/ManageUsersPermissions/UserPermissions.vue'),
    meta: {
      key: 1004,
      pageTitle: 'Permission Settings',
      breadcrumb: [
        {
          text: 'User Permissions',
          active: true,
        },
      ],
    },
  },

]

export default routes
