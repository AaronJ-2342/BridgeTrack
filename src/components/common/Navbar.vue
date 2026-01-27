<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import UserMenu from '@/components/common/UserMenu.vue'

defineProps({
  showUser: {
    type: Boolean,
    default: true,
  },
})

const auth = useAuthStore()
// specific check to ensure we have a user object
const isAuthenticated = computed(() => !!auth.user?.name)
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-8">
        <RouterLink to="/" class="flex items-center gap-2.5 transition-opacity hover:opacity-90">
          <div
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-700 to-purple-600 text-white shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
              <path
                d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 002.21 10.057a.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
              <path
                d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.438.227 2.945.227 4.53 0 5.705-3.276 10.518-8.253 12.28a.75.75 0 01-.496 0c-4.976-1.762-8.252-6.575-8.252-12.28 0-1.585.093-3.092.227-4.53 2.396.936 5.056 2.093 7.666 3.282 3.11.854.596 1.056.817 0z" />
            </svg>
          </div>
          <span class="text-lg font-bold tracking-tight text-zinc-900">BridgeTrack</span>
        </RouterLink>

        <nav class="hidden md:flex items-center gap-6">
          <RouterLink to="/" class="text-sm font-medium transition-colors hover:text-purple-700"
            :class="$route.path === '/' ? 'text-zinc-900' : 'text-zinc-500'">
            Home
          </RouterLink>
          <RouterLink to="/portal" class="text-sm font-medium transition-colors hover:text-purple-700"
            :class="$route.path.startsWith('/portal') ? 'text-zinc-900' : 'text-zinc-500'">
            Student portal
          </RouterLink>
          <RouterLink to="/dashboard" class="text-sm font-medium transition-colors hover:text-purple-700"
            :class="$route.path.startsWith('/dashboard') ? 'text-zinc-900' : 'text-zinc-500'">
            Dashboard
          </RouterLink>
        </nav>
      </div>

      <div class="flex items-center gap-4">

        <!-- Public: Login/Register -->
        <div v-if="!isAuthenticated" class="flex items-center gap-3">
          <RouterLink to="/login" class="text-sm font-medium text-zinc-600 hover:text-zinc-900">
            Log in
          </RouterLink>
          <RouterLink to="/register"
            class="rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors">
            Registration
          </RouterLink>
        </div>

        <UserMenu v-if="showUser && isAuthenticated" :user="auth.user" />

        <button v-if="isAuthenticated" class="md:hidden text-zinc-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

    </div>
  </header>
</template>
