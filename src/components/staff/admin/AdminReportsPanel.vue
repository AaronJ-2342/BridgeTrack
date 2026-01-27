<template>
  <div class="space-y-8">
    <div>
      <p class="bt-label">Section 4</p>
      <h2 class="text-xl font-semibold text-zinc-900">Reporting</h2>
      <p class="mt-1.5 max-w-[640px] text-sm text-zinc-600">
        Generate attendance reports by date range and section, then export to PDF.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-4">
      <label class="flex flex-col gap-1.5">
        <span class="bt-label-compact">Start date</span>
        <input
          type="date"
          class="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
        />
      </label>
      <label class="flex flex-col gap-1.5">
        <span class="bt-label-compact">End date</span>
        <input
          type="date"
          class="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
        />
      </label>
      <label class="flex flex-col gap-1.5">
        <span class="bt-label-compact">Section</span>
        <select
          class="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
        >
          <option>All sections</option>
        </select>
      </label>
      <div class="flex items-end">
        <button class="bt-btn-primary w-full" type="button">Generate report</button>
      </div>
    </div>

    <div class="flex flex-wrap gap-2">
      <button class="bt-btn-outline" type="button">Export report PDF</button>
    </div>
  </div>
</template>
