import { defineStore } from "pinia";
import { apiBaseWeather } from "../utils/apiHandler";

interface CurrentWeatherParams{
    q?:string;
    aqi?:boolean;
}

export const useWeatherStore = defineStore("currentWeather", {
  state: () => ({
  }),
  getters: {},
  actions: {
    getCurrentWeather(params:CurrentWeatherParams = {}, payload = {}) {
      const { q = "Surabaya", aqi = false } = params;
      const url = `/current.json?key=${import.meta.env.VITE_KEY}&q=${q}&aqi=${aqi}`;
      return apiBaseWeather(url, payload);
  
    },
  },
});
