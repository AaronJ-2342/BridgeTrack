<script>
  // Placeholder. Will make more effecient later.
</script>
<template>
  <section id="calendar" class="mt-12">
    <div class="grid gap-8 border-y border-zinc-200/70 py-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="flex flex-col gap-4">
        <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-600">
          Program calendar
        </p>
        <h2 class="text-2xl font-semibold text-zinc-900">Upcoming sessions</h2>
        <p class="max-w-[520px] text-sm leading-[1.8] text-zinc-600">
          View key session dates for College Prep and ESL programs. The full calendar will be
          available in the student portal once you are registered.
        </p>
      </div>

      <div class="grid gap-4 rounded-2xl border border-purple-100/70 bg-white/70 p-6 shadow-sm">
        <div class="flex items-center justify-between text-sm font-semibold text-zinc-700">
          <span>January 2026</span>
          <span class="text-xs font-semibold text-purple-600">Session highlights</span>
        </div>
        <div class="grid grid-cols-7 gap-2 text-center text-xs text-zinc-500">
          <span>Su</span>
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
        </div>
        <div class="grid grid-cols-7 gap-2 text-center text-sm text-zinc-600">
          <span class="opacity-40">1</span>
          <span class="opacity-40">2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span class="rounded-md bg-purple-100 py-1 font-semibold text-purple-700">11</span>
          <span>12</span>
          <span>13</span>
          <span>14</span>
          <span>15</span>
          <span>16</span>
          <span>17</span>
          <span>18</span>
          <span class="rounded-md bg-purple-100 py-1 font-semibold text-purple-700">19</span>
          <span>20</span>
          <span>21</span>
          <span>22</span>
          <span>23</span>
          <span>24</span>
          <span>25</span>
          <span>26</span>
          <span class="rounded-md bg-purple-100 py-1 font-semibold text-purple-700">27</span>
          <span>28</span>
          <span>29</span>
          <span>30</span>
          <span class="opacity-40">1</span>
          <span class="opacity-40">2</span>
          <span class="opacity-40">3</span>
          <span class="opacity-40">4</span>
          <span class="opacity-40">5</span>
        </div>
        <div class="grid gap-2 text-xs text-zinc-600">
          <div class="flex items-center justify-between">
            <span class="font-semibold text-zinc-800">Sep 11</span>
            <span>Term 1 orientation session</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="font-semibold text-zinc-800">Sep 19</span>
            <span>ESL placement check-in</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="font-semibold text-zinc-800">Sep 27</span>
            <span>College Prep workshop</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
