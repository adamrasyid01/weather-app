<script setup lang="ts">
import { ref } from 'vue';
import Hero from './sections/Hero.vue';
import MainForecast from './sections/MainForecast.vue';
import TipsCuaca from './sections/TipsCuaca.vue';

const selectedKelurahan =  ref<string | null>(null)
</script>

<template>
  <div
    class=" flex items-center justify-center bg-gradient-to-b from-sky-900 via-slate-900 to-gray-900 text-slate-100 min-h-screen">
    <div class="shadow-lg rounded-2xl max-w-4xl w-full mx-auto text-white 
         border-0 md:border md:border-white/5">
      <Hero v-model:selectedKelurahan="selectedKelurahan" />
      
      <MainForecast v-if="selectedKelurahan" :kodeWilayah="selectedKelurahan"/>
      <TipsCuaca />
    </div>
  </div>
</template>
