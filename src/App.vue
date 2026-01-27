<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Navbar from '@/components/common/Navbar.vue'

const route = useRoute()
const showNav = computed(() => !route.meta?.hideNav)
</script>

<template>
  <div class="relative min-h-screen bg-stone-50">
    <div class="relative">
      <Navbar v-if="showNav" />
      <RouterView />
    </div>
  </div>
</template>
