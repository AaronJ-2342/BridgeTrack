<template>
    <main
      class="min-h-screen text-slate-900"
      :style="{ background: `url(${mainImg}) no-repeat center center fixed`,
        backgroundSize: 'cover'
      }"
    >
  
    <div class="absolute inset-0 bg-black/30"></div>
      <div class="relative">
        <div class="h-screen flex items-center justify-center flex-col">
          <!-- header -->
          <div>
            <header class="mb-6 mr-9">
              <h1
                class="text-3xl font-semibold tracking-tight text-white"
                style="text-shadow: 0 2px 6px rgba(0, 0, 0, 0.45)"
              >
                Welcome to Bridge Track!
              </h1>
  
              <p class="mt-2 text-sm text-stone-200">
                Effortless user access
              </p>
            </header>
          </div>
  
          <!-- Form -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-800">
            <form class="space-y-6" @submit.prevent="enter">
  
              <!-- Username -->
              <div>
                <label for="username" class="block text-sm font-medium text-slate-700">
                  Username
                </label>
  
                <!-- focus:border-slate-400 changes the inner border color
                focus:ring-2 makes a second ring around the main one that is 2px thick, 
                focus:ring-slate-200 changes the color of the second ring (makes it lighter in color) -->
                <input
                  id="username"
                  v-model.trim="form.username"
                  type="text"
                  class="mt-2 w-full rounded-xl border border-slate-300 bg-white px-2 py-3 text-sm outline-none ring-offset-2 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                  placeholder="Username"
                >
              </div>
  
              <!-- Password -->
              <div>
                <label class="block text-sm font-medium text-slate-700 mt-3">
                  Password
                </label>
  
                <input
                  id="password"
                  v-model.trim="form.password"
                  type="password"
                  class="mt-1 w-full rounded-xl border border-slate-300 bg-white px-2 py-3 text-sm outline-none ring-offset-2 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                  placeholder="Password"
                >
              </div>
  
              <!-- Actions -->
              <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div class="flex gap-3">
                  <a href="/">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    >
                    Return
                    </button>
                  </a>
  
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
                  >
                    Forgot Password?
                  </button>
  
                  
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    >
                      Enter
                    </button>
                  
                </div>
              </div>
  
              <div
                v-if="status.message"
                class="rounded-xl border border-slate-200 bg-white p-3 text-sm"
                :class="status.ok ? 'text-slate-800' : 'text-rose-700'"
              >
              {{ status.message }}
              </div>
            </form>
        </div>
      </div>
    </div>
  
    </main>
  </template>
  <script setup>
    import mainImg from '@/assets/studentsStudying.jpg'
    import { reactive } from 'vue'
    import { useRouter } from 'vue-router'
  
    const router = useRouter()
  
    const form = reactive({
      username: '',
      password: '',
    })
  
    const status = reactive({
      ok: true,
      message: '',
    })
  
    function enter() {
      if (!form.username || !form.password) {
        status.ok = false
        status.message = 'Please fill out all requiered fields.'
        return
      }
  
      //placeholder until we get data from db or backend?
      status.ok = true
      status.message = ''
      router.push('/portal')
    }
  
  </script>