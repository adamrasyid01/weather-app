<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useForecastStore } from '../stores/forecast'

// Store
const forecastStore = useForecastStore()

const props = defineProps({
  kodeWilayah: {
    type: String,
    required: true,
  },
})

// STATE
const location = ref('')
const dateTime = ref('')
const temperature = ref<number | null>(null)
const condition = ref('')
const humidity = ref<number | null>(null)
const hourly = ref<{ time: string; temp: number; desc: string; icon?: string }[]>([])
const loading = ref(false)

// Fungsi ambil data cuaca
const fetchWeather = async () => {
  if (!props.kodeWilayah) return
  try {
    loading.value = true
    const data = await forecastStore.getWeather(props.kodeWilayah)
    console.log('🌦️ BMKG response:', data)
    const tipCuaca = forecastStore.currentForecast

    // Lokasi
    const loc = data.lokasi
    location.value = `${loc.desa}, ${loc.kecamatan}, ${loc.kotkab}`

    // Ambil data cuaca hari pertama
    const cuacaHariIni = data.data[0].cuaca.flat()

    
    const now = cuacaHariIni[0]
    temperature.value = now.t
    condition.value = now.weather_desc
    humidity.value = now.hu
    dateTime.value = new Date(now.local_datetime).toLocaleString('id-ID', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    
    hourly.value = cuacaHariIni.slice(0, 8).map((item: any) => ({
      time: new Date(item.local_datetime).toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      temp: item.t,
      desc: item.weather_desc,
      icon: item.image,
    }))
  } catch (err) {
    console.error('Gagal fetch cuaca:', err)
  } finally {
    loading.value = false
  }
}

watch(
  () => props.kodeWilayah,
  (newVal) => {
    if (newVal) fetchWeather()
  },
  { immediate: true }
)
</script>

<template>
  <div class="px-8 py-4" v-if="!loading && temperature !== null">
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
          <img v-if="item.icon" :src="item.icon" alt="" class="mx-auto w-8 h-8" />
          <p class="font-semibold">{{ item.temp }}&deg;</p>
          <p class="text-xs text-slate-300">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="text-center py-6 text-slate-400">
    Memuat data cuaca...
  </div>
</template>
