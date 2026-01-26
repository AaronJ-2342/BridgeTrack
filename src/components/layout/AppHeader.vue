<script setup>
import UserMenu from './UserMenu.vue'

defineProps({
  user: {
    type: Object,
    default: () => ({
      name: 'BridgeTrack User',
      email: 'user@example.com',
      initials: 'BU',
    }),
  },
  contextLabel: {
    type: String,
    default: '',
  },
  contextNote: {
    type: String,
    default: '',
  },
  showUser: {
    type: Boolean,
    default: true,
  },
  variant: {
    type: String,
    default: 'default',
  },
})

</script>

<template>
  <header
    :class="[
      'sticky top-0 z-40 border-b backdrop-blur-xl',
      variant === 'plain'
        ? 'border-zinc-200/60 bg-[#f3f1ed]/95'
        : 'border-purple-200/40 bg-white/70',
    ]"
  >
    <div
      :class="[
        'mx-auto flex w-full flex-wrap items-center justify-between gap-4 px-5',
        variant === 'plain' ? 'py-3' : 'py-4',
        variant === 'plain' ? 'max-w-[80rem]' : 'max-w-[1536px]',
      ]"
    >
      <div class="flex items-center gap-3">
        <div
          :class="[
            'flex items-center justify-center rounded-[14px] bg-gradient-to-br from-purple-700 to-purple-600 text-white',
            variant === 'plain'
              ? 'h-9 w-9 shadow-[0_8px_18px_rgba(109,40,217,0.2)]'
              : 'h-10 w-10 shadow-[0_12px_28px_rgba(109,40,217,0.25)]',
          ]"
        >
          <RouterLink
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.24 50.552 50.552 0 00-2.658.813m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
          </RouterLink>
        </div>
        <div>
          <div class="flex items-center gap-3">
            <span class="text-lg font-semibold tracking-tight text-zinc-900">BridgeTrack</span>
            <span
              v-if="contextLabel"
              class="rounded-full bg-purple-100 px-2.5 py-1 text-[11px] font-semibold text-purple-700"
            >
              {{ contextLabel }}
            </span>
          </div>
          <p v-if="contextNote" class="text-xs text-zinc-500">{{ contextNote }}</p>
        </div>
      </div>

      <nav
        v-if="$slots.nav"
        class="flex flex-1 flex-wrap justify-center gap-4 text-xs font-semibold text-zinc-600 max-[899px]:order-3 max-[899px]:w-full max-[899px]:justify-start max-[899px]:overflow-x-auto max-[899px]:pb-1"
      >
        <slot name="nav" />
      </nav>

      <div v-if="showUser || $slots.actions" class="flex items-center gap-3">
        <slot name="actions" />
        <UserMenu v-if="showUser" :user="user" />
      </div>
    </div>
  </header>
</template>
