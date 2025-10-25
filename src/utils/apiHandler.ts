import { baseKabupatenInstance, baseKecamatanInstance, baseKelurahanInstance, baseProvinsiInstance} from "./api";



export const apiBaseProvinsi = async (url: string, params: object = {}) => {
  try {
    const response = await baseProvinsiInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};
export const apiBaseKabupaten = async (url: string, params: object = {}) => {
  try {
    const response = await baseKabupatenInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};
export const apiBaseKecamatan = async (url: string, params: object = {}) => {
  try {
    const response = await baseKecamatanInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};
export const apiBaseKelurahan = async (url: string, params: object = {}) => {
  try {
    const response = await baseKelurahanInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};



   
