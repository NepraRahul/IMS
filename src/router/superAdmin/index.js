const routes = [
  {
    path: '/super-admin/company-list',
    name: 'company-list',
    component: () => import('@/views/SuperAdmin/CompanyList.vue'),
    meta: {
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
    path: '/super-admin/create-company',
    name: 'create-comapany',
    component: () => import('@/views/SuperAdmin/CreateCompany.vue'),
    meta: {
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
