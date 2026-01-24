<script setup>
import { computed, ref, watch } from 'vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import EmptyState from '@/components/ui/EmptyState.vue'

const today = new Date().toISOString().split('T')[0]
const assignedSections = ref([])
const attendanceSessions = ref([])
const attendanceRecords = ref([])

const selectedSectionId = ref('')
const selectedDate = ref(today)

watch(
  assignedSections,
  (sections) => {
    if (!selectedSectionId.value) {
      selectedSectionId.value = sections[0]?.sectionId || ''
    }
  },
  { immediate: true },
)

watch(
  attendanceSessions,
  (sessions) => {
    if (!selectedDate.value) {
      selectedDate.value = sessions[0]?.sessionDate || today
    }
  },
  { immediate: true },
)

const hasSections = computed(() => assignedSections.value.length > 0)

const sessionDatesBySection = computed(() => {
  const grouped = {}
  attendanceSessions.value.forEach((sessionItem) => {
    if (!sessionItem.sectionId || !sessionItem.sessionDate) return
    const sectionId = sessionItem.sectionId
    if (!grouped[sectionId]) grouped[sectionId] = []
    grouped[sectionId].push(sessionItem.sessionDate)
  })
  return grouped
})

const attendanceBySection = computed(() => {
  const grouped = {}
  attendanceSessions.value.forEach((sessionItem) => {
    if (!sessionItem.attendanceSessionId || !sessionItem.sectionId) return
    const hasRecord = attendanceRecords.value.some(
      (record) => record.attendanceSessionId === sessionItem.attendanceSessionId,
    )
    if (!hasRecord || !sessionItem.sessionDate) return
    const sectionId = sessionItem.sectionId
    if (!grouped[sectionId]) grouped[sectionId] = []
    grouped[sectionId].push(sessionItem.sessionDate)
  })
  return grouped
})

const hasSessionDates = computed(() =>
  selectedSectionId.value
    ? (sessionDatesBySection.value[selectedSectionId.value] || []).length > 0
    : false,
)

const attendanceExists = computed(() => {
  if (!selectedSectionId.value || !selectedDate.value) return false
  const recordedDates = attendanceBySection.value[selectedSectionId.value] || []
  return recordedDates.includes(selectedDate.value)
})

const isPastDate = computed(() =>
  selectedDate.value ? selectedDate.value < today : false,
)

const isEditingPastAttendance = computed(() => isPastDate.value && attendanceExists.value)

const actionLabel = computed(() =>
  isEditingPastAttendance.value ? 'Edit attendance' : 'Open roster',
)

const actionDisabled = computed(() =>
  !hasSections.value || !selectedSectionId.value || !selectedDate.value || !hasSessionDates.value,
)

const attendanceVm = computed(() => ({
  hasSections: hasSections.value,
  assignedSections: assignedSections.value,
  selectedSectionId: selectedSectionId.value,
  selectedDate: selectedDate.value,
  today,
  hasSessionDates: hasSessionDates.value,
  actionLabel: actionLabel.value,
  actionDisabled: actionDisabled.value,
  isEditingPastAttendance: isEditingPastAttendance.value,
}))

const onSectionChange = (event) => {
  selectedSectionId.value = event.target.value
}

const onDateChange = (event) => {
  selectedDate.value = event.target.value
}

const onAction = () => {}

const formatSectionLabel = (section) => `Course ${section.courseId} - Term ${section.termId}`
</script>

<template>
  <section>
    <div class="rounded-2xl border border-purple-200/30 bg-white/70 p-6 shadow-[0_20px_40px_rgba(24,24,27,0.08)]">
      <SectionHeader
        kicker="Take attendance"
        title="Start with today"
        subtitle="Select a section and session date, then open the roster checklist."
      />

      <div v-if="!attendanceVm.hasSections" class="mt-6">
        <EmptyState
          title="No sections assigned"
          description="You will see attendance controls once sections are assigned to you."
          action-label="Contact admin"
        />
      </div>

      <div
        v-else
        class="mt-6 grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_auto]"
      >
        <label class="flex flex-col gap-1.5">
          <span class="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Section
          </span>
          <select
            :value="attendanceVm.selectedSectionId"
            class="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
            @change="onSectionChange"
          >
            <option disabled value="">Select a section</option>
            <option
              v-for="section in attendanceVm.assignedSections"
              :key="section.sectionId"
              :value="section.sectionId"
            >
              {{ formatSectionLabel(section) }}
            </option>
          </select>
        </label>

        <label class="flex flex-col gap-1.5">
          <span class="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Session date
          </span>
          <input
            :value="attendanceVm.selectedDate"
            type="date"
            :max="attendanceVm.today"
            :disabled="!attendanceVm.hasSessionDates"
            class="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100 disabled:bg-zinc-100 disabled:text-zinc-400"
            @change="onDateChange"
          />
        </label>

        <div class="flex items-end">
          <button
            class="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-700 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_22px_rgba(109,40,217,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(109,40,217,0.28)] disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none disabled:translate-y-0"
            :disabled="attendanceVm.actionDisabled"
            @click="onAction"
          >
            {{ attendanceVm.actionLabel }}
          </button>
        </div>
      </div>

      <p
        v-if="attendanceVm.hasSections && !attendanceVm.hasSessionDates"
        class="mt-4 rounded-xl border border-amber-200/80 bg-amber-50 px-3 py-2 text-xs text-amber-800"
      >
        No sessions available for this section yet. Add session dates to begin attendance.
      </p>
      <p v-else class="mt-4 text-xs text-zinc-500">
        Future dates are disabled. Past edits require confirmation.
      </p>
      <p v-if="attendanceVm.isEditingPastAttendance" class="mt-3 text-xs text-zinc-500">
        Attendance already exists for this past date. Editing requires confirmation.
      </p>
    </div>
  </section>
</template>
