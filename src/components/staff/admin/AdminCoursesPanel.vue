<script setup>
defineProps({
  programs: {
    type: Array,
    default: () => [],
  },
  courses: {
    type: Array,
    default: () => [],
  },
  prerequisites: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="space-y-10">
    <div>
      <p class="bt-label">Section 1</p>
      <h2 class="text-xl font-semibold text-zinc-900">Course & program management</h2>
      <p class="mt-1.5 max-w-[640px] text-sm text-zinc-600">
        Manage programs, courses, and prerequisite rules.
      </p>
    </div>

    <div>
      <div class="flex flex-wrap items-center justify-between gap-3">
        <h3 class="bt-title-strong">Programs</h3>
        <button class="bt-btn-outline" type="button">Add program</button>
      </div>
      <div v-if="!programs.length" class="mt-4 text-sm text-zinc-500">
        No programs available yet.
      </div>
      <div v-else class="mt-4 space-y-3">
        <div v-for="program in programs" :key="program.id" class="bt-panel-row">
          <div>
            <p class="bt-title-strong">{{ program.name }}</p>
            <p class="bt-subtext">{{ program.courses }} courses</p>
          </div>
          <button class="bt-btn-outline-sm" type="button">Edit</button>
        </div>
      </div>
    </div>

    <div>
      <div class="flex flex-wrap items-center justify-between gap-3">
        <h3 class="bt-title-strong">Courses</h3>
        <button class="bt-btn-outline" type="button">Add course</button>
      </div>
      <div v-if="!courses.length" class="mt-4 text-sm text-zinc-500">
        No courses available yet.
      </div>
      <div v-else class="mt-4 space-y-3">
        <div v-for="course in courses" :key="course.id" class="bt-panel-row">
          <div>
            <p class="bt-title-strong">{{ course.name }}</p>
            <p class="bt-subtext">{{ course.program }}</p>
            <p class="mt-1 text-xs text-zinc-500">Prereqs: {{ course.prerequisites }}</p>
          </div>
          <button class="bt-btn-outline-sm" type="button">Edit</button>
        </div>
      </div>
    </div>

    <div>
      <div class="flex flex-wrap items-center justify-between gap-3">
        <h3 class="bt-title-strong">Prerequisites</h3>
        <button class="bt-btn-outline" type="button">Add prerequisite</button>
      </div>
      <div v-if="!prerequisites.length" class="mt-4 text-sm text-zinc-500">
        No prerequisites available yet.
      </div>
      <div v-else class="mt-4 space-y-3">
        <div v-for="rule in prerequisites" :key="rule.id" class="bt-panel-row">
          <div>
            <p class="bt-title-strong">{{ rule.course }}</p>
            <p class="bt-subtext">{{ rule.requirement }}</p>
          </div>
          <button class="bt-btn-outline-sm" type="button">Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>
