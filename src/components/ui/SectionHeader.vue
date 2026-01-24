<script setup>
// Consistent section header to keep layouts readable.
defineProps({
  kicker: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="flex flex-wrap items-end justify-between gap-4">
    <div>
      <p
        v-if="kicker"
        class="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500"
      >
        {{ kicker }}
      </p>
      <h2 v-if="title" class="text-xl font-semibold text-zinc-900">{{ title }}</h2>
      <p v-if="subtitle" class="mt-1.5 max-w-[520px] text-sm text-zinc-600">
        {{ subtitle }}
      </p>
    </div>
    <div v-if="$slots.actions" class="flex flex-wrap gap-2">
      <slot name="actions" />
    </div>
  </div>
</template>
