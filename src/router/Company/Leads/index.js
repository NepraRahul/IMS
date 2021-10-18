import checkPermission from '@/utils/utils'

const routes = [
  {
    path: '/company/create-lead',
    name: 'company/create-lead',
    component: () => import('@/views/Company/Leads/CreateLeads/CreateLead.vue'),
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

]

export default routes
