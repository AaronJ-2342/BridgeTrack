<script setup>
import studentsStudying from '@/assets/studentsStudying.jpg'
</script>

<template>
  <div class="bg-white">
    <section id="overview" class="relative">
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="absolute -top-24 left-[-80px] h-80 w-80 rounded-full bg-purple-50 blur-3xl"></div>
      </div>

      <div class="bt-container py-16 lg:py-20">
        <div class="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="flex flex-col gap-6">
            <div class="grid gap-4 animate-[bt-fade-up_0.6s_ease_both] motion-reduce:animate-none">
              <p class="text-[11px] font-semibold uppercase tracking-[0.32em] text-purple-700">
                Student portal
              </p>
              <h1 class="text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-zinc-900 lg:text-6xl">
                College Prep and ESL programs
                <span class="bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
                  in one portal
                </span>
                .
              </h1>
              <p class="max-w-[560px] text-base leading-[1.8] text-zinc-600">
                Complete registration and plan Term 1 and Term 2 courses. Registration does not
                require a login.
              </p>
              <div class="mt-2 flex flex-wrap gap-3">
                <RouterLink
                  to="/register"
                  class="inline-flex items-center justify-center rounded-md bg-purple-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-800"
                >
                  Open registration
                </RouterLink>
                <RouterLink
                  to="/login"
                  class="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-5 py-2 text-sm font-semibold text-zinc-700 transition hover:border-purple-200 hover:text-purple-700"
                >
                  Student login
                </RouterLink>
              </div>
              <p class="text-xs text-zinc-500">
                Support: support@bridgetrack.org
              </p>
            </div>

            <div class="grid gap-3 border-t border-zinc-100 pt-6 text-sm text-zinc-600">
              <p class="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Student support
              </p>
              <p class="text-sm text-zinc-600">
                For registration or schedule questions, contact your program advisor or email
                support@bridgetrack.org.
              </p>
              <div class="flex flex-wrap gap-3 text-xs font-semibold text-purple-700">
                <span class="rounded-md border border-purple-200/70 bg-white px-3 py-2">
                  Office hours: Mon–Thu, 9am–4pm
                </span>
                <span class="rounded-md border border-purple-200/70 bg-white px-3 py-2">
                  Response time: within 2 business days
                </span>
              </div>
            </div>
          </div>

          <div class="grid gap-6">
            <figure class="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_40px_rgba(15,23,42,0.12)]">
              <img
                :src="studentsStudying"
                alt="Students studying together"
                class="h-80 w-full object-cover md:h-[22rem]"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>

  <section id="features" class="border-t border-zinc-100 bg-zinc-50">
    <div class="bt-container py-12 lg:py-16">
      <div class="grid gap-4">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">
          Portal sections
        </p>
        <h2 class="text-2xl font-semibold text-zinc-900">Student portal sections</h2>
        <p class="max-w-[600px] text-sm text-zinc-600">
          Registration, course eligibility, term planning, and schedule conflicts.
        </p>
      </div>

      <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div class="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 8h6M9 12h6M9 16h4" />
            </svg>
          </div>
          <p class="mt-4 text-sm font-semibold text-zinc-900">Registration form</p>
          <p class="mt-2 text-sm text-zinc-600">Submit a registration form without login.</p>
        </div>
        <div class="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M6 10h12M8 14h8M10 18h4" />
            </svg>
          </div>
          <p class="mt-4 text-sm font-semibold text-zinc-900">Course eligibility</p>
          <p class="mt-2 text-sm text-zinc-600">View missing prerequisites for unavailable courses.</p>
        </div>
        <div class="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 3v2M17 3v2M4 8h16M6 12h5M6 16h8" />
              <rect x="4" y="6" width="16" height="14" rx="2" />
            </svg>
          </div>
          <p class="mt-4 text-sm font-semibold text-zinc-900">Term planning</p>
          <p class="mt-2 text-sm text-zinc-600">Plan Term 1 and Term 2 based on prerequisites.</p>
        </div>
        <div class="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 6h18M5 10h6M5 14h8M5 18h4" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 14l2 2 4-4" />
            </svg>
          </div>
          <p class="mt-4 text-sm font-semibold text-zinc-900">Schedule conflicts</p>
          <p class="mt-2 text-sm text-zinc-600">Overlapping sections are disabled.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="calendar" class="border-t border-zinc-200 bg-white">
    <div class="bt-container py-12 lg:py-16">
      <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="flex flex-col gap-4">
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-purple-700">
            Program calendar
          </p>
          <h2 class="text-3xl font-bold text-zinc-900">Session dates</h2>
          <p class="max-w-[520px] text-base leading-[1.8] text-zinc-600">
            Key session dates for College Prep and ESL programs. The full calendar is available in
            the student portal after registration.
          </p>
        </div>

        <div class="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_18px_30px_rgba(15,23,42,0.08)]">
          <div class="flex items-center justify-between text-sm font-semibold text-zinc-800">
            <span>January 2026</span>
            <span class="text-xs font-semibold text-purple-700">Session dates</span>
          </div>
          <div class="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-zinc-600">
            <span>Su</span>
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
          </div>
          <div class="grid grid-cols-7 gap-2 text-center text-sm font-medium text-zinc-700">
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
          <div class="grid gap-2 text-sm text-zinc-600">
            <div class="flex items-center justify-between">
              <span class="font-semibold text-zinc-900">Sep 11</span>
              <span>Term 1 orientation session</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-semibold text-zinc-900">Sep 19</span>
              <span>ESL placement check-in</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-semibold text-zinc-900">Sep 27</span>
              <span>College Prep workshop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer id="support" class="border-t border-zinc-200 bg-zinc-50">
    <div class="bt-container py-10">
      <div class="grid gap-6 md:grid-cols-2">
        <div class="space-y-3">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Program support
          </p>
          <p class="text-base font-medium text-zinc-700">Contact: support@bridgetrack.org</p>
          <div class="mt-2 flex flex-wrap gap-4 text-sm font-semibold text-purple-700">
            <a href="#" class="hover:text-purple-800">Privacy policy</a>
            <a href="#" class="hover:text-purple-800">Terms of service</a>
            <a href="#" class="hover:text-purple-800">FAQs</a>
          </div>
        </div>
        <div class="space-y-3 md:text-right">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Program details
          </p>
          <p class="text-base text-zinc-700">
            College Prep and ESL courses for enrolled students.
          </p>
          <p class="text-sm font-medium text-zinc-600">
            Office hours: Mon–Thu, 9am–4pm
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
