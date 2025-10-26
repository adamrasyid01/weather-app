import { defineStore } from "pinia";
import { apiBaseForecast } from "../utils/apiHandler";

export const useForecastStore = defineStore("currentWeather", {
  state: () => ({
    currentForecast: null as any | null,
  }),
  actions: {
    async getWeather(kodeWilayah: string, payload = {}) { 
      const cleanKode = kodeWilayah.startsWith("/")
        ? kodeWilayah.slice(1)
        : kodeWilayah;

      const url = `publik/prakiraan-cuaca?adm4=${cleanKode}`;
      const response = await apiBaseForecast(url, payload); 
      this.currentForecast = response; 
      return response;
    },
  },
});
