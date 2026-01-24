<script setup>
import { computed, ref } from 'vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import EmptyState from '@/components/ui/EmptyState.vue'

const sections = ref([])
const hasSections = computed(() => sections.value.length > 0)
</script>

<template>
  <section>
    <SectionHeader
      kicker="My classes"
      title="Assigned sections"
      subtitle="View rosters, attendance history, and roster exports."
    />

    <div v-if="!hasSections" class="mt-4">
      <EmptyState
        title="No classes assigned"
        description="You will see your classes here once assignments are made."
      />
    </div>

    <div v-else class="mt-4 space-y-3">
      <div
        v-for="section in sections"
        :key="section.sectionId"
        class="rounded-2xl border border-purple-200/30 bg-white/60 px-4 py-3"
      >
        <div>
          <p class="text-sm font-semibold text-zinc-800">Course {{ section.courseId }}</p>
          <p class="mt-1 text-xs text-zinc-500">
            {{ section.meetingDaysTimes }} - Term {{ section.termId }} - {{ section.modality }}
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <button
              class="rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-[11px] font-semibold text-purple-700"
            >
              Roster
            </button>
            <button
              class="rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-[11px] font-semibold text-purple-700"
            >
              History
            </button>
            <button
              class="rounded-full border border-purple-200 bg-transparent px-3 py-1.5 text-[11px] font-semibold text-purple-700 hover:bg-purple-50"
            >
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
