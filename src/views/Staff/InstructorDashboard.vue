<script setup>
import { computed, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import InstructorAttendancePanel from '@/components/staff/instructor/InstructorAttendancePanel.vue'
import InstructorRostersPanel from '@/components/staff/instructor/InstructorRostersPanel.vue'
import InstructorHistoryPanel from '@/components/staff/instructor/InstructorHistoryPanel.vue'

const auth = useAuthStore()

const dashboardIntro = computed(() => ({
  label: 'Instruction',
  title: 'Instructor dashboard',
  description:
    'Record attendance. View rosters and contacts. Review attendance history. Export PDF reports.',
}))

const tabs = [
  { id: 'attendance', label: 'Record attendance' },
  { id: 'rosters', label: 'Rosters' },
  { id: 'history', label: 'History' },
]

const activeTab = ref('attendance')

const assignedSections = ref([])
const rosterStudents = ref([])
const attendanceHistory = ref([])
const tabClass = (tabId) =>
  activeTab.value === tabId
    ? 'bt-btn-primary px-4 py-2 text-xs'
    : 'bt-btn-outline px-4 py-2 text-xs'
</script>

<template>
  <div class="bt-container bt-page-shell">
    <div class="rounded-3xl border border-zinc-100 bg-white/90 p-8 shadow-sm">
      <header class="bt-page-header">
        <div class="bt-page-header-text">
          <p class="bt-label">{{ dashboardIntro.label }}</p>
          <h1 class="text-3xl font-bold text-zinc-900">{{ dashboardIntro.title }}</h1>
          <p class="max-w-[720px] text-base text-zinc-600">
            {{ dashboardIntro.description }}
          </p>
        </div>
        <div class="flex items-center gap-2 rounded-full border border-purple-200/60 bg-purple-50 px-4 py-2">
          <span class="bt-label-compact">Role</span>
          <span class="text-xs font-semibold text-purple-700">{{ auth.roleLabel }}</span>
        </div>
      </header>

      <section v-if="auth.isInstructor" class="mt-10">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            type="button"
            :class="tabClass(tab.id)"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>

        <InstructorAttendancePanel
          v-if="activeTab === 'attendance'"
          class="mt-8"
          :assigned-sections="assignedSections"
          :roster-students="rosterStudents"
        />

        <InstructorRostersPanel
          v-else-if="activeTab === 'rosters'"
          class="mt-8"
          :assigned-sections="assignedSections"
          :roster-students="rosterStudents"
        />

        <InstructorHistoryPanel
          v-else
          class="mt-8"
          :assigned-sections="assignedSections"
          :attendance-history="attendanceHistory"
        />
      </section>
    </div>
  </div>
</template>
