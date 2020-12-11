import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "container-view" */ '../views/Container.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home-view" */ '../views/Home.vue')
      },
      {
        path: '/generations',
        name: 'Generations',
        component: () => import(/* webpackChunkName: "generations-view" */ '../views/Generations.vue')
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
