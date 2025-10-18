import { baseWeatherInstance, baseAreaInstance } from "./api";

export const apiBaseWeather = async (url: string, data:  object) => {
     // ✅ GET Request
     try {
        let response = await baseWeatherInstance.get(url, data);
        return response.data
     } catch (error) {
        console.error("GET Error:", error);
        throw error;
     }
}
   
export const apiBaseArea = async (url:string, data: object) => {
   try{
      let response = await baseAreaInstance.get(url,data);
      return response.data
   }catch (error){
      console.error("GET Error : ", error)
      throw error;
   }
}