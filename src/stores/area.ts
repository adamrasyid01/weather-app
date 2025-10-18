import { defineStore } from "pinia";
import { apiBaseArea } from "../utils/apiHandler";

export const useAreaStore = defineStore("area", {
    state: () => ({
    }),

    getters: {

    },

    actions: {
        getProvince(payload = {}) {
            let url = `/provinsi/get/`;
            return apiBaseArea(url, payload);
        },
        getCities(provinsiId:number, payload= {}){
            let url = `kabkota/get/?d_provinsi_id=${provinsiId}`
            return apiBaseArea(url,payload)
        }
    },
});
