<template>
<PageHeader></PageHeader>
<div id="wrapper">
 <ViewSplitter>
    <SplitterPanel :size="20" >
        <FilterForm @filterCustomerInput="filterEvent" @reloadCustomerTable="fetchCustomers" />
    </SplitterPanel>
    <SplitterPanel :size="80" :min-size="75" >
        <CustomerTable v-bind:customers="customers"/>
    </SplitterPanel>
 </ViewSplitter> 
 </div>
 <PageFooter />
</template>

<script>
import CustomerTable from './CustomerTable.vue';
import FilterForm from './FilterForm.vue';
import PageHeader from './PageHeader.vue';
import PageFooter from './PageFooter.vue';
import CustomerService from '@/service/CustomerService.js';

export default {
    name: "CustomerView",
    data() {
        return {
            customers : null
        }
    },
    components: {
    CustomerTable,
    FilterForm,    
    PageFooter,
    PageHeader
}, 
    methods: {
        filterEvent(filter){            
            this.fetchCustomerByFilter(filter)
        },
        async fetchCustomers(){            
            const data = await CustomerService.getAllCustomers()            
            this.customers = data
        },
        async fetchCustomerByFilter(filter){
            const data = await CustomerService.getCustomersByFilter(filter)            
            this.customers = data
        }
    },
    created(){
        this.fetchCustomers()
    }
}
</script>

<style sco>
#wrapper {    
    margin-left: 80px;
    margin-right: 80px;
    border: 0.5px solid black;
    border-radius: 5px;
    padding: 10px
}
</style>