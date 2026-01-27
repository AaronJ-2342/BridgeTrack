<script setup>
import { useAuthStore } from '@/stores/auth'
import InstructorDashboard from '@/views/Staff/InstructorDashboard.vue'
import AdminDashboard from '@/views/Staff/AdminDashboard.vue'

const auth = useAuthStore()
</script>

<template>
  <InstructorDashboard v-if="auth.isInstructor" />
  <AdminDashboard v-else-if="auth.isAdmin" />
  <InstructorDashboard v-else />
</template>
