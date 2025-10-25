// src/utils/api.ts
import axios from "axios";

export const baseProvinsiInstance = axios.create({
  baseURL: "/api-proxy/api",
  headers: {
    Accept: "application/json",
  },
});
export const baseKabupatenInstance = axios.create({
  baseURL: "/api-proxy/api",
  headers: {
    Accept: "application/json",
  },
});