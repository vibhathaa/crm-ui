<template>
<PageHeader />
<div id="wrapper">
 <ViewSplitter>
    <SplitterPanel :size="20" >
        <FilterForm @filterCustomerInput="filterEvent" />
    </SplitterPanel>
    <SplitterPanel :size="80" :min-size="75" >
        <CustomerTable v-bind:customers="customers"/>
    </SplitterPanel>
 </ViewSplitter>
 <PageFooter />
 </div>
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
        PageHeader,
        PageFooter
    }, 
    methods: {
        filterEvent(filter){
            console.log("from parent:", filter)
            this.fetchCustomerByFilter(filter)
        },
        async fetchCustomers(){
            console.log("fetching data")
            const data = await CustomerService.getAllCustomers()
            console.log("fetched in parent", data)
            this.customers = data
        },
        async fetchCustomerByFilter(filter){
            const data = await CustomerService.getCustomersByFilter(filter)
            console.log("after filter response:", data)
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