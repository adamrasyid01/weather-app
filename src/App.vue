<script setup lang="ts">
import WeatherPage from './pages/WeatherPage.vue';
import Footer from './sections/Footer.vue';
import Hero from './sections/Hero.vue';
import MainForecast from './sections/MainForecast.vue';
import TipsCuaca from './sections/TipsCuaca.vue';
</script>

<template>
  <div class=" flex items-center justify-center bg-gradient-to-b from-sky-900 via-slate-900 to-gray-900 text-slate-100 min-h-screen">
    <div class="shadow-lg rounded-2xl max-w-4xl w-full mx-auto text-white border border-white/5">
      <Hero />
      <MainForecast />
      <TipsCuaca />
    </div>
  </div>
</template>
