import axios from "axios"

const baseURL = "http://localhost:8000/customers/"

export default {

    async getAllCustomers(){        
        const response = await axios.get(baseURL)        
        const data =  JSON.parse(response.data).results        
        return data
    },   

    async getCustomersByFilter(filter){
        const response = await axios.get(baseURL+"getByFilter", { params: filter })
        const data =  JSON.parse(response.data).results;
        return data
    },

    async getCustomerById(){

    },

    async changeCustomerStatus(){

    }
}