<script setup>
import AppShell from '@/components/layout/AppShell.vue'
import ResumePlanningCard from '@/layouts/StudentPortal/ResumePlanningCard.vue'
import TermPlanSnapshot from '@/layouts/StudentPortal/TermPlanSnapshot.vue'
import EligibilityPanel from '@/layouts/StudentPortal/EligibilityPanel.vue'
import SchedulePreview from '@/layouts/StudentPortal/SchedulePreview.vue'

const user = {
  name: 'John Doe',
  email: 'johndoe@bridgetrack.org',
  initials: 'JD',
}
</script>

<template>
  <AppShell
    :user="user"
    context-label="Student"
    context-note="Plan two terms with prerequisites and conflict prevention."
  >
    <template #nav>
      <RouterLink
        to="/portal"
        class="text-xs font-semibold text-zinc-600 transition hover:text-purple-700"
        active-class="text-purple-700"
      >
        Portal
      </RouterLink>
      <a href="#" class="text-xs font-semibold text-zinc-600 transition hover:text-purple-700">
        Catalog
      </a>
      <a href="#" class="text-xs font-semibold text-zinc-600 transition hover:text-purple-700">
        Plan terms
      </a>
    </template>

    <header class="flex flex-col gap-1.5">
      <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
        Student Portal
      </p>
      <h1 class="text-2xl font-semibold text-zinc-900">Student Portal</h1>
      <p class="max-w-[620px] text-sm text-zinc-600">
        Plan Term 1 and Term 2. We will show prerequisites and prevent time conflicts.
      </p>
    </header>

    <div class="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <div class="space-y-6">
        <ResumePlanningCard />
        <TermPlanSnapshot />
      </div>

      <div class="space-y-6">
        <EligibilityPanel />
        <SchedulePreview />
      </div>
    </div>
  </AppShell>
</template>
