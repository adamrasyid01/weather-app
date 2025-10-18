<script lang="ts" setup>

import { computed, onMounted, onUnmounted, ref } from 'vue';
import Forecast from '../components/Forecast.vue';
import { useWeatherStore } from '../stores/weather';
import CustomLocationSelect from './CustomLocationSelect.vue';
import { useAreaStore } from '../stores/area';
import { getTimeDate } from '../utils/gettimedate';

// Time and Date
const timeNow = ref();
let interval: number | undefined;


const weatherStore = useWeatherStore();
const areaStore = useAreaStore();

const currentWeatherResponse = ref();
const areaResponse = ref<{ id: string; text: string }[]>([]); 

const fetchCurrentWeather = async () => {
    try {
        const response = await weatherStore.getCurrentWeather();
        if (response) {
            currentWeatherResponse.value = response;
            console.log(response.current.condition)
        } else {
            console.error("Error Cak")
        }
    } catch (err) {
        console.error("Gagal")
    }
}

const fetchKabupaten = async () => {
    try {
        const response = await areaStore.getProvince();
        if (response) {
            console.log(response)
            areaResponse.value = response.result;
            console.log(areaResponse.value)
        } else {
            console.error("Error Cak")
        }
    } catch (err) {
        console.error("Gagal")
    }
}

onMounted(() => {
    fetchCurrentWeather();
    fetchKabupaten();

    const update = () => {
        const { time, date } = getTimeDate(7); 
        timeNow.value = `${date} | ${time}`;
    };

    update();
    interval = window.setInterval(update, 1000); 
})

onUnmounted(() => {
    if (interval) clearInterval(interval)
})

const selectedCountry = ref("1");
</script>

<template>
    <div class="flex">
        <div class="basis-2/3 ">
            <!-- Header  -->
            <div class="flex flex-col justify-between h-full">
                <div class="text-end p-6"> {{ timeNow }}</div>
                <div class="flex flex-col gap-3 p-6">
                    <div class="text-end font-bold text-7xl">Heavy Rain</div>
                    <hr class=" border-gray-400 opacity-60">
                    <div class="flex gap-4">
                        <Forecast />
                        <Forecast />
                        <Forecast />
                        <Forecast />
                        <Forecast />
                        <!-- <Forecast /> -->
                    </div>
                </div>

            </div>
        </div>
        <div class="md:basis-1/3 bg-gray-500/50 flex-col items-center  text-black p-6">
            <CustomLocationSelect v-model="selectedCountry"
                :options="(areaResponse || []).map(item => ({ value: item.id, label: item.text }))"
                placeholder="Choose a country" icon="globe" />
        </div>
    </div>
</template>
