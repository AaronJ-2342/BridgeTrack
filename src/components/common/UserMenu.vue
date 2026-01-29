<script setup>
import { computed, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  user: {
    type: Object,
    default: () => ({
      name: 'BridgeTrack User',
      email: 'user@example.com',
      initials: 'BU',
    }),
  },
})

const isOpen = ref(false)
const menuRef = ref(null)

const initials = computed(() => {
  if (props.user?.initials) return props.user.initials
  if (!props.user?.name) return 'U'
  return props.user.name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// click outside of the menu it dissapears
onClickOutside(menuRef, () => {
  isOpen.value = false
})
</script>

<template>
  <div ref="menuRef" class="relative">
    <button
      type="button"
      class="flex items-center gap-3 rounded-full border border-zinc-200 bg-white/70 px-2 py-1.5 text-left text-sm shadow-sm transition hover:border-purple-200 hover:bg-white"
      @click="toggleMenu"
    >
      <span class="sr-only">Open user menu</span>
      <span class="hidden text-xs font-medium text-zinc-600 sm:block">{{ user.name }}</span>
      <span
        class="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-700"
        aria-hidden="true"
      >
        {{ initials }}
      </span>
    </button>

    <div
      v-show="isOpen"
      class="absolute right-0 mt-3 w-60 origin-top-right rounded-2xl border border-zinc-200 bg-white/90 p-3 shadow-xl backdrop-blur"
    >
      <div class="rounded-xl border border-zinc-100 bg-white px-3 py-2">
        <p class="text-xs text-zinc-500">Signed in as</p>
        <p class="bt-title-sm">{{ user.name }}</p>
        <p class="text-xs text-zinc-500">{{ user.email }}</p>
      </div>
      <div class="mt-3 space-y-1">
        <a
          href="#"
          class="bt-menu-link"
        >
          Profile settings
        </a>
        <a
          href="#"
          class="bt-menu-link"
        >
          Notifications
        </a>
        <a
          href="#"
          class="bt-menu-link"
        >
          Sign out
        </a>
      </div>
    </div>
  </div>
</template>
