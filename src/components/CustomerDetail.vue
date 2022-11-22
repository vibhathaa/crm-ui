<template>
    <PageHeader/>
    <div id="wrapper">
        <ViewDivider align="center">
                <span class="p-tag">Customer</span>
        </ViewDivider>
        <CustomerInfo/>
            <ViewDivider align="center">
                <span class="p-tag">oppurtunities</span>
            </ViewDivider>
        <OppurtunityList v-bind:oppurtunities=OppurtunityList />
    </div>
    <PageFooter/>
</template>

<script>
import PageFooter from './PageFooter.vue';
import PageHeader from './PageHeader.vue';
import CustomerInfo from './CustomerInfo.vue';
import OppurtunityList from './OppurtunityList.vue';


export default {
    name: "CustomerDetail",
    data (){
        return {
            OppurtunityList : null
        }
    },
    props: {
        id: String
    },
    mounted() {
        console.log("customer received:", this.id);
        this.OppurtunityList = [
                {'id':1 , 'name': 'Oppurtunity1', 'status': 'won'},
                {'id':2 , 'name': 'Oppurtunity2', 'status': 'won-closed'},
                {'id':3 , 'name': 'Oppurtunity3', 'status': 'lost'},
                {'id':4 , 'name': 'Oppurtunity2', 'status': 'won-closed'},
                {'id':5 , 'name': 'Oppurtunity3', 'status': 'lost'},
                {'id':6 , 'name': 'Oppurtunity2', 'status': 'won-closed'},
                {'id':7 , 'name': 'Oppurtunity3', 'status': 'lost'},
            ]
    },
    components: { PageHeader, PageFooter, CustomerInfo, OppurtunityList }
}
</script>

<style>
#wrapper{
    margin-left: 80px;
    margin-right: 80px;
    border: 0.5px solid black;
    border-radius: 5px;
    padding: 10px
}
</style>