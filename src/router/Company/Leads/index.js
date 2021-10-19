import checkPermission from '@/utils/utils'

const routes = [
  {
    path: '/lead-generation',
    name: 'lead-generation/',
    component: () => import('@/views/Company/Leads/CreateLeads/CreateLead.vue'),
    beforeEnter: (to, from, next) => {
      checkPermission(to, from, next)
    },
    meta: {
      requiresAuth: true,
      key: '2001',
      pageTitle: 'Create New Lead',
      breadcrumb: [
        {
          text: 'Lead Generation',
          active: true,
        },
        {
          text: 'Create New Lead',
          active: false,
        },
      ],
    },
  },
  {
    path: '/leads-list',
    name: 'leads-list',
    component: () => import('@/views/Company/Leads/CreateLeads/LeadList.vue'),
    beforeEnter: (to, from, next) => {
      checkPermission(to, from, next)
    },
    meta: {
      requiresAuth: true,
      key: '2001',
      pageTitle: 'Leads List',
      breadcrumb: [
        {
          text: 'Lead Generation',
          active: true,
        },
        {
          text: 'Lead List',
          active: false,
        },
      ],
    },
  },

]

export default routes
