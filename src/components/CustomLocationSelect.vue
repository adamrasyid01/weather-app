<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  modelValue: String, // Untuk binding v-model
  options: {
    type: Array as () => { value: string; label: string }[],
    default: () => [],
  },
  placeholder: {
    type: String,
    default: "Select an option",
  },
  icon: {
    type: String,
    default: "earth",
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <b-field>
    <b-select
      :value="modelValue"
      :placeholder="placeholder"
      :icon="icon"
      @input="emit('update:modelValue', $event)" 
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        class="bg-blue-300"
      >
        {{ option.label }}
      </option>
    </b-select>
  </b-field>
</template>
