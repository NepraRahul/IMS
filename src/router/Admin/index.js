const routes = [
  {
    path: '/admin/dashboard',
    name: 'admin/dashboard',
    component: () => import('@/views/Admin/Dashboard/Dashboard.vue'),
    meta: {
      key: 500,
      pageTitle: 'Admin List',
      breadcrumb: [
        {
          text: 'Admin List',
          active: true,
        },
      ],
    },
  },
  {
    path: '/admin/user-type-permission-settings',
    name: 'admin/user-type-permission-settings',
    component: () => import('@/views/ManageUsersPermissions/UserTypePermissions.vue'),
    meta: {
      key: '7004',
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
    path: '/admin/user-permission-settings',
    name: 'admin/user-permission-settings',
    component: () => import('@/views/ManageUsersPermissions/UserPermissions.vue'),
    meta: {
      key: '7016',
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
    path: '/admin/create-users',
    name: 'create-users',
    component: () => import('@/views/Admin/CreateUserForm/CreateUsers.vue'),
    meta: {
      key: '2000',
      pageTitle: 'Create Users',
      breadcrumb: [
        {
          text: 'Create Users',
          active: true,
        },
      ],
    },
  },
  {
    path: '/admin/users-list',
    name: 'admin-list',
    component: () => import('@/views/Admin/CreateUserForm/UsersList.vue'),
    meta: {
      key: '2002',
      pageTitle: 'Admin List',
      breadcrumb: [
        {
          text: 'Admin List',
          active: true,
        },
      ],
    },
  },
  {
    path: '/admin/user/edit-user/:id',
    name: 'admin/user/edit-user',
    component: () => import('@/views/Admin/CreateUserForm/CreateUsers.vue'),
    // beforeEnter: (to, from, next) => {
    //   checkPermission(to, from, next)
    // },
    meta: {
      requiresAuth: true,
      key: '7009',
      pageTitle: 'Create Company',
      breadcrumb: [
        {
          text: 'Create Company',
          active: true,
        },
      ],
    },
  },
]

export default routes
