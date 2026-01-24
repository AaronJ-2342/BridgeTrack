<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'

const eligibleCount = 0
const blockedCount = 0
const blockedExamples = []
</script>

<template>
  <section class="rounded-2xl border border-purple-200/30 bg-white/70 p-6 shadow-[0_20px_40px_rgba(24,24,27,0.08)]">
    <SectionHeader kicker="Eligibility and prerequisites" title="Course access" />
    <div class="mt-3 grid gap-3 sm:grid-cols-2">
      <div>
        <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Eligible now
        </p>
        <p class="mt-2 text-lg font-semibold text-zinc-900">{{ eligibleCount }}</p>
      </div>
      <div>
        <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Blocked
        </p>
        <p class="mt-2 text-lg font-semibold text-zinc-900">{{ blockedCount }}</p>
      </div>
    </div>

    <div class="mt-4 space-y-3">
      <div
        v-for="example in blockedExamples"
        :key="example.course.courseId"
        class="flex items-start justify-between gap-3 rounded-xl border border-purple-200/30 bg-white/60 px-3 py-2"
      >
        <div>
          <p class="text-sm font-semibold text-zinc-800">{{ example.course.title }}</p>
          <p class="mt-1 text-xs text-zinc-500">
            Missing: {{ example.missing.join(', ') || 'None' }}
          </p>
        </div>
        <span
          class="inline-flex items-center justify-center rounded-full border border-purple-200 bg-transparent px-2.5 py-1 text-[11px] font-semibold text-purple-700"
        >
          Blocked
        </span>
      </div>
      <div v-if="blockedExamples.length === 0" class="text-sm text-zinc-500">
        No blocked courses right now.
      </div>
    </div>

    <button
      class="mt-4 inline-flex items-center justify-center rounded-full border border-purple-200 bg-transparent px-4 py-2 text-xs font-semibold text-purple-700 hover:bg-purple-50"
    >
      Browse catalog
    </button>
  </section>
</template>
