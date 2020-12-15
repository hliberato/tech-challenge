import Vue from 'vue'

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  const val = value.toString()
  return val.charAt(0).toUpperCase() + val.slice(1)
})
