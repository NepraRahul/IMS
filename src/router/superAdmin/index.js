import checkPermission from '@/utils/utils'

const routes = [
  {
    path: '/master-company-management/company/list',
    name: 'master-company-management/company/list',
    component: () => import('@/views/SuperAdmin/CreateCompanyForm/CompanyList.vue'),
    beforeEnter: (to, from, next) => {
      checkPermission(to, from, next)
    },
    meta: {
      requiresAuth: true,
      key: 1001,
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
      key: 1003,
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
      key: 1002,
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
