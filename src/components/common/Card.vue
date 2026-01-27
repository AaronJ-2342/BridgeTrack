<script setup>
/**
 * Card provides a consistent surface with padding and border.
 */
defineProps({
  /**
   * Semantic element for the card wrapper.
   */
  as: {
    type: String,
    default: 'div',
  },
})
</script>

<template>
  <component :is="as" class="bt-card">
    <slot />
  </component>
</template>
