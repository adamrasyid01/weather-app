// src/utils/api.ts
import axios from "axios";

export const baseRegionInstance = axios.create({
  baseURL: "/api-proxy/api",
  headers: {
    Accept: "application/json",
  },
});
export const baseForecastInstance = axios.create({
  baseURL: import.meta.env.VITE_BMKG,
  headers: {
    Accept: "application/json",
  },
})
