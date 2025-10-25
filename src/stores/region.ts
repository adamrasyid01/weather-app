import { defineStore } from "pinia";
import { apiBaseKabupaten, apiBaseKelurahan, apiBaseProvinsi } from "../utils/apiHandler";

export const useRegionStore = defineStore("area", {
    state: () => ({
    }),

    getters: {

    },

    actions: {
        getProvinsi(payload = {}) {
            let url = `/provinces.json`;
            return apiBaseProvinsi(url, payload);
        },

        getKabKota(provinsiCode: string, payload = {}) {
            if (!provinsiCode) throw new Error("Province code is required");
            const url = `/regencies/${provinsiCode}.json`; // <-- dynamic
            return apiBaseKabupaten(url, payload);
        },
        getKecamatan(kabKotaCode: string, payload = {}) {
            if (!kabKotaCode) throw new Error("Kabupaten code is required");
            const url = `/districts/${kabKotaCode}.json`; // <-- dynamic
            return apiBaseKabupaten(url, payload);
        },
        getKelurahan(kecamatanCode: string, payload = {}) {
            if (!kecamatanCode) throw new Error("Kecamatan code is required");
            const url = `/villages/${kecamatanCode}.json`; // <-- dynamic
            return apiBaseKelurahan(url, payload);
        },


    },
});
