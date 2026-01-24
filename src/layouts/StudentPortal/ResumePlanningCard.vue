<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'

const planningCtaLabel = 'Start Term 1 planning'
const term1Count = 0
const term2Count = 0
const term2Unlocked = false
</script>

<template>
  <section class="rounded-2xl border border-purple-200/30 bg-white/70 p-6 shadow-[0_20px_40px_rgba(24,24,27,0.08)]">
    <SectionHeader
      kicker="Resume planning"
      title="Pick up where you left off"
      subtitle="Your plan stays saved across both terms."
    />
    <button
      class="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-700 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_22px_rgba(109,40,217,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(109,40,217,0.28)]"
    >
      {{ planningCtaLabel }}
    </button>
    <div class="mt-4 grid gap-3 sm:grid-cols-2">
      <div>
        <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Term 1</p>
        <p class="mt-2 text-lg font-semibold text-zinc-900">{{ term1Count }} selected</p>
      </div>
      <div>
        <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Term 2</p>
        <p class="mt-2 text-lg font-semibold text-zinc-900">
          {{ term2Unlocked ? 'Unlocked' : 'Locked' }} - {{ term2Count }} selected
        </p>
      </div>
    </div>
  </section>
</template>
