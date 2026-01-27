<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  assignedSections: {
    type: Array,
    default: () => [],
  },
  attendanceHistory: {
    type: Array,
    default: () => [],
  },
})

const historySection = ref('')
const historyStartDate = ref('')
const historyEndDate = ref('')
const confirmHistoryEdit = ref(false)

const hasAssignedSections = computed(() => props.assignedSections.length > 0)
const hasHistoryRecords = computed(() => props.attendanceHistory.length > 0)
</script>

<template>
  <div>
    <div>
      <p class="bt-label">Workflow 3</p>
      <h2 class="text-xl font-semibold text-zinc-900">Attendance history</h2>
      <p class="mt-1.5 max-w-[640px] text-sm text-zinc-600">
        Filter by section and date range to view past attendance. Past edits require confirmation.
      </p>
    </div>

    <div class="mt-6 grid gap-4 md:grid-cols-4">
      <label class="flex flex-col gap-1.5">
        <span class="bt-label-compact">Section</span>
        <select
          v-model="historySection"
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
        <span class="bt-label-compact">Start date</span>
        <input
          v-model="historyStartDate"
          type="date"
          :disabled="!hasAssignedSections"
          class="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100 disabled:bg-zinc-100 disabled:text-zinc-400"
        />
      </label>
      <label class="flex flex-col gap-1.5">
        <span class="bt-label-compact">End date</span>
        <input
          v-model="historyEndDate"
          type="date"
          :disabled="!hasAssignedSections"
          class="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100 disabled:bg-zinc-100 disabled:text-zinc-400"
        />
      </label>
      <div class="flex items-end">
        <button class="bt-btn-primary w-full" type="button" :disabled="!hasAssignedSections">
          Apply filters
        </button>
      </div>
    </div>

    <p v-if="!hasAssignedSections" class="mt-4 text-sm text-zinc-500">
      No assigned sections yet. History will appear once attendance has been recorded.
    </p>

    <div v-if="!hasHistoryRecords" class="mt-4 text-sm text-zinc-500">
      No attendance history available yet.
    </div>

    <div v-else class="mt-6 space-y-3">
      <div v-for="record in attendanceHistory" :key="record.id" class="bt-panel-row">
        <div>
          <p class="bt-title-strong">{{ record.section }}</p>
          <p class="bt-subtext">{{ record.date }} · {{ record.present }}</p>
        </div>
        <button class="bt-btn-outline-sm" type="button" :disabled="!confirmHistoryEdit">
          Edit
        </button>
      </div>
    </div>

    <div class="mt-4 flex flex-wrap items-center gap-3">
      <label class="flex items-center gap-2 text-xs text-zinc-600">
        <input v-model="confirmHistoryEdit" type="checkbox" />
        Confirm past attendance edits
      </label>
      <button class="bt-btn-outline" type="button" :disabled="!hasHistoryRecords">
        Export history PDF
      </button>
    </div>
  </div>
</template>
