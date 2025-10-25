<script lang="ts" setup>
import BaseSelect from '../components/BaseSelect.vue';
import TimeDate from './TimeDate.vue';


</script>

<template>

    <TimeDate />
    <div class="max-w-4xl w-full px-6 ">
        <div class="rounded-2xl p-2">
            <div class="flex flex-col  gap-4">
                <div>
                    <h1 class="text-2xl md:text-4xl font-extrabold tracking-tight">Cuaca Hari Ini</h1>
                    <p class="text-sm text-slate-300 mt-2">Ramalan cepat dan detail — Pilih Kota lalu catat cuacanya</p>
                </div>
                <div class="md:grid grid-cols-4 gap-4 ">

                    <!-- <BaseSelect label="Pilih Provinsi" v-model="selectedProvinsi" :options="provinsiOptions" optionLabel="label" optionValue ="value" prependIcon="" /> -->
                    <BaseSelect />
                    <BaseSelect />
                    <BaseSelect />
                    <BaseSelect />
                </div>
            </div>
        </div>
    </div>
</template>