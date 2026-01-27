<script setup>
import { computed, ref } from 'vue'

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

const rosterSection = ref('')
const hasAssignedSections = computed(() => props.assignedSections.length > 0)
const hasRosterStudents = computed(() => props.rosterStudents.length > 0)
</script>

<template>
  <div>
    <div>
      <p class="bt-label">Workflow 2</p>
      <h2 class="text-xl font-semibold text-zinc-900">View rosters & contacts</h2>
      <p class="mt-1.5 max-w-[640px] text-sm text-zinc-600">
        Select a section to view enrolled students and export the roster to PDF.
      </p>
    </div>

    <div class="mt-6 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto]">
      <label class="flex flex-col gap-1.5">
        <span class="bt-label-compact">Select section</span>
        <select
          v-model="rosterSection"
          :disabled="!hasAssignedSections"
          class="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100 disabled:bg-zinc-100 disabled:text-zinc-400"
        >
          <option value="">Select a section</option>
          <option v-for="section in assignedSections" :key="section.id" :value="section.id">
            {{ section.label }} - {{ section.term }}
          </option>
        </select>
      </label>
      <div class="flex items-end">
        <button class="bt-btn-outline" type="button" :disabled="!hasRosterStudents">
          Export roster PDF
        </button>
      </div>
    </div>

    <p v-if="!hasAssignedSections" class="mt-4 text-sm text-zinc-500">
      No assigned sections yet. Rosters will appear when sections are assigned.
    </p>

    <div v-if="!hasRosterStudents" class="mt-4 text-sm text-zinc-500">
      No roster data available yet.
    </div>

    <div v-else class="mt-6 space-y-3">
      <div v-for="student in rosterStudents" :key="student.id" class="bt-panel-row">
        <div>
          <p class="bt-title-strong">{{ student.name }}</p>
          <p class="bt-subtext">{{ student.status }}</p>
          <p class="mt-1 text-xs text-zinc-500">
            {{ student.email }} · {{ student.phone }}
          </p>
        </div>
        <button class="bt-btn-outline-sm" type="button">Contact</button>
      </div>
    </div>
  </div>
</template>
