import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEnrollmentStore = defineStore('enrollment', () => {
  const selections = ref([])
  const attendanceRecords = ref([])

  return {
    selections,
    attendanceRecords,
  }
})
