import { defineStore } from "pinia";
import { apiBaseGet } from "../utils/apiHandler";

export const useCitiesStore = defineStore({"cities"
    state:()=> ({}),
    getters:{},
    actions:{
        getCities(){
            return apiBaseGet()
        }
    }

})