// core

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugins
import './plugins/axios'
import './plugins/element-ui'

// filters
import './filters/capitalize'
import './filters/yesAndNo'

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
