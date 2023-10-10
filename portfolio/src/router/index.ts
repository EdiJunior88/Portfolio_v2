import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('@/views/HomeView.vue')
const hability = () => import('@/page/HabilityPage.vue')
const about = () => import('@/page/AboutPage.vue')
const projects = () => import('@/page/ProjectPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/habilidades',
      name: 'hability',
      component: hability
    },
    {
      path: '/sobre-mim',
      name: 'about',
      component: about
    },
    {
      path: '/projetos',
      name: 'project',
      component: projects
    }
  ]
})

export default router
