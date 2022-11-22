<template>
<div id="wrapper" v-if="customers" >      
    <DataTable :value="customers" :resizableColumns="true" showGridlines responsiveLayout>
        <DataColumn field="id" header="ID" :sortable="true"/>
        <DataColumn field="name" header="Name" :sortable="true"/>
        <DataColumn field="status" header="Status" />
        <DataColumn field="contact" header="Contact" />       
        <DataColumn field="createdTimestamp" header="Date" :sortable="true"/>
        <DataColumn field="action" header="Action">
        <template #body="slotProps">
            <InputButton icon="pi pi-pencil" label="edit" class="p-button-rounded p-button-success mr-2" @click="editCustomer(slotProps.data)" />                        
        </template>
        </DataColumn>
    </DataTable>    
</div>
<div v-else>
    <InfoMessage> Sorry, We do not have any customers to show!</InfoMessage>
</div>
</template>

<script >
export default {
    name: "CustomerTable",
    props: {
        customers: {
            type: Array
        }
    },    
    mounted() {            
    },
    created() {        
    },
    methods: {
        editCustomer(customer){ 
            console.log("customer id", customer.id)           
            this.$router.push({
                name: "customerdetails",
                params: { "id" : customer.id }
            })
        },      

    }
}
</script>

<style scoped>
    #wrapper {
    border: 0.5px solid black;
    border-radius: 5px;
    padding: 0px;
}
</style>