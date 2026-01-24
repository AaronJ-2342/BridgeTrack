<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
</script>

<template>
  <section class="border-t border-purple-200/40 py-7">
    <SectionHeader
      kicker="Reports"
      title="Attendance reporting"
      subtitle="Export attendance by date range and class."
    />
    <EmptyState
      title="No reports to export"
      description="Reports will appear after attendance is recorded."
    />
  </section>
</template>
