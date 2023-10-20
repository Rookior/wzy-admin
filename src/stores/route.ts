import { defineStore } from 'pinia'
export const useRouteStore = defineStore('route', {
  // persist: true,
  state: () => {
    return {
      hasRoute: false,
      list: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          meta: { title: 'Dashboard', icon: 'Odometer' },
          children: [
            {
              path: 'analysis',
              name: 'DashboardAnalysis',
              component: '../views/dashboard/analysis',
              meta: { title: '分析页' }
            },
            {
              path: 'monitor',
              name: 'DashboardMonitor',
              component: '../views/dashboard/monitor',
              meta: { title: '监控页' }
            }
          ]
        },
        {
          path: '/form',
          name: 'form',
          meta: { title: '表单页', icon: 'Odometer' },
          children: [
            {
              path: 'basicform',
              name: 'basicform',
              component: '../views/form/basicform',
              meta: { title: '基础表单' }
            },
            {
              path: 'stepform',
              name: 'stepform',
              component: '../views/form/stepform',
              meta: { title: '分布表单' }
            },{
              path: 'search',
              name: 'search',
              meta: { title: '搜索列表' },
              children:[
                {
                  path: 'articles',
                  name: 'articles',
                  component: '../views/search/articles',
                  meta: { title: '文章' }
                },{
                  path: 'projects',
                  name: 'projects',
                  component: '../views/search/projects',
                  meta: { title: '项目' }
                }
              ]
            }
          ]
        },
        {
          path: '/about',
          component: '../views/AboutView',
          name: 'About',
          meta: { title: 'About', icon: 'Menu' }
        }
      ]
    }
  },
  actions: {
    setHasRoute(flag: boolean) {
      this.hasRoute = flag
    }
  }
})
