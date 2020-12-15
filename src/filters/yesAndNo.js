import Vue from 'vue'

Vue.filter('yes-no', function (value) {
  return value ? 'Yes' : 'No'
})
