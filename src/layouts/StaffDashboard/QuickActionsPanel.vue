<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'

const links = [
  { label: 'Go to Rosters', href: '#' },
  { label: 'Attendance history', href: '#' },
  { label: 'Reports', href: '#' },
]
</script>

<template>
  <div class="rounded-2xl border border-purple-200/30 bg-white/70 p-6 shadow-[0_20px_40px_rgba(24,24,27,0.08)]">
    <SectionHeader kicker="Quick actions" title="Shortcuts" />
    <div class="mt-3 grid gap-2.5">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        class="flex items-center justify-between gap-3 rounded-xl border border-purple-200/30 bg-white/70 px-3 py-2 text-xs font-semibold text-purple-700 transition hover:bg-purple-50"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>
