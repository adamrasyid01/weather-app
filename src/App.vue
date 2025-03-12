<script setup lang="ts">
import { ref } from 'vue';
import CustomSearch from './components/CustomSearch.vue'


const searchQuery = ref()

const tes = (query: string) => {
  console.log("Search query:", query);
}

</script>

<template>
<CustomSearch v-model="searchQuery" @search="tes" />
</template>

<style scoped>

</style>
