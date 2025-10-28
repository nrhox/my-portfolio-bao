import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import PortofolioView from '../views/PortofolioView.vue'
import WebsiteView from '../views/WebsiteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/portofolio',
      name: 'portofolio',
      component: PortofolioView,
    },
    {
      path: '/website',
      name: 'website',
      component: WebsiteView,
    },
  ],
})

export default router
