import { defineStore } from "pinia";
import { apiBaseForecast } from "../utils/apiHandler";

export const useForecastStore = defineStore("currentWeather", {
  state: () => ({
  }),
  getters: {},
  actions: {
    getWeather(kodeWilayah:string, payload = {}) {

       const cleanKode = kodeWilayah.startsWith("/")
        ? kodeWilayah.slice(1)
        : kodeWilayah;
      const url = `publik/prakiraan-cuaca?adm4=${cleanKode}`;
      return apiBaseForecast(url, payload);
  
    },
  },
});
