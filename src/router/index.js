import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail', 
      component: () => import('../views/Detail.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit', 
      component: () => import('../views/Edit.vue')
    }
  ]
})

export default router
