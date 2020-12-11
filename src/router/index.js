import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {
        path: '/',
        name: 'SearchHome',
        component: () => import(/* webpackChunkName: "search-home" */ '../components/SearchHome.vue')
      },
      {
        path: '/search',
        name: 'SearchResults',
        component: () => import(/* webpackChunkName: "search-results" */ '../components/SearchResults.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
