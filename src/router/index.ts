import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/layout/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'home',
          component: () => import('../views/HomeView.vue'),
          name: 'Home',
          meta: { title: 'Home', icon: 'home' }
        },
        {
          path: 'about',
          component: () => import('../views/AboutView.vue'),
          name: 'About',
          meta: { title: 'About', icon: 'about' }
        }
      ]
    },
    {
      path: '/dashboard',
      component: Layout,
      redirect: '/dashboard/index',
      children: [
        {
          path: 'index',
          component: () => import('../views/dashboard/index.vue'),
          name: 'Dashboard',
          meta: { title: 'Dashboard', icon: 'dashboard' }
        }
      ]
    }
  ]
})

export default router
