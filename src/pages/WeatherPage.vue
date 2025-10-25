<script lang="ts" setup>

import { computed, onMounted, onUnmounted, ref } from 'vue';
import Forecast from '../components/Forecast.vue';
import { useRegionStore } from '../stores/region';
import { getTimeDate } from '../utils/gettimedate';
import BaseSelect from '../components/BaseSelect.vue';

// Time and Date
const timeNow = ref();
let interval: number | undefined;



// Ambil Provinsi di Indonesia
const provinsiStore = useRegionStore();
// Ambil Kota di Indonesia
const kotaKabStore = useRegionStore();


const provinsiResponse = ref<{ code: string; name: string }[]>([]); 
const kotaKabResponse = ref<{id:string; text: string}[]>([]);


const selectedProvinsi = ref();

const fetchProvinsi = async () => {
    try {
        const response = await provinsiStore.getProvinsi();
        if (response) {
            console.log(response.data)
            provinsiResponse.value = response.data;
        } else {
            console.error("Error Cak")
        }
    } catch (err) {
        console.error(err)
    }
}

const provinsiOptions = computed(() =>
  provinsiResponse.value.map((item: any) => ({
    value: item.code,
    label: item.name,
  }))
);

onMounted(() => {

    fetchProvinsi();

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
                        <Forecast />
                    </div>
                </div>

            </div>
        </div>
        <div class="md:basis-1/3 flex-col items-center  text-black p-6">
            <BaseSelect label="Pilih Provinsi" v-model="selectedProvinsi" :options="provinsiOptions" optionLabel="label" optionValue ="value" prependIcon=""/>
            <BaseSelect label="Pilih Kabupaten"/>
            <BaseSelect label="Pilih Kecamatan"/>
            <BaseSelect label="Pilih Kelurahan"/>
        </div>
    </div>
</template>
