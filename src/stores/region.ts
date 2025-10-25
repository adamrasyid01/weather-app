import { defineStore } from "pinia";
import { apiBaseKabupaten, apiBaseProvinsi } from "../utils/apiHandler";

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

        getKabupaten(payload = {}){
            let url = `/regencies/[PROVINCE_CODE].json`;
            return apiBaseKabupaten(url,payload)
        }
    },
});
