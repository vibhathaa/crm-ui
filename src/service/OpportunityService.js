import OpportunityRepo from "./OpportunityRepo"


export default {

    async getOppurtunitiesByCustomerId(customerId){
        const response = await OpportunityRepo.getByCustomerId(customerId)
        console.log(response)      
        const data =  response.data  
              
        return data.results
    },   

    async addOppurtunity(customerId,opportunity){
        console.log(opportunity)
        const response = await OpportunityRepo.addOpp(customerId,opportunity)
        console.log(response)      
        const data =  response.data  
              
        return data.results
    },

    async editOppurtunity(opportunityId, opportunity){
        const response = await OpportunityRepo.updateOpp(opportunityId, opportunity)
        console.log("edit opp",response)      
        const data =  response.data  
              
        return data.results
    },
    
    async deleteOppurtunity(){

    }

}