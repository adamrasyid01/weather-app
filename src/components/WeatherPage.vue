<script lang="ts" setup>

import { onMounted, ref } from 'vue';
import Forecast from '../components/Forecast.vue';
import NextDays from '../components/NextDays.vue';
import { useCurrentWeatherStore } from '../stores/currentWeather';

const currentWeatherStore = useCurrentWeatherStore();

const currentWeatherResponse = ref();

const fetchCurrentWeather = async () => {
    try{
        const response = await currentWeatherStore.getCurrentWeather();
        if(response){
            currentWeatherResponse.value = response;
            console.log(response.current.condition)

        }else{
                console.error("Error Cak")
        }
    }catch(err){
        console.error("Gagal")
    }
} 
onMounted(() => {
    fetchCurrentWeather();
    // console.log()
})
</script>

<template>
    <div class="flex">

        <div class="basis-2/3 ">
            <!-- Header  -->
            <div class="flex flex-col justify-between h-full">
                <div class="text-end p-6"> 21 April 2025 | 13:00</div>
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
            <NextDays/>
        </div>
    </div>
</template>
