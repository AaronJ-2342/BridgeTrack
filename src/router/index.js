import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import StudentPortalView from '@/views/StudentPortalView.vue'
import StaffDashboardView from '@/views/StaffDashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/portal',
      name: 'portal',
      component: StudentPortalView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: StaffDashboardView,
    },
  ],
})

export default router
