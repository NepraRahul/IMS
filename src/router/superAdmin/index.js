import checkPermission from '@/utils/utils'

const routes = [
  {
    path: '/master-user-management/user/list',
    name: 'master-user-management/user/list',
    component: () => import('@/views/SuperAdmin/CreateCompanyForm/UserList.vue'),
    beforeEnter: (to, from, next) => {
      checkPermission(to, from, next)
    },
    meta: {
      requiresAuth: true,
      key: '2002',
      pageTitle: 'User List',
      breadcrumb: [
        {
          text: 'User List',
          active: true,
        },
      ],
    },
  },
  {
    path: '/master-company-management/company/list',
    name: 'master-company-management/company/list',
    component: () => import('@/views/SuperAdmin/CreateCompanyForm/CompanyList.vue'),
    beforeEnter: (to, from, next) => {
      checkPermission(to, from, next)
    },
    meta: {
      requiresAuth: true,
      key: '10002',
      pageTitle: 'Company List',
      breadcrumb: [
        {
          text: 'Company List',
          active: true,
        },
      ],
    },
  },
  {
    path: '/master-company-management/company/edit-company/:id',
    name: 'master-company-management/company/edit-company',
    component: () => import('@/views/SuperAdmin/CreateCompanyForm/CreateCompany.vue'),
    beforeEnter: (to, from, next) => {
      checkPermission(to, from, next)
    },
    meta: {
      requiresAuth: true,
      key: '10001',
      pageTitle: 'Create Company',
      breadcrumb: [
        {
          text: 'Create Company',
          active: true,
        },
      ],
    },
  },
  {
    path: '/master-company-management/company/create-company',
    name: 'master-company-management/company/create-company',
    component: () => import('@/views/SuperAdmin/CreateCompanyForm/CreateCompany.vue'),
    beforeEnter: (to, from, next) => {
      checkPermission(to, from, next)
    },
    meta: {
      requiresAuth: true,
      key: '10000',
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
