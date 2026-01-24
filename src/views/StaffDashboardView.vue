<script setup>
import { useSessionStore } from '@/stores/session'
import AppShell from '@/components/layout/AppShell.vue'
import TakeAttendanceCard from '@/layouts/StaffDashboard/TakeAttendanceCard.vue'
import MyClassesList from '@/layouts/StaffDashboard/MyClassesList.vue'
import QuickActionsPanel from '@/layouts/StaffDashboard/QuickActionsPanel.vue'
import RecentPanel from '@/layouts/StaffDashboard/RecentPanel.vue'
import AdminSetupPanel from '@/layouts/StaffDashboard/AdminSetupPanel.vue'
import AdminReportsPanel from '@/layouts/StaffDashboard/AdminReportsPanel.vue'

const session = useSessionStore()
</script>

<template>
  <AppShell
    :user="session.user"
    :context-label="session.roleLabel"
    context-note="Rosters, attendance, and reporting in one workspace."
  >
    <template #nav>
      <RouterLink
        to="/dashboard"
        class="text-xs font-semibold text-zinc-600 transition hover:text-purple-700"
        active-class="text-purple-700"
      >
        Dashboard
      </RouterLink>
      <a href="#" class="text-xs font-semibold text-zinc-600 transition hover:text-purple-700">
        Attendance
      </a>
      <a href="#" class="text-xs font-semibold text-zinc-600 transition hover:text-purple-700">
        Rosters
      </a>
      <a href="#" class="text-xs font-semibold text-zinc-600 transition hover:text-purple-700">
        Reports
      </a>
    </template>

    <header class="flex flex-col gap-1.5">
      <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
        Dashboard
      </p>
      <h1 class="text-2xl font-semibold text-zinc-900">Dashboard</h1>
      <p class="max-w-[620px] text-sm text-zinc-600">
        Quick access to attendance, rosters, and reports.
      </p>
    </header>

    <div
      v-if="session.isInstructor"
      class="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)]"
    >
      <div class="space-y-8">
        <TakeAttendanceCard
        />

        <MyClassesList />
      </div>

      <aside class="space-y-6">
        <QuickActionsPanel />
        <RecentPanel />
      </aside>
    </div>

    <AdminSetupPanel v-if="session.isAdmin" />
    <AdminReportsPanel v-if="session.isAdmin" />
  </AppShell>
</template>
