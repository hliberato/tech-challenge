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
        name: 'home',
        component: () => import(/* webpackChunkName: "home-view" */ '../views/Home.vue')
      },
      {
        path: '/generations',
        name: 'generations',
        component: () => import(/* webpackChunkName: "generations-view" */ '../views/Generations.vue')
      },
      {
        path: '/generations/:generationName',
        name: 'generation',
        component: () => import(/* webpackChunkName: "generation-view" */ '../views/Generation.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
