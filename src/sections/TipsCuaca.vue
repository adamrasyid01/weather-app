<script lang="ts" setup>
import { computed } from 'vue'
import { useForecastStore } from '../stores/forecast'

const forecastStore = useForecastStore();

const weatherTip = computed(() => {
  const data = forecastStore.currentForecast
  // console.log(data);
  if (!data) return 'Pilih lokasi untuk melihat tips cuaca.'
    const lokasi = data?.lokasi?.desa || 'Wilayahmu'
    const cuaca = data?.data?.[0]?.cuaca?.[0]?.[0]?.weather_desc?.toLowerCase?.() || ''
    if (cuaca.includes('hujan')) return `${lokasi} — Bawa payung, kemungkinan hujan hari ini. ☔`
    if (cuaca.includes('cerah')) return `${lokasi} — Cuaca cerah, waktu yang pas untuk menjalani aktivitas. ☀️`
    if (cuaca.includes('berawan')) return `${lokasi} — Cuaca berawan, tetap waspada terhadap perubahan cuaca. ☁️`
    return `${lokasi} — Kondisi cuaca: ${cuaca}.`

})
</script>

<template>
  <div class="mx-auto glass rounded-2xl px-8 py-4">
    <h1 class="font-semibold">Tips Cuaca</h1>
    <p class="text-slate-300 my-2">{{ weatherTip }}</p>
  </div>
</template>
