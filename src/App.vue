<script setup lang="ts">
import { ref } from 'vue';
import CustomSearch from './components/CustomSearch.vue'
import bgImage from './assets/weather.jpg'

const searchQuery = ref()

const tes = (query: string) => {
  console.log("Search query:", query);
}

</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4"
  :style="{ backgroundImage: `url(${bgImage})` }">
    <h1 class="text-2xl font-semibold text-white mb-4">Weather Forecast</h1>
    <CustomSearch v-model="searchQuery" @search="tes" />
  </div>
</template>

<style scoped>

</style>
