// core

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './api'

// plugins
import './plugins/axios'
import './plugins/element-ui'

// styles
import './styles/index.scss'

// global
import PokeIcon from './components/PokemonIcon'
Vue.component('pokemon-icon', PokeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
