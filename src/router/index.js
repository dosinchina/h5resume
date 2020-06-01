import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/index"
  },
  {
    path: '/index',
    name: 'index',
    component: r => require.ensure([], () => r(require('@/views/index/index')), 'index'),
    meta: {
      title: 'H5简历'
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router