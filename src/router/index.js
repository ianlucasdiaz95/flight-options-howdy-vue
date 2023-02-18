import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/FlightsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'flights',
      component: () => import('../layouts/BaseLayout.vue'),
      children: [
        { path: 'flights', name: 'FlightsView', component: () => import('../views/FlightsView.vue') }
      ]
    }
  ]
})

export default router
