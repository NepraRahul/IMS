import manage from '../router/routePermissions'

export default function checkRoute(id) {
  if (Object.values(manage).includes(id)) return true
  return false
}
