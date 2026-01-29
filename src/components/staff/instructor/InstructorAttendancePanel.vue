<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  assignedSections: {
    type: Array,
    default: () => [],
  },
  rosterStudents: {
    type: Array,
    default: () => [],
  },
})

const today = new Date().toISOString().split('T')[0] //what are the toISOString and split methods for?

const attendanceSection = ref('')
const attendanceDate = ref(today)
const showRosterChecklist = ref(false) //?
const confirmPastEdit = ref(false) //?
const attendanceRoster = ref([])

const hasAssignedSections = computed(() => props.assignedSections.length > 0) //if the student has an assigned section?
const isPastAttendance = computed(() => attendanceDate.value < today) //has attended in the past
const attendanceReady = computed(() => attendanceSection.value && attendanceDate.value) //?
const attendanceSaveDisabled = computed(() =>                                           //?
  !showRosterChecklist.value || (isPastAttendance.value && !confirmPastEdit.value),
)

//I have no clue what this is for
watch(
  () => props.rosterStudents,
  (students) => {
    attendanceRoster.value = students.map((student) => ({
      ...student,
      present: true,
    }))
  },
  { immediate: true },
)

//checks if the student previously attended?
watch(attendanceDate, () => {
  if (!isPastAttendance.value) confirmPastEdit.value = false
})

//shows the student based on if they attended?
const openRosterChecklist = () => {
  if (!attendanceReady.value) return
  showRosterChecklist.value = true
}
</script>

<template>
  <div>
    <div>
      <p class="bt-label">Workflow 1</p>
      <h2 class="text-xl font-semibold text-zinc-900">Record attendance</h2>
      <p class="mt-1.5 max-w-[640px] text-sm text-zinc-600">
        Follow the steps in order. Future dates are disabled. Past edits require confirmation.
      </p>
    </div>

    <div class="mt-6 grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_auto]">
      <label class="flex flex-col gap-1.5">
        <span class="bt-label-compact">1. Select section</span>
        <select
          v-model="attendanceSection"
          :disabled="!hasAssignedSections"
          class="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100 disabled:bg-zinc-100 disabled:text-zinc-400"
        >
          <option value="">Select a section</option>
          <option v-for="section in assignedSections" :key="section.id" :value="section.id">
            {{ section.label }} - {{ section.term }}
          </option>
        </select>
      </label>

      <label class="flex flex-col gap-1.5">
        <span class="bt-label-compact">2. Select session date</span>
        <input
          v-model="attendanceDate"
          type="date"
          :max="today"
          :disabled="!hasAssignedSections"
          class="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100 disabled:bg-zinc-100 disabled:text-zinc-400"
        />
      </label>

      <div class="flex items-end">
        <button
          class="bt-btn-primary"
          type="button"
          :disabled="!attendanceReady"
          @click="openRosterChecklist"
        >
          3. Open roster
        </button>
      </div>
    </div>

    <p v-if="!hasAssignedSections" class="mt-4 text-sm text-zinc-500">
      No assigned sections yet. Attendance is available after sections are assigned.
    </p>

    <div v-if="showRosterChecklist" class="mt-8">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <p class="bt-label">Roster checklist</p>
        <span class="bt-badge">{{ attendanceRoster.length }} students</span>
      </div>

      <div v-if="!attendanceRoster.length" class="mt-4 text-sm text-zinc-500">
        No roster data available yet.
      </div>

      <div v-else class="mt-4 space-y-3">
        <div v-for="student in attendanceRoster" :key="student.id" class="bt-panel-row">
          <div>
            <p class="bt-title-strong">{{ student.name }}</p>
            <p class="bt-subtext">{{ student.email }} · {{ student.phone }}</p>
          </div>
          <label class="flex items-center gap-2 text-xs text-zinc-600">
            <input v-model="student.present" type="checkbox" />
            Present
          </label>
        </div>
      </div>

      <div class="mt-4 flex flex-wrap items-center gap-3">
        <label v-if="isPastAttendance" class="flex items-center gap-2 text-xs text-zinc-600">
          <input v-model="confirmPastEdit" type="checkbox" />
          Confirm past attendance edit
        </label>
        <button class="bt-btn-primary" type="button" :disabled="attendanceSaveDisabled">
          Save attendance
        </button>
      </div>
      <p class="mt-2 text-xs text-zinc-500">
        Future dates are disabled. Past edits require confirmation before saving.
      </p>
    </div>
  </div>
</template>
