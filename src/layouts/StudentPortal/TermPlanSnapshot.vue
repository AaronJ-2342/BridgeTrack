<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'

const term1Selections = []
const term2Selections = []
const term2Unlocked = false
const formatDays = (days) => (Array.isArray(days) ? days.join('/') : '')
const formatTime = (time) => time || ''
</script>

<template>
  <section class="rounded-2xl border border-purple-200/30 bg-white/70 p-6 shadow-[0_20px_40px_rgba(24,24,27,0.08)]">
    <SectionHeader kicker="My term plan" title="Current selections">
      <template #actions>
        <a
          href="#"
          class="rounded-full border border-purple-200 bg-transparent px-3 py-1.5 text-[11px] font-semibold text-purple-700 hover:bg-purple-50"
        >
          Open planner
        </a>
      </template>
    </SectionHeader>

    <div class="mt-4">
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Term 1</p>
      <div v-if="term1Selections.length === 0" class="mt-3 text-sm text-zinc-500">
        No sections selected yet.
      </div>
      <ul v-else class="mt-3 space-y-3">
        <li
          v-for="section in term1Selections"
          :key="section.sectionId"
          class="flex items-center justify-between gap-4 rounded-xl border border-purple-200/30 bg-white/70 px-3 py-2"
        >
          <div>
            <p class="text-sm font-semibold text-zinc-800">{{ section.name }}</p>
            <p class="mt-1 text-xs text-zinc-500">
              {{ formatDays(section.days) }}
              {{ formatTime(section.startTime) }} - {{ formatTime(section.endTime) }}
            </p>
          </div>
          <span
            class="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-1 text-[11px] font-semibold text-purple-700"
          >
            {{ section.modality }}
          </span>
        </li>
      </ul>
    </div>

    <div class="mt-5">
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Term 2</p>
      <div
        v-if="!term2Unlocked"
        class="mt-2 rounded-xl border border-amber-200/80 bg-amber-50 px-3 py-2 text-xs text-amber-800"
      >
        Term 2 unlocks after Term 1 meets prerequisite requirements.
      </div>
      <div v-else-if="term2Selections.length === 0" class="mt-3 text-sm text-zinc-500">
        Term 2 is unlocked. Add sections to continue planning.
      </div>
      <ul v-else class="mt-3 space-y-3">
        <li
          v-for="section in term2Selections"
          :key="section.sectionId"
          class="flex items-center justify-between gap-4 rounded-xl border border-purple-200/30 bg-white/70 px-3 py-2"
        >
          <div>
            <p class="text-sm font-semibold text-zinc-800">{{ section.name }}</p>
            <p class="mt-1 text-xs text-zinc-500">
              {{ formatDays(section.days) }}
              {{ formatTime(section.startTime) }} - {{ formatTime(section.endTime) }}
            </p>
          </div>
          <span
            class="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-1 text-[11px] font-semibold text-purple-700"
          >
            {{ section.modality }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>
