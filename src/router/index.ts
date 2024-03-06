import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/example'
    },
    {
      path: '/example',
      component: () => import('@/views/ExampleView.vue')
    }
  ]
})

export default router
