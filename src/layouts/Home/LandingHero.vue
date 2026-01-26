<script setup>
import studentsStudying from '@/assets/studentsStudying.jpg'
</script>

<template>
  <section id="overview" class="relative py-12">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -top-20 right-[-40px] h-72 w-72 rounded-full bg-purple-200/40 blur-3xl"></div>
      <div class="absolute bottom-[-40px] left-[-60px] h-72 w-72 rounded-full bg-pink-100/50 blur-3xl"></div>
    </div>

    <div class="relative mx-auto max-w-7xl">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div class="flex flex-col gap-6">
          <div class="grid gap-4 animate-[bt-fade-up_0.6s_ease_both] motion-reduce:animate-none">
            <p class="text-[11px] font-semibold uppercase tracking-[0.32em] text-purple-600">
              BridgeTrack Student Portal
            </p>
            <h1 class="text-[clamp(2.6rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-zinc-900">
              College Prep and ESL programs, all in one portal.
            </h1>
            <p class="max-w-[560px] text-[15px] leading-[1.8] text-zinc-600">
              Complete registration, review term plans, and check attendance for your BridgeTrack
              courses. This portal is designed for students preparing for college success.
            </p>
            <div class="mt-2 flex gap-3">
              <RouterLink
                to="/register"
                class="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-purple-700 to-purple-600 px-5 py-2 text-xs font-semibold text-white shadow-[0_16px_32px_rgba(109,40,217,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(109,40,217,0.34)]"
              >
                Start student registration
              </RouterLink>
              <RouterLink
                to="/login"
                class="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-purple-700 to-purple-600 px-5 py-2 text-xs font-semibold text-white shadow-[0_16px_32px_rgba(109,40,217,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(109,40,217,0.34)]"
              >
                Student Login
              </RouterLink>
            </div>
            <p class="text-xs text-zinc-500">
              Portal help: support@bridgetrack.org
            </p>
          </div>

          <div class="grid gap-4 border-t border-zinc-200/70 pt-6 text-sm text-zinc-600">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Portal essentials
            </p>
            <div class="grid gap-3 sm:grid-cols-2">
              <div class="flex flex-col gap-1">
                <p class="text-sm font-semibold text-zinc-900">Registration checklist</p>
                <p class="text-sm text-zinc-600">Upload documents and track approval status.</p>
              </div>
              <div class="flex flex-col gap-1">
                <p class="text-sm font-semibold text-zinc-900">Term plan overview</p>
                <p class="text-sm text-zinc-600">Review recommended courses and prerequisites.</p>
              </div>
              <div class="flex flex-col gap-1">
                <p class="text-sm font-semibold text-zinc-900">Class schedule</p>
                <p class="text-sm text-zinc-600">View meeting times, rooms, and instructors.</p>
              </div>
              <div class="flex flex-col gap-1">
                <p class="text-sm font-semibold text-zinc-900">Attendance records</p>
                <p class="text-sm text-zinc-600">Check weekly attendance for each course.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid gap-6">
          <figure class="overflow-hidden rounded-3xl border border-purple-100/70 bg-white shadow-[0_20px_40px_rgba(24,24,27,0.12)]">
            <img
              :src="studentsStudying"
              alt="Students studying together"
              class="h-80 w-full object-cover md:h-[22rem]"
              loading="lazy"
            />
          </figure>
          <div class="grid gap-3 border-t border-zinc-200/70 pt-6 text-sm text-zinc-600">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Student support
            </p>
            <p class="text-sm text-zinc-600">
              Questions about your registration or schedule? Reach out to your program advisor or
              email support@bridgetrack.org.
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
      </div>
    </div>
  </section>
</template>
