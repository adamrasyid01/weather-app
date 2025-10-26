import axios from "axios";

const isProd = import.meta.env.PROD;


export const baseRegionInstance = axios.create({
  baseURL: isProd
    ? import.meta.env.VITE_PROVINSI_INDONESIA 
    : "/api-proxy/api",
  headers: {
    Accept: "application/json",
  },
});

export const baseForecastInstance = axios.create({
  baseURL: import.meta.env.VITE_BMKG,
  headers: {
    Accept: "application/json",
  },
});
