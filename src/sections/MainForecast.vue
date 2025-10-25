<script lang="ts" setup>
import { ref } from 'vue'

// Contoh data dummy, nanti bisa diganti dari fetch API BMKG
const location = ref('Kemayoran, Jakarta Pusat')
const dateTime = ref('Sab, 25 Okt 2025 — 19:00')
const temperature = ref(27)
const condition = ref('Cerah Berawan')
const humidity = ref(64)

const hourly = ref([
  { time: '19:00', temp: 27, desc: 'Cerah' },
  { time: '22:00', temp: 26, desc: 'Berawan' },
  { time: '01:00', temp: 25, desc: 'Berawan' },
  { time: '04:00', temp: 30, desc: 'Cerah' },
])
</script>

<template>
  <div class="px-8 py-4">
    <!-- Header -->
    <div class="flex justify-between items-start">
      <div>
        <h1 class="text-xl font-semibold">{{ location }}</h1>
        <p class="text-sm text-slate-300">{{ dateTime }}</p>
      </div>
      <div class="text-right">
        <h1 class="text-5xl font-bold leading-none">{{ temperature }}&deg;C</h1>
        <p class="text-sm text-slate-300">
          {{ condition }} • Kelembaban {{ humidity }}%
        </p>
      </div>
    </div>

    <hr class="my-3 border-white/10" />

    <!-- Prakiraan Per Jam -->
    <div>
      <h1 class="text-sm text-slate-300 mb-2">Per Jam</h1>
      <div class="flex gap-3 overflow-x-auto">
        <div
          v-for="(item, index) in hourly"
          :key="index"
          class="min-w-[90px] bg-white/5 rounded-lg p-3 text-center hover:bg-white/10 transition"
        >
          <p class="text-sm">{{ item.time }}</p>
          <p class="font-semibold">{{ item.temp }}&deg;</p>
          <p class="text-xs text-slate-300">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
