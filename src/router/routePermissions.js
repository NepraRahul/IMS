let rights
if (localStorage.getItem('permission')) {
  rights = localStorage.getItem('permission').split(',')
} else {
  rights = []
}
export default {
  rights,
}
