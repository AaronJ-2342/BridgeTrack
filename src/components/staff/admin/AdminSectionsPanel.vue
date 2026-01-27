<script setup>
defineProps({
  sections: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="space-y-8">
    <div>
      <p class="bt-label">Section 2</p>
      <h2 class="text-xl font-semibold text-zinc-900">Section management</h2>
      <p class="mt-1.5 max-w-[640px] text-sm text-zinc-600">
        Create and edit sections by term, schedule, modality, and instructor assignment.
      </p>
    </div>

    <div class="flex flex-wrap items-center gap-3">
      <label class="flex flex-col gap-1.5">
        <span class="bt-label-compact">Term</span>
        <select
          class="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
        >
          <option>Term 1</option>
          <option>Term 2</option>
        </select>
      </label>
      <button class="bt-btn-primary" type="button">Create section</button>
    </div>

    <div v-if="!sections.length" class="text-sm text-zinc-500">
      No sections available yet.
    </div>

    <div v-else class="space-y-3">
      <div v-for="section in sections" :key="section.id" class="bt-panel-row">
        <div>
          <p class="bt-title-strong">{{ section.course }} · {{ section.term }}</p>
          <p class="bt-subtext">
            {{ section.schedule }} · {{ section.modality }} · {{ section.instructor }}
          </p>
        </div>
        <button class="bt-btn-outline-sm" type="button">Edit</button>
      </div>
    </div>
  </div>
</template>
