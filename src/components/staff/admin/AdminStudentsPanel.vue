<script setup>
defineProps({
  enrollments: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="space-y-8">
    <div>
      <p class="bt-label">Section 3</p>
      <h2 class="text-xl font-semibold text-zinc-900">Student assignment</h2>
      <p class="mt-1.5 max-w-[640px] text-sm text-zinc-600">
        View enrollments by section, remove or reassign students, and track active status.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <label class="flex flex-col gap-1.5">
        <span class="bt-label-compact">Section</span>
        <select
          class="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
        >
          <option>All sections</option>
        </select>
      </label>
      <label class="flex flex-col gap-1.5">
        <span class="bt-label-compact">Student</span>
        <input
          type="text"
          placeholder="Search by name or ID"
          class="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
        />
      </label>
      <label class="flex flex-col gap-1.5">
        <span class="bt-label-compact">Status</span>
        <select
          class="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </label>
    </div>

    <div v-if="!enrollments.length" class="text-sm text-zinc-500">
      No enrollments available yet.
    </div>

    <div v-else class="space-y-3">
      <div v-for="enrollment in enrollments" :key="enrollment.id" class="bt-panel-row">
        <div>
          <p class="bt-title-strong">{{ enrollment.student }}</p>
          <p class="bt-subtext">{{ enrollment.section }} · {{ enrollment.status }}</p>
        </div>
        <div class="flex items-center gap-2">
          <button class="bt-btn-outline-sm" type="button">Reassign</button>
          <button class="bt-btn-outline-sm" type="button">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>
