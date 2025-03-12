import { baseInstance } from "./api";

export const apiBaseGet = async (url: string, data:  object) => {
     // ✅ GET Request
     try {
        let response = await baseInstance.get(url, data);
        return response.data
     } catch (error) {
        console.error("GET Error:", error);
        throw error;
     }
}
   