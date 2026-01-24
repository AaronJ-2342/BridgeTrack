<script setup>
import AppHeader from './AppHeader.vue'

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
  shellVariant: {
    type: String,
    default: 'default',
  },
  showUser: {
    type: Boolean,
    default: true,
  },
  contentClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div
    :class="[
      'relative min-h-screen overflow-hidden',
      shellVariant === 'plain'
        ? 'bg-[#f3f1ed] bg-[radial-gradient(circle_at_8%_6%,rgba(109,40,217,0.04),transparent_55%),radial-gradient(circle_at_92%_10%,rgba(109,40,217,0.03),transparent_60%)]'
        : 'bg-[radial-gradient(circle_at_5%_10%,rgba(109,40,217,0.12),transparent_50%),radial-gradient(circle_at_90%_-20%,rgba(109,40,217,0.14),transparent_55%),linear-gradient(180deg,#f8f5f2_0%,#f3f0ff_100%)]',
    ]"
  >
    <div v-if="shellVariant !== 'plain'" class="pointer-events-none absolute inset-0">
      <div
        class="absolute right-[-60px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(109,40,217,0.2)_0%,transparent_70%)] opacity-60"
      ></div>
      <div
        class="absolute bottom-[-120px] left-[-80px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(109,40,217,0.18)_0%,transparent_70%)] opacity-60"
      ></div>
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(109,40,217,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(109,40,217,0.04)_1px,transparent_1px)] bg-[length:32px_32px] opacity-20"
      ></div>
    </div>

    <div class="relative z-10">
      <AppHeader
        :user="user"
        :context-label="contextLabel"
        :context-note="contextNote"
        :show-user="showUser"
        :variant="shellVariant"
      >
        <template #nav>
          <slot name="nav" />
        </template>
        <template #actions>
          <slot name="actions" />
        </template>
      </AppHeader>

      <div
        :class="[
          'mx-auto w-full px-5 pb-[72px] pt-8 lg:px-14 lg:pb-[88px] lg:pt-10 xl:px-[72px]',
          shellVariant === 'plain' ? 'max-w-[80rem]' : 'max-w-[1536px]',
          contentClass,
        ]"
      >
        <main class="min-w-0">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
