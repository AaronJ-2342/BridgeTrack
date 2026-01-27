<script setup>
defineProps({
  title: {
    type: String,
    default: 'Nothing here yet',
  },
  description: {
    type: String,
    default: 'Once data is available, it will appear here.',
  },
  actionLabel: {
    type: String,
    default: '',
  },
  actionHref: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="flex flex-col gap-3 rounded-2xl border border-dashed border-purple-200/60 bg-white/60 p-4">
    <div
      class="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700"
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="9" y="12" width="30" height="24" rx="4" />
        <path d="M14 20h20M14 27h14" />
      </svg>
    </div>
    <div>
      <p class="bt-title-strong">{{ title }}</p>
      <p class="mt-2 text-xs text-zinc-500">{{ description }}</p>
      <a
        v-if="actionLabel"
        :href="actionHref || '#'"
        class="mt-2 inline-flex text-xs font-semibold text-purple-700 hover:text-purple-800"
      >
        {{ actionLabel }}
      </a>
    </div>
  </div>
</template>
