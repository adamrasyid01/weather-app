<script lang="ts" setup>
import { defineProps, defineEmits, computed, type PropType } from "vue";

const props = defineProps({
  modelValue: {
     type: [String, Number, Boolean, Object] as PropType<
      string | number | boolean | null
    >,
    default:""
  }, // Untuk binding v-model
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

const value = computed({
  get: () => props.modelValue as string,
  set: (value: string) => {
    console.log(value)
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <b-field>
    <b-select
      :placeholder="placeholder"
      :icon="icon"
      @update:modelValue="emit('update:modelValue', $event)"
      v-model="value" 
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
