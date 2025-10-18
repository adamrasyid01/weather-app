import axios from "axios";

export const baseWeatherInstance = axios.create({
    headers: {
      common: {
        Accept: "text/plain, */*",
      },
    },
    baseURL: import.meta.env.VITE_WEATHER_URL,
  });
  


export const baseAreaInstance = axios.create({
  headers:{
    common:{
      Accept: "text/plain, */*"
    }
  },
  baseURL: import.meta.env.VITE_AREA_URL
})