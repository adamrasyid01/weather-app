<script setup lang="ts">
import { ref, watch } from 'vue';


const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeHolder: {
    type: String,
    default: 'Search...'
  }
})

const emit = defineEmits(["update:modelValue", "search"])

const searchQuery = ref(props.modelValue);

watch(searchQuery, (newValue) => {
  emit("update:modelValue", newValue);
  // console.log("Input changed:", newValue);
});
</script>

<template>
  <div class="relative w-full max-w-md mx-auto">
    <div class="relative"  >
      <!-- Input dengan padding kanan lebih besar untuk ikon -->
      <input
        type="text"
        v-model="searchQuery"
        :placeholder="props.placeHolder"
        class="w-full px-4 py-3 pr-10 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-md"
      />
      <!-- Ikon berada di dalam input -->
      <PhMagnifyingGlass
        :size="20"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
       @click="emit('search', searchQuery)"
      />
    </div>
  </div>
</template>