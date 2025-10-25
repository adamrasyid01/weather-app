<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';
import BaseSelect from '../components/BaseSelect.vue';
import { useRegionStore } from '../stores/region';
import TimeDate from './TimeDate.vue';
import { useForecastStore } from '../stores/forecast';
import Footer from './Footer.vue';



// Ambil Provinsi di Indonesia
const regionStore = useRegionStore();
const forecastStore = useForecastStore();

// STATE LOKAL
const provinsiResponse = ref<{ code: string; name: string }[]>([]);
const kabKotaResponse = ref<{ code: string; name: string }[]>([]);
const kecamatanResponse = ref<{ code: string; name: string }[]>([]);
const kelurahanResponse = ref<{ code: string; name: string }[]>([]);


const selectedProvinsi = ref<string | null>(null);
const selectedKabKota = ref<string | null>(null);
const selectedKecamatan = ref<string | null>(null);
const selectedKelurahan = ref<string | null>(null);


const fetchProvinsi = async () => {
    try {
        const response = await regionStore.getProvinsi();
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

const fetchKabKota = async (provinsiCode: string) => {
    try {
        const response = await regionStore.getKabKota(provinsiCode);
        if (response) {
            kabKotaResponse.value = response.data;
        }
    } catch (error) {
        console.error(error);
    }
}
const fetchKecamatan = async (kabKotaCode: string) => {
    try {
        console.log(kabKotaCode);
        const response = await regionStore.getKecamatan(kabKotaCode);
        if (response) {
            kecamatanResponse.value = response.data;
        }
    } catch (error) {
        console.error(error);
    }
}

const fetchKelurahan = async (kecamatanCode: string) => {
    try {
        const response = await regionStore.getKelurahan(kecamatanCode);
        if (response) kelurahanResponse.value = response.data;
    } catch (err) {
        console.error(err);
    }
};

const fetchForecast = async(kelurahanCode: string) => {
    try {
      const response = await forecastStore.getWeather(kelurahanCode); // panggil API cuaca
      console.log("🌤️ Data cuaca:", response.data);
    } catch (err) {
      console.error("Gagal ambil data cuaca:", err);
    }
}

const provinsiOptions = computed(() =>
    provinsiResponse.value.map((item) => ({
        value: item.code,
        label: item.name,
    }))
);

const kabupatenOptions = computed(() =>
    kabKotaResponse.value.map((item) => ({
        value: item.code,
        label: item.name,
    }))
);
const kecamatanOptions = computed(() =>
    kecamatanResponse.value.map((item) => ({
        value: item.code,
        label: item.name,
    }))
);

const kelurahanOptions = computed(() =>
    kelurahanResponse.value.map((item) => ({
        value: item.code,
        label: item.name,
    }))
);

// WATCHERS
watch(selectedProvinsi, (newVal) => {
    if (newVal) {
        fetchKabKota(newVal);
        // Reset bawahnya
        selectedKabKota.value = null;
        selectedKecamatan.value = null;
        selectedKelurahan.value = null;
        kabKotaResponse.value = [];
        kecamatanResponse.value = [];
        kelurahanResponse.value = [];
    }
});

watch(selectedKabKota, (newVal) => {
    if (newVal) {
        fetchKecamatan(newVal);
        selectedKecamatan.value = null;
        selectedKelurahan.value = null;
        kecamatanResponse.value = [];
        kelurahanResponse.value = [];
    }
});

watch(selectedKecamatan, (newVal) => {
    if (newVal) {
        fetchKelurahan(newVal);
        selectedKelurahan.value = null;
        kelurahanResponse.value = [];
    }
});

watch(selectedKelurahan, async (newVal) => {
  if (newVal) {
    console.log("📍 Kelurahan terpilih:", newVal);
    fetchForecast(newVal);
  }
});


onMounted(() => {
    fetchProvinsi()
})
</script>

<template>
    <TimeDate />
    <Footer/>
    <div class="max-w-4xl w-full px-6 py-3">
        <div class="rounded-2xl p-2">
            <div class="flex flex-col  gap-4">
                <div>
                    <h1 class="text-2xl md:text-4xl font-extrabold tracking-tight">Cuaca Hari Ini</h1>
                    <p class="text-sm text-slate-300 mt-2">Ramalan cepat dan detail — Pilih Kota lalu catat cuacanya</p>
                </div>
                <div class="md:grid grid-cols-4 gap-4 ">
                    <BaseSelect label="Pilih Provinsi" v-model="selectedProvinsi" :options="provinsiOptions"
                        optionLabel="label" optionValue="value" prependIcon="" />
                    <BaseSelect label="Pilih Kabupaten/Kota" v-model="selectedKabKota" :options="kabupatenOptions"
                        optionLabel="label" optionValue="value" :disabled="!selectedProvinsi" />
                    <BaseSelect label="Pilih Kecamatan" v-model="selectedKecamatan" :options="kecamatanOptions"
                        optionLabel="label" optionValue="value" :disabled="!selectedKabKota" />
                    <BaseSelect label="Pilih Kelurahan" v-model="selectedKelurahan" :options="kelurahanOptions"
                        optionLabel="label" optionValue="value" :disabled="!selectedKecamatan" />
                </div>
            </div>
        </div>
    </div>
</template>