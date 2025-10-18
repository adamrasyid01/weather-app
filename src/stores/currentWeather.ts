import { defineStore } from "pinia";
import { apiBaseGet } from "../utils/apiHandler";

interface CurrentWeatherParams{
    q?:string;
    aqi?:boolean;
}

export const useCurrentWeatherStore = defineStore("currentWeather", {
  state: () => ({
  }),
  getters: {},
  actions: {
    getCurrentWeather(params:CurrentWeatherParams = {}, payload = {}) {
      const { q = "Surabaya", aqi = false } = params;
      const url = `/current.json?key=${import.meta.env.VITE_KEY}&q=${q}&aqi=${aqi}`;
      return apiBaseGet(url, payload);
  
    },
  },
});
