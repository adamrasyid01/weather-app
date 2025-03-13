<script setup lang="ts">
import { ref } from "vue";
import CustomLocationSelect from "../components/CustomLocationSelect.vue";

const selectedCountry = ref("us");
</script>

<template>
    <div>

        <CustomLocationSelect v-model="selectedCountry" :options="[
            { value: 'us', label: 'United States' },
            { value: 'id', label: 'Indonesia' }
        ]" placeholder="Choose a country" icon="globe" />
    </div>
</template>
