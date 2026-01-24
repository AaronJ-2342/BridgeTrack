<script setup>
import { useSessionStore } from '@/stores/session'
import AppShell from '@/components/layout/AppShell.vue'
import LandingHero from '@/layouts/Home/LandingHero.vue'
import LandingCalendar from '@/layouts/Home/LandingCalendar.vue'
import LandingFooter from '@/layouts/Home/LandingFooter.vue'

const session = useSessionStore()
</script>

<template>
  <AppShell :user="session.user" :show-user="true" shell-variant="plain">
    <template #actions>
      <RouterLink
        to="/dashboard"
        class="text-xs font-semibold text-purple-700 hover:text-purple-800"
      >
        Staff Portal
      </RouterLink>
    </template>
    <LandingHero />
    <LandingCalendar />
    <LandingFooter />
  </AppShell>
</template>
