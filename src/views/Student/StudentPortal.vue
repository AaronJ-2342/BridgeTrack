<script setup>
import CourseCatalog from '@/components/student/CourseCatalog.vue'
import PlanSummary from '@/components/student/PlanSummary.vue'
</script>

<template>
  <div class="bg-stone-50 text-zinc-800">
    <div class="bt-container flex flex-col py-10 lg:py-14">
      <div class="mb-6">
        <p class="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Student portal
        </p>
        <h1 class="mt-2 text-2xl font-semibold text-zinc-800">Course registration</h1>
        <p class="mt-1 max-w-2xl text-sm text-zinc-500">
          Select courses for Term 1 and Term 2. Term 2 remains locked until at least one Term 1
          course is selected.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-12">
        <main class="space-y-6 lg:col-span-8 xl:col-span-9">
          <CourseCatalog />
        </main>

        <section class="lg:col-span-4 xl:col-span-3">
          <PlanSummary />
        </section>
      </div>
    </div>
  </div>
</template>
