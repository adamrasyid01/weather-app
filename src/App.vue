<script setup lang="ts">
import { ref } from 'vue';
import CustomSearch from './components/CustomSearch.vue';
import bgImage from './assets/rainy.jpg';
import WeatherPage from './components/WeatherPage.vue';

const searchQuery = ref();

const tes = (query: string) => {
  console.log("Search query:", query);
};
</script>

<template>
  <div class="min-h-screen bg-black bg-opacity-70 relative flex items-center justify-center">
    <!-- Background Image -->
    <img :src="bgImage" class="absolute top-0 left-0 w-full h-full object-cover opacity-50" alt="Weather Background" />


    <!-- Main Container -->
    <div class="relative border-8 border-gray-300  bg-cover bg-center backdrop-blur-lg shadow-lg rounded-2xl w-[90%] max-w-4xl p-6 text-white"
      :style="{ backgroundImage: `url(${bgImage})` }">
     
      <WeatherPage /> 
    </div>
  </div>
</template>
