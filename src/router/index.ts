import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/layout/index.vue'

import { useRouteStore } from '@/stores/route'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '登录'
      },
      component: () => import('../views/login/index.vue')
    },
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
          name: '404',
          meta: { title: '404', icon: '404' }
        },
        {
          path: '403',
          component: () => import('../views/errorPage/403.vue'),
          name: '403',
          meta: { title: '403', icon: '403' }
        },
        {
          path: '500',
          component: () => import('../views/errorPage/500.vue'),
          name: '500',
          meta: { title: '500', icon: '500' }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/errorPage/404.vue')
    }
    // {
    //   path: '/dashboard',
    //   component: Layout,
    //   redirect: '/dashboard/index',
    //   children: [
    //     {
    //       path: 'index',
    //       component: () => import('../views/dashboard/index.vue'),
    //       name: 'Dashboard',
    //       meta: { title: 'Dashboard', icon: 'dashboard' }
    //     }
    //   ]
    // }
  ]
})

const modules = import.meta.glob('../views/*/*.vue')

// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  const route = useRouteStore()
  const { hasRoute, list } = route

  const user = useUserStore()
  const { token } = user

  if (to.path === '/login') {
    next()
  }
  if (!token) {
    next({ path: '/login' })
  }

  if (!hasRoute) {
    list.forEach((element) => {
      const route = {
        path: element.path,
        component: Layout,
        redirect: element.path + '/' + element.children[0].path,
        children: element.children.map((child) => {
          return {
            path: child.path,
            component: modules[`${child.component}.vue`],
            name: child.name,
            meta: { title: child.meta.title }
          }
        })
      }
      router.addRoute(route)
    })
    route.setHasRoute(true)
    next({ ...to, replace: true })
  } else if (to.matched.length === 0) {
    console.log(to, '跳转已被拦截')
    next({ path: '/404', replace: true })
  } else {
    next()
  }
})

export default router
