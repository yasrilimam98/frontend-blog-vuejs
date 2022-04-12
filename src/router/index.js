import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import About from '../views/About/index.vue'
import Contact from '../views/Contact/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router