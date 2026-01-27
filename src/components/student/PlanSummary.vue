<script setup></script>

<template>
  <aside class="sticky top-20 space-y-4">
    <section class="rounded-xl border border-zinc-200 bg-white p-5">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Plan summary</p>
          <p class="text-sm font-semibold text-zinc-800">Selected courses</p>
        </div>
        <span class="rounded-full border border-zinc-200 bg-stone-50 px-3 py-1 text-[11px] font-semibold text-zinc-500">
          Term view
        </span>
      </div>

      <div class="mt-5 space-y-5">
        <div>
          <div class="flex items-center justify-between">
            <p class="text-xs font-semibold text-zinc-700">Term 1</p>
            <span class="text-[11px] text-zinc-500">0 selected</span>
          </div>
          <div class="mt-2 rounded-lg border border-dashed border-zinc-200 bg-stone-50 px-3 py-4 text-xs text-zinc-500">
            Select courses from the catalog.
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <p class="text-xs font-semibold text-zinc-700">Term 2</p>
            <span class="text-[11px] text-zinc-500">0 selected</span>
          </div>
          <div class="mt-2 flex items-center gap-3 rounded-lg border border-dashed border-zinc-200 bg-stone-50 px-3 py-4 text-xs text-zinc-500">
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-zinc-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-4 w-4">
                <path d="M7 11V8a5 5 0 0110 0v3" />
                <rect x="5" y="11" width="14" height="9" rx="2" />
              </svg>
            </span>
            Requires a Term 1 selection.
          </div>
        </div>
      </div>
    </section>

    <button
      class="w-full rounded-lg bg-purple-700 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white"
      type="button"
    >
      Submit registration
    </button>
  </aside>
</template>
