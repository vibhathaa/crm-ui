import Repository from "./Repository";

const customer_path = "/customers"
const opp_path = "/opportunities"

export default {
    getByCustomerId(customerId) {
        return Repository.get(`${customer_path}/${customerId}${opp_path}`)
    },
    addOpp(customerId, opportunity) {
        console.log("add op called")
        return Repository.post(`${customer_path}/${customerId}${opp_path}`, opportunity)
    },
    updateOpp(opportunityId, opportunity) {
        {
            return Repository.put(`${opp_path}/${opportunityId}`, opportunity)
        }

    }
}