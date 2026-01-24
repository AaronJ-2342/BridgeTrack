<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'

const lastSession = null
</script>

<template>
  <div class="rounded-2xl border border-purple-200/30 bg-white/70 p-6 shadow-[0_20px_40px_rgba(24,24,27,0.08)]">
    <SectionHeader kicker="Recent" title="Last session" />
    <div v-if="lastSession" class="mt-3 grid gap-2.5">
      <div>
        <p class="text-sm font-semibold text-zinc-800">Continue last session</p>
        <p class="mt-1 text-xs text-zinc-500">
          {{ lastSession.section }} - {{ lastSession.date }}
        </p>
      </div>
      <button
        class="inline-flex items-center justify-center rounded-full border border-purple-200 bg-transparent px-4 py-2 text-xs font-semibold text-purple-700 hover:bg-purple-50"
      >
        Resume attendance
      </button>
    </div>
    <div v-else class="mt-3 text-sm text-zinc-500">
      No recent attendance sessions yet.
    </div>
  </div>
</template>
