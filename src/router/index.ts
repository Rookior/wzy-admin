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
        },
        {
          path: '404',
          component: () => import('../views/errorPage/404.vue'),
          name:'404',
          meta: { title: '404', icon: '404' }
        },
        {
          path: '403',
          component: () => import('../views/errorPage/403.vue'),
          name:'403',
          meta: { title: '403', icon: '403' }
        },
        {
          path: '500',
          component: () => import('../views/errorPage/500.vue'),
          name:'500',
          meta: { title: '500', icon: '500' },
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

// 路由守卫
router.beforeEach((to, from,next) => {
  console.log(to,from)
  if (to.matched.length === 0) {
    console.log(to, '跳转已被拦截')
    next({ path: '/404' })
    return false
  }
  next()
})

export default router
