import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const role = ref('instructor')
  const user = ref({
    name: 'Taylor Adams',
    email: 't.adams@bridgetrack.org',
    initials: 'TA',
  })

  const roleLabel = computed(() => {
    if (role.value === 'admin') return 'Admin'
    if (role.value === 'instructor') return 'Instructor'
    return 'Student'
  })

  const isAdmin = computed(() => role.value === 'admin')
  const isInstructor = computed(() => role.value === 'instructor')
  const isStudent = computed(() => role.value === 'student')

  return {
    role,
    user,
    roleLabel,
    isAdmin,
    isInstructor,
    isStudent,
  }
})
