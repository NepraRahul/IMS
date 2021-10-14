import manage from '../router/routePermissions'

export default function checkPermission(to, from, next) {
  if ('key' in to.meta) {
    if (Object.values(manage).includes(to.meta.key)) { next() }
  } else {
    next('/error-404')
  }
}
