<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import EmptyState from '@/components/ui/EmptyState.vue'

const schedulePreview = []
const conflicts = []
</script>

<template>
  <section class="rounded-2xl border border-purple-200/30 bg-white/70 p-6 shadow-[0_20px_40px_rgba(24,24,27,0.08)]">
    <SectionHeader kicker="Schedule preview" title="Weekly snapshot" />

    <div v-if="schedulePreview.length === 0" class="mt-4">
      <EmptyState
        title="No sections selected"
        description="Pick sections to see your weekly schedule."
      />
    </div>

    <div v-else class="mt-4 space-y-3">
      <div
        v-for="item in schedulePreview"
        :key="item.sectionId"
        class="rounded-xl border border-purple-200/30 bg-white/60 px-3 py-2"
      >
        <p class="text-sm font-semibold text-zinc-800">{{ item.name }}</p>
        <p class="mt-1 text-xs text-zinc-500">{{ item.info }}</p>
      </div>
    </div>

    <div class="mt-4">
      <p v-if="conflicts.length === 0" class="text-xs text-zinc-500">
        No conflicts detected.
      </p>
      <div
        v-else
        class="mt-4 rounded-xl border border-amber-200/80 bg-amber-50 px-3 py-2 text-xs text-amber-800"
      >
        Conflicts detected (these would be prevented during selection):
        <ul class="mt-2 list-disc pl-5 text-xs text-zinc-700">
          <li
            v-for="conflict in conflicts"
            :key="conflict.first.sectionId + conflict.second.sectionId"
          >
            {{ conflict.first.name }} vs {{ conflict.second.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
