<script setup>
import { reactive, watch } from 'vue'
import forestBg from '@/assets/Forest.jpg'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  under18: false,
  birthdate: '',
}

const form = reactive({ ...initialForm })

const status = reactive({
  ok: true,
  message: '',
})

// Keep birthdate cleared when not needed
watch(
  () => form.under18,
  (isUnder18) => {
    if (!isUnder18) form.birthdate = ''
  },
)

function resetForm() {
  Object.assign(form, initialForm)
  status.ok = true
  status.message = ''
}

function submitForm() {
  // Confirm required fields before submitting.
  if (!form.firstName || !form.lastName || !form.email || !form.phone) {
    status.ok = false
    status.message = 'Please fill out all required fields.'
    return
  }
  if (form.under18 && !form.birthdate) {
    status.ok = false
    status.message = 'Birthdate is required if you are under 18.'
    return
  }

  status.ok = true
  status.message = 'Registration submitted.'
}
</script>

<template>
  <main
    class="relative min-h-screen text-slate-900"
    :style="{ background: `url(${forestBg}) no-repeat center center fixed` }"
  >
    <div class="absolute inset-0 bg-black/45"></div>
    <div class="relative">
      <div class="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-10">
        <section class="w-full">
          <header class="mb-6">
            <h1
              class="text-3xl font-semibold tracking-tight text-white"
              style="text-shadow: 0 2px 6px rgba(0, 0, 0, 0.45)"
            >
              Student Registration
            </h1>
            <p class="mt-2 text-sm text-stone-300">
              Register once to access eligible courses and plan your terms. No login required.
            </p>
          </header>

          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <form class="space-y-6" @submit.prevent="submitForm">
              <!-- Name -->
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-slate-700">
                    First name <span class="text-rose-600">*</span>
                  </label>
                  <input
                    id="firstName"
                    v-model.trim="form.firstName"
                    type="text"
                    class="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-offset-2 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                    placeholder="John"
                    required
                  />
                  <p class="mt-1 text-xs text-slate-500">Enter your legal first name.</p>
                </div>

                <div>
                  <label for="lastName" class="block text-sm font-medium text-slate-700">
                    Last name <span class="text-rose-600">*</span>
                  </label>
                  <input
                    id="lastName"
                    v-model.trim="form.lastName"
                    type="text"
                    class="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-offset-2 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                    placeholder="Smith"
                    required
                  />
                  <p class="mt-1 text-xs text-slate-500">Enter your legal last name.</p>
                </div>
              </div>

              <!-- Contact -->
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label for="email" class="block text-sm font-medium text-slate-700">
                    Email <span class="text-rose-600">*</span>
                  </label>
                  <input
                    id="email"
                    v-model.trim="form.email"
                    type="email"
                    class="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-offset-2 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                    placeholder="you@example.com"
                    required
                  />
                  <p class="mt-1 text-xs text-slate-500">
                    We’ll use this to prevent duplicate registrations.
                  </p>
                </div>

                <div>
                  <label for="phone" class="block text-sm font-medium text-slate-700">
                    Phone <span class="text-rose-600">*</span>
                  </label>
                  <input
                    id="phone"
                    v-model.trim="form.phone"
                    type="tel"
                    inputmode="tel"
                    class="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-offset-2 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                    placeholder="(555) 123-4567"
                    required
                  />
                  <p class="mt-1 text-xs text-slate-500">Include a number you can be reached at.</p>
                </div>
              </div>

              <!-- Under 18 -->
              <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div class="flex items-start gap-3">
                  <input
                    id="under18"
                    v-model="form.under18"
                    type="checkbox"
                    class="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-200"
                  />
                  <div>
                    <label for="under18" class="block text-sm font-medium text-slate-800">
                      I am under 18
                    </label>
                    <p class="mt-1 text-xs text-slate-600">If checked, a birthdate is required.</p>
                  </div>
                </div>

                <div v-if="form.under18" class="mt-4">
                  <label for="birthdate" class="block text-sm font-medium text-slate-700">
                    Birthdate <span class="text-rose-600">*</span>
                  </label>
                  <input
                    id="birthdate"
                    v-model="form.birthdate"
                    type="date"
                    class="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-offset-2 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                    :required="form.under18"
                  />
                  <p class="mt-1 text-xs text-slate-500">Only required if you’re under 18.</p>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p class="text-xs text-slate-500">
                  Fields marked <span class="text-rose-600">*</span> are required.
                </p>

                <div class="flex gap-3">
                  <RouterLink to="/">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    >
                      Return
                    </button>
                  </RouterLink>

                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    @click="resetForm"
                  >
                    Clear
                  </button>

                  <button
                    type="submit"
                    class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                  >
                    Submit registration
                  </button>
                </div>
              </div>

              <!-- Status (optional placeholder) -->
              <div
                v-if="status.message"
                class="rounded-xl border border-slate-200 bg-white p-3 text-sm"
                :class="status.ok ? 'text-slate-800' : 'text-rose-700'"
              >
                {{ status.message }}
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
