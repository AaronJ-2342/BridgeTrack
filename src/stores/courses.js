import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCoursesStore = defineStore('courses', () => {
  const catalog = ref([])
  const sections = ref([])
  const prerequisites = ref([])

  return {
    catalog,
    sections,
    prerequisites,
  }
})
