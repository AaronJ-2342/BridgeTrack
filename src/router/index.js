import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import StudentPortal from '@/views/Student/StudentPortal.vue'
import StudentRegistration from '@/views/Student/StudentRegistration.vue'
import DashboardView from '@/views/Dashboard.vue'
import LoginView from '@/views/Auth/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { hideNav: true },
    },
    {
      path: '/register',
      name: 'register',
      component: StudentRegistration,
      meta: { hideNav: true },
    },
    {
      path: '/portal',
      name: 'portal',
      component: StudentPortal,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
  ],
})

export default router
