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
    <div class="py-2">
        <label v-if="showLabel" class="block font-semibold mb-[5px] text-normal">
            {{ label }}<span v-if="required" class="text-danger-300">*</span>
        </label>
        <Select v-model="value" :options="options" :optionValue="optionValue" :optionLabel="optionLabel"
            :placeholder="placeHolder" :loading="isLoading" class="h-10 rounded-sm text-sm" fluid
            filterPlaceholder="Search" :pt="{
                root: { class: 'bg-[#1E1E1E] border border-gray-700 rounded-lg transition-all duration-200' },
                trigger: { class: 'text-gray-100 rounded-lg hover:bg-[#2A2A2A]' },
                listContainer: { class: 'bg-[#1E1E1E] border border-gray-700 rounded-lg shadow-xl' },
                option: ({ context }) => ({
                    class: [
                        context.selected
                            ? 'bg-blue-500 text-[#8AB4F8]' // ✅ Warna saat terpilih
                            : 'hover:bg-slate-800'
                    ]
                }),
                optionLabel: { class: 'text-gray-200' },

                emptyMessage: { class: 'text-gray-400 italic' }
            }" />

    </div>
</template>