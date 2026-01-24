<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
</script>

<template>
  <section class="border-t border-purple-200/40 py-7">
    <SectionHeader
      kicker="Administration"
      title="Program setup"
      subtitle="Define courses, prerequisites, sections, and instructor assignments."
    />
    <div class="mt-4 grid gap-3">
      <div
        class="flex items-start justify-between gap-4 rounded-xl border border-purple-200/30 bg-white/60 px-4 py-3"
      >
        <div>
          <p class="text-sm font-semibold text-zinc-800">Courses and prerequisites</p>
          <p class="mt-1 text-xs text-zinc-500">Create ESL levels and College Prep subjects.</p>
        </div>
        <button
          class="inline-flex items-center justify-center rounded-full border border-purple-200 bg-transparent px-4 py-2 text-xs font-semibold text-purple-700 hover:bg-purple-50"
        >
          Manage courses
        </button>
      </div>
      <div
        class="flex items-start justify-between gap-4 rounded-xl border border-purple-200/30 bg-white/60 px-4 py-3"
      >
        <div>
          <p class="text-sm font-semibold text-zinc-800">Sections and schedules</p>
          <p class="mt-1 text-xs text-zinc-500">Set meeting times and modality.</p>
        </div>
        <button
          class="inline-flex items-center justify-center rounded-full border border-purple-200 bg-transparent px-4 py-2 text-xs font-semibold text-purple-700 hover:bg-purple-50"
        >
          Create section
        </button>
      </div>
      <div
        class="flex items-start justify-between gap-4 rounded-xl border border-purple-200/30 bg-white/60 px-4 py-3"
      >
        <div>
          <p class="text-sm font-semibold text-zinc-800">Instructor assignments</p>
          <p class="mt-1 text-xs text-zinc-500">Link instructors to active sections.</p>
        </div>
        <button
          class="inline-flex items-center justify-center rounded-full border border-purple-200 bg-transparent px-4 py-2 text-xs font-semibold text-purple-700 hover:bg-purple-50"
        >
          Assign instructors
        </button>
      </div>
      <div
        class="flex items-start justify-between gap-4 rounded-xl border border-purple-200/30 bg-white/60 px-4 py-3"
      >
        <div>
          <p class="text-sm font-semibold text-zinc-800">Student placement</p>
          <p class="mt-1 text-xs text-zinc-500">Assign students to sections and terms.</p>
        </div>
        <button
          class="inline-flex items-center justify-center rounded-full border border-purple-200 bg-transparent px-4 py-2 text-xs font-semibold text-purple-700 hover:bg-purple-50"
        >
          Place students
        </button>
      </div>
    </div>
  </section>
</template>
