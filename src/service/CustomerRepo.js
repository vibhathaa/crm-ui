import Repository from "./Repository";

const resource_path = "/customers"

export default {
    get() {
        return Repository.get(`${resource_path}`)
    },
    getById(customerId){
        return Repository.get(`${resource_path}/${customerId}`)
    },
    getByFilter(filter){
        return Repository.get(`${resource_path}/getByFilter`, { params: filter })
    },
    updateCustomerStatus(customerId, status){{
        return Repository.put(`${resource_path}/`, null, { params: { customerId, status }})
    }

    }
}