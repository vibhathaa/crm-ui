import CustomerRepo from "./CustomerRepo"

export default {

    async getAllCustomers() {
        const response = await CustomerRepo.get()
        const data = response.data

        return data.results
    },

    async getCustomersByFilter(filter) {
        const response = await CustomerRepo.getByFilter(filter)
        const data = response.data

        return data.results
    },

    async getCustomerById(customerId) {

        const response = await CustomerRepo.getById(customerId)
        const data = response.data
        
        return data.results[0]

    },

    async changeCustomerStatus(customerId, status) {
        const response = await CustomerRepo.updateCustomerStatus(customerId, status)
        const data = response.data

        return data.results
    }
}