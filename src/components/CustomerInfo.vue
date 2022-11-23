<template>
    <div v-if="customer">
        <div  >        
            <p> Customer ID: {{ customer.id }}</p>
            <p> Customer Name: {{ customer.name }}</p>
            <p> Customer Contact {{ customer.contact }}</p>
            <p> Customer Staus:  {{ customer.status}} </p>
            <div id="status-change">                
                 <span> Change the customer status: </span>
                 <ListBox id="status" v-model="status" :options="allowedStates" />
                 <br> 
                 <InputButton label="Change" icon="pi" class="p-button-raised p-button-rounded"
                    @click="changeCustomerStatus" />
            </div>
        </div>   
    </div>
    <div v-else>
        <InfoMessage> Sorry, We are having trouble with showing customer information! </InfoMessage>
    </div>    
</template>

<script>
import CustomerService from '@/service/CustomerService';

    export default {
    name: "CustomerView", 
    data(){
        return {
            status : null,
            allowedStates: [ "Active", "Non-Active", "Lead"]             
        }
    },    
    props: {
        customer: {
            type: Object
        }
    },
    methods: {
        changeCustomerStatus(){
            CustomerService.changeCustomerStatus(this.$props.customer.id, this.status)
            this.$emit("reloadCustomer")
        }
    }    
    }
</script>

<style scoped>
    #status-change {        
    border: 0.5px solid black;
    border-radius: 5px;
    padding: 10px
}
</style>