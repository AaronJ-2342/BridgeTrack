<script setup>
import { ref, useTemplateRef } from 'vue'
import { onClickOutside } from '@vueuse/core'

// State for dropdowns
const isProfileOpen = ref(false)
const isMobileMenuOpen = ref(false)
const target = useTemplateRef('user-menu-button')

// Subject to change.
const userRole = ref('student')

const toggleProfile = () => {
  isProfileOpen.value = !isProfileOpen.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// hide the drop down if anything outside is clicked.
onClickOutside(target, () => {
  isProfileOpen.value = false
})
</script>

<template>
  <!-- Main Nav Container -->
  <nav class="bg-white border-b border-zinc-200 shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Left Side: Logo & Main Links -->
        <div class="flex">
          <!-- Logo Area -->
          <div class="flex-shrink-0 flex items-center cursor-pointer">
            <!-- Using an SVG icon or Text for Logo -->
            <a href="/" class="flex items-center gap-2">
              <div class="bg-purple-700 text-white p-1.5 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.24 50.552 50.552 0 00-2.658.813m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <span class="font-bold text-xl tracking-tight text-zinc-700">BridgeTrack</span>
            </a>
          </div>

          <!-- Desktop Navigation Links (Hidden on Mobile) -->
          <div class="hidden sm:ml-8 sm:flex sm:space-x-8">
            <!-- Common Link -->
            <a
              href="/catalog"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-zinc-700 hover:text-purple-700 hover:border-purple-700 transition-colors duration-200"
            >
              Course Catalog
            </a>

            <!-- Student Specific Links. The code below is most likely going to change. As students and staff will have two seperate portals.-->
            <template v-if="userRole === 'student'">
              <a
                href="/planner"
                class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-zinc-700 hover:text-purple-700 hover:border-purple-700 transition-colors duration-200"
              >
                Course Planner
              </a>
            </template>
          </div>
        </div>

        <!-- Right Side: User Dropdown -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <div class="ml-3 relative">
            <div>
              <button
                @click="toggleProfile"
                class="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700"
                id="user-menu-button"
                ref="user-menu-button"
              >
                <span class="sr-only">Open user menu</span>
                <!-- Avatar Circle -->
                <div
                  class="h-8 w-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold border border-purple-200"
                >
                  U
                </div>
              </button>
            </div>

            <!-- Dropdown Menu -->
            <!-- We use v-show for simple toggling -->
            <div
              v-show="isProfileOpen"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
            >
              <div class="px-4 py-2 border-b border-zinc-100">
                <p class="text-sm text-zinc-700">Signed in as</p>
                <p class="text-sm font-medium text-zinc-900 truncate">user@example.com</p>
              </div>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-zinc-700 hover:bg-stone-50 hover:text-purple-700"
                >Your Profile</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-zinc-700 hover:bg-stone-50 hover:text-purple-700"
                >Settings</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-zinc-700 hover:bg-stone-50 hover:text-purple-700"
                >Sign out</a
              >
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button (Hamburger) -->
        <div class="-mr-2 flex items-center sm:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-500 hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-700"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed -->
            <svg
              v-if="!isMobileMenuOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open -->
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu (Conditional Rendering) -->
    <div v-show="isMobileMenuOpen" class="sm:hidden bg-white border-t border-zinc-200">
      <div class="pt-2 pb-3 space-y-1">
        <a
          href="/catalog"
          class="bg-purple-50 border-l-4 border-purple-700 text-purple-700 block pl-3 pr-4 py-2 text-base font-medium"
        >
          Course Catalog
        </a>
        <a
          href="/planner"
          class="border-transparent text-zinc-600 hover:bg-stone-50 hover:border-zinc-300 hover:text-zinc-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        >
          Course Planner
        </a>
        <a
          href="/session-picker"
          class="border-transparent text-zinc-600 hover:bg-stone-50 hover:border-zinc-300 hover:text-zinc-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
        >
          Session Picker
        </a>
      </div>
      <div class="pt-4 pb-4 border-t border-zinc-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <div
              class="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold"
            >
              U
            </div>
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-zinc-800">Test User</div>
            <div class="text-sm font-medium text-zinc-500">user@example.com</div>
          </div>
        </div>
        <div class="mt-3 space-y-1">
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-zinc-500 hover:text-zinc-800 hover:bg-stone-50"
            >Settings</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-zinc-500 hover:text-zinc-800 hover:bg-stone-50"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>

  <!-- Main Content Area Placeholder -->
  <main class="bg-stone-50 min-h-screen p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-2xl font-semibold text-zinc-700 mb-4">Welcome to BridgeTrack</h1>
      <p class="text-zinc-700">Select a tool from the menu to begin.</p>
    </div>
  </main>
</template>
