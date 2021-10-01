const routes = [
  {
    path: '/admin/create-users',
    name: 'create-users',
    component: () => import('@/views/Admin/CreateUsers.vue'),
    meta: {
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
    path: '/admin/admin-list',
    name: 'admin-list',
    component: () => import('@/views/Admin/AdminList.vue'),
    meta: {
      pageTitle: 'Admin List',
      breadcrumb: [
        {
          text: 'Admin List',
          active: true,
        },
      ],
    },
  },
]

export default routes
