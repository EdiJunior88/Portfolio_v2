import { createRouter, createWebHistory } from 'vue-router'
import HomeMain from '@/views/HomeMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeMain
    }
  ]
})

export default router
