import axios from "axios";

export const baseInstance = axios.create({
    headers: {
      common: {
        Accept: "text/plain, */*",
      },
    },
    baseURL: import.meta.env.VITE_BASE_URL,
  });
  