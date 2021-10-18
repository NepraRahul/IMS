import Vue from 'vue'
import VueRouter from 'vue-router'
import checkPermission from '../utils/utils'
import superRoutes from './superAdmin'
import adminRoutes from './Admin'
import companyRoutes from './Company'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    ...superRoutes,
    ...adminRoutes,
    ...companyRoutes,
    {
      path: '/reset-password',
      name: 'auth-reset-password',
      component: () => import('@/views/PasswordReset/ResetPassword.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/forgot-password',
      name: 'auth-forgot-password',
      component: () => import('@/views/PasswordReset/ForgotPassword.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        requiresAuth: false,
        layout: 'full',
      },
    },
    {
      path: '/user-login',
      name: 'user-login',
      component: () => import('@/views/Company/Login.vue'),
      meta: {
        requiresAuth: false,
        layout: 'full',
      },
    },
    {
      path: '/manage-users/permission-setting',
      name: 'manage-users/permission-setting',
      component: () => import('@/views/ManageUsersPermissions/UserTypePermissions.vue'),
      beforeEnter: (to, from, next) => {
        checkPermission(to, from, next)
      },
      meta: {
        key: 1004,
        pageTitle: 'Permission Setting',
        breadcrumb: [
          {
            text: 'Manage Users',
            active: false,
          },
          {
            text: 'Permission Settings',
            active: true,
          },
        ],
      },
    },
    {
      path: '/change-password',
      name: 'error-4044',
      component: () => import('@/views/PasswordReset/ChangePassword.vue'),
      meta: {
        pageTitle: 'Change Password',
        breadcrumb: [
          {
            text: 'Change Passowrd',
            active: true,
          },
        ],
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        requiresAuth: true,
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

function isLoggedIn() {
  return localStorage.getItem('accessToken')
}
/* function userType() {
  return localStorage.getItem('userData').user_type
} */

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      })
    } else {
      next()
    }
  } else if (!to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      router.push({ path: '/master-company-management/company/list' })
    } else if (isLoggedIn()) {
      router.push({ path: '/admin/dashboard' })
    } else {
      next()
    }
  } else {
    next({
      path: '/login',
    })
  }
})
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   // Check for protected route
//   if (requiresAuth && !isAuthenticated) next('login')
//   else next()
// })
// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
