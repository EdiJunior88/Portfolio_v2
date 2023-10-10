import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/habilidades',
      name: 'hability',
      component: () => import('@/page/HabilityPage.vue')
    },
    {
      path: '/sobre-mim',
      name: 'about',
      component: () => import('@/page/AboutPage.vue')
    },
    {
      path: '/projetos',
      name: 'project',
      component: () => import('@/page/ProjectPage.vue')
    }
  ]
})

export default router
