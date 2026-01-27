<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import AdminCoursesPanel from '@/components/staff/admin/AdminCoursesPanel.vue'
import AdminSectionsPanel from '@/components/staff/admin/AdminSectionsPanel.vue'
import AdminStudentsPanel from '@/components/staff/admin/AdminStudentsPanel.vue'
import AdminReportsPanel from '@/components/staff/admin/AdminReportsPanel.vue'

const auth = useAuthStore()

const tabs = [
  { id: 'courses', label: 'Courses' },
  { id: 'sections', label: 'Sections' },
  { id: 'students', label: 'Students' },
  { id: 'reports', label: 'Reports' },
]

const activeTab = ref('courses')

const programs = ref([])
const courses = ref([])
const prerequisites = ref([])
const sections = ref([])
const enrollments = ref([])

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
          <p class="bt-label">Administration</p>
          <h1 class="text-3xl font-bold text-zinc-900">Admin dashboard</h1>
          <p class="max-w-[720px] text-base text-zinc-600">
            Manage courses, prerequisites, sections, instructors, student assignment, and attendance
            reporting.
          </p>
        </div>
        <div class="flex items-center gap-2 rounded-full border border-purple-200/60 bg-purple-50 px-4 py-2">
          <span class="bt-label-compact">Role</span>
          <span class="text-xs font-semibold text-purple-700">{{ auth.roleLabel }}</span>
        </div>
      </header>

      <section v-if="auth.isAdmin" class="mt-10">
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

        <AdminCoursesPanel
          v-if="activeTab === 'courses'"
          class="mt-8"
          :programs="programs"
          :courses="courses"
          :prerequisites="prerequisites"
        />

        <AdminSectionsPanel
          v-else-if="activeTab === 'sections'"
          class="mt-8"
          :sections="sections"
        />

        <AdminStudentsPanel
          v-else-if="activeTab === 'students'"
          class="mt-8"
          :enrollments="enrollments"
        />

        <AdminReportsPanel v-else class="mt-8" />
      </section>
    </div>
  </div>
</template>
