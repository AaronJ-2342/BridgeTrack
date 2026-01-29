<script setup>
const courseCatalog = [2, 1]
// how doth the work ye courseCatalog, I can add data to thine arrayness but ye show not thine gorgeous data
</script>

<template>
  <section class="rounded-xl border border-zinc-200 bg-white">
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 px-5 py-4">
      <div>
        <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Course catalog</p>
        <p class="text-base font-semibold text-zinc-800">Select courses for Term 1 and Term 2</p>
      </div>
      <span class="rounded-full border border-zinc-200 bg-stone-50 px-3 py-1 text-[11px] font-semibold text-zinc-500">
        Catalog
      </span>
    </div>

    <div v-if="!courseCatalog.length" class="px-5 py-8 text-sm text-zinc-500">
      No course catalog data available yet.
    </div>

    <div v-else class="px-5 py-4">
      <table class="w-full table-fixed text-sm">
        <thead class="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          <tr>
            <th class="w-[110px] px-3 pb-2 text-left font-semibold">Code</th>
            <th class="px-3 pb-2 text-left font-semibold">Course</th>
            <th class="w-[150px] px-3 pb-2 text-left font-semibold">Time / Mode</th>
            <th class="w-[140px] px-3 pb-2 text-right font-semibold">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-zinc-200">
          <tr
            v-for="course in courseCatalog"
            :key="course.id"
            class="group transition-colors hover:bg-stone-50"
            :class="course.locked ? 'bg-stone-50 text-zinc-400' : 'bg-white text-zinc-700'"
          >
            <td class="px-3 py-2 align-top">
              <div class="flex flex-col gap-1">
                <span class="text-sm font-semibold" :class="course.locked ? 'text-zinc-400' : 'text-zinc-800'">
                  {{ course.code }}
                </span>
                <span v-if="course.seats" class="text-[11px] text-zinc-500">Seats: {{ course.seats }}</span>
              </div>
            </td>

            <td class="px-3 py-2 align-top">
              <div class="min-w-0">
                <p class="truncate font-semibold" :class="course.locked ? 'text-zinc-400' : 'text-zinc-800'">
                  {{ course.title }}
                </p>
                <p class="text-[11px] text-zinc-500">{{ course.time }}</p>
              </div>
            </td>

            <td class="px-3 py-2 align-top text-[11px]">
              <p class="font-semibold" :class="course.locked ? 'text-zinc-400' : 'text-zinc-700'">
                {{ course.modality }}
              </p>
              <p>Section {{ course.section }}</p>
            </td>

            <td class="px-3 py-2 align-top text-right">
              <div class="relative inline-flex justify-end">
                <button
                  class="inline-flex items-center justify-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] transition"
                  :class="course.locked ? 'cursor-not-allowed border-zinc-200 bg-stone-100 text-zinc-400' : 'border-purple-700 bg-purple-700 text-white hover:border-purple-800 hover:bg-purple-800'"
                  :disabled="course.locked"
                >
                  Add course
                </button>
                <div
                  v-if="course.locked"
                  class="pointer-events-none absolute right-0 top-full z-10 mt-2 w-[220px] rounded-lg border border-zinc-200 bg-white px-3 py-2 text-left text-[11px] text-zinc-600 shadow-[0_12px_30px_rgba(24,24,27,0.12)] opacity-0 transition group-hover:opacity-100"
                >
                  <p class="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    Missing prerequisite
                  </p>
                  <p class="mt-1 text-[11px] text-zinc-600">{{ course.prereq }}</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="courseCatalog.length" class="border-t border-zinc-200 px-5 py-4 text-xs text-zinc-500">
      Hover over disabled rows to see missing prerequisites.
    </div>
  </section>
</template>
