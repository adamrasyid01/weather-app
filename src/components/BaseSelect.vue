<script lang="ts" setup>
import Select from 'primevue/select'

import { computed, ref, watch, type PropType } from "vue";

const props = defineProps({
    required: {
        type: Boolean,
        default: true,
    },
    options: {
        type: Array,
        default: () => [],
    },
    showLabel: {
        type: Boolean,
        default: true
    },
    label: {
        type: String,
        default: "Label",
    },
    modelValue: {
        type: [String, Number, Boolean, Object] as PropType<
            string | number | boolean | null
        >,
        default: "",
    },
    optionValue: {
        type: String,
        default: null,
    },
    optionLabel: {
        type: String,
        default: null,
    },
    customValue: {
        type: Boolean,
        default: false,
    },
    placeHolder: {
        type: String,
        default: ""
    },
    isLoading: {
        type: Boolean,
        default: false
    }
})

const selectedData = ref<any>();

watch(
    () => props.modelValue,
    (newValue) => {
        if (newValue) {
            selectedData.value = newValue;
        }
    },
    { immediate: true }
);

const value = computed({
    get: () => props.modelValue as string,
    set: (value: string) => {
        if (props.customValue && props.optionValue) {
            selectedData.value = props.options.find(
                (data: any) => data[props.optionValue] == value
            );
        } else if (props.customValue) {
            selectedData.value = value;
        }
        emit("update:modelValue", value);
    },
});

const emit = defineEmits([
    "update:modelValue",
]);

</script>


<template>
    <div class="">
        <label v-if="showLabel" class="block font-semibold mb-[5px] text-normal">
            {{ label }}<span v-if="required" class="text-danger-300">*</span>
        </label>
        <Select v-model="value" :options="options" :optionValue="optionValue" :optionLabel="optionLabel"
            :placeholder="placeHolder" :loading="isLoading" class="h-10 rounded-sm text-sm" fluid
            filterPlaceholder="Search" :pt="{
                listContainer: { class: 'bg-slate-100 border border-gray-600 text-red-400 shadow-lg rounded-md' },
                option: { class: 'hover:bg-yellow-200 p-2 rounded-sm' },
                optionLabel: { class: 'text-blue-400' },
                filterInput: { class: 'bg-[#121212] text-blue-300 border-gray-700' },
                trigger: { class: 'bg-[#1E1E1E] text-gray-100 border border-gray-600' },
            }" 
        />

    </div>
</template>