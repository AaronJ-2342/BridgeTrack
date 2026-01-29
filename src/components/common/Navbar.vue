<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import UserMenu from '@/components/common/UserMenu.vue'

// whats this for??
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5" aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.24 50.552 50.552 0 00-2.658.813m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" 
              />
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

      <!-- where is the below items at because I cant seem to find it, unless its based on that v-if"!isAuthenticated"-->
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
