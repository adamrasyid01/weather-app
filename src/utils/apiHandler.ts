import { baseForecastInstance, baseRegionInstance} from "./api";


export const apiBaseProvinsi = async (url: string, params: object = {}) => {
  try {
    const response = await baseRegionInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};
export const apiBaseKabupaten = async (url: string, params: object = {}) => {
  try {
    const response = await baseRegionInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};
export const apiBaseKecamatan = async (url: string, params: object = {}) => {
  try {
    const response = await baseRegionInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};
export const apiBaseKelurahan = async (url: string, params: object = {}) => {
  try {
    const response = await baseRegionInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};

// CUACA
export const apiBaseForecast = async (url: string, params: object = {}) => {
  try {
    const response = await baseForecastInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};



   
