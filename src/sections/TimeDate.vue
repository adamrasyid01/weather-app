<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

// Reaktif data waktu dan tanggal
const time = ref('')
const date = ref('')

let interval: number | undefined

// Fungsi untuk update waktu & tanggal setiap detik
onMounted(() => {
  const updateTime = () => {
    const now = new Date()

  
    time.value = now.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    date.value = now.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  updateTime()
  interval = window.setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-[200px] text-slate-100 transition-all duration-500 ease-in-out"
  >
    <!-- Jam -->
    <h1 class="text-6xl font-bold tracking-wide drop-shadow-lg animate-pulse">
      {{ time }}
    </h1>

    <!-- Tanggal -->
    <p class="text-lg font-light tracking-widest uppercase mt-2 opacity-90">
      {{ date }}
    </p>

    <!-- Garis dekoratif -->
    <div class="w-20 h-1 bg-white/40 rounded-full my-2"></div>
  </div>
</template>
