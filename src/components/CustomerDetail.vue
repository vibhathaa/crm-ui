<template>
    <PageHeader></PageHeader>
    <div id="wrapper">
        <ViewDivider align="center">
            <span class="p-tag">Customer</span>
        </ViewDivider>
        <CustomerInfo :customer=this.customer @reloadCustomer="handleReloadCustomerEvent" />
        <ViewDivider align="center">
            <span class="p-tag">oppurtunities</span>
        </ViewDivider>
        <div v-if=opportunities>
            <OppurtunityList :key=this.key v-bind:oppurtunities=this.opportunities @reloadOpportunityList="handleReloadOpportunityEvent" />
        </div>
        <div v-else>
            <InfoMessage> Sorry, We are having trouble showing you the opportunities. Please try refreshing !
            </InfoMessage>
        </div>
    </div>
    <PageFooter />
</template>

<script>
import PageFooter from './PageFooter.vue';
import CustomerInfo from './CustomerInfo.vue';
import OppurtunityList from './OppurtunityList.vue';
import CustomerService from '@/service/CustomerService';
import OpportunityService from '@/service/OpportunityService';
import PageHeader from './PageHeader.vue';


export default {
    name: "CustomerDetail",
    components: {
        PageFooter,
        CustomerInfo,
        OppurtunityList,
        PageHeader
    },
    data() {
        return {
            opportunities: null,
            customer: null,
            key: null
        }
    },
    props: {
        id: String
    },
    methods: {
        async fetchCustomerInfo() {            
            const data = await CustomerService.getCustomerById(this.id)
            this.customer = data

        },
        async fetchOpportunities() {
            const data = await OpportunityService.getOppurtunitiesByCustomerId(this.id)
            data.forEach((item) => {
                item.customer_id = this.id
            })
            this.opportunities = data
        },
        handleReloadOpportunityEvent(){
            console.log("customer info is being loaded.")
            this.fetchOpportunities()
            this.$forceUpdate()
        },  
        handleReloadCustomerEvent(){
            console.log("customer info is being loaded.")
            this.fetchCustomerInfo()
            this.$forceUpdate()
        }     
    },
    created() {
        this.fetchCustomerInfo();
        this.fetchOpportunities();
        this.timer = setInterval(() => {
            this.fetchCustomerInfo();
            this.fetchOpportunities()
        }, 5000);
    },
}
</script>

<style>
#wrapper {
    margin-left: 80px;
    margin-right: 80px;
    border: 0.5px solid black;
    border-radius: 5px;
    padding: 10px
}
</style>