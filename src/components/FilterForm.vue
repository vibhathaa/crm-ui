<template>
    <div>
        <h3> Filter Customers</h3>

        <InputText id="name" type="text" placeholder="name" v-model="name" @keydown.space.prevent />

        <InputText id="contact" type="text" placeholder="contact" v-model="contact" @keydown.space.prevent />

        <InputText id="id" type="text" placeholder="ID" v-model="id" @keydown.space.prevent />

        <InputCalendar v-model="date" placeholder="Creation Date Range" inputId="basic" type="date" :showTime="false"
            dateFormat="dd.mm.yy" autocomplete="off" />

        <br />
        <br />

        <InputButton label="Reset" icon="pi pi-times" class="p-button-raised p-button-rounded"
            @click="formReset($event)" />

        <InputButton label="Search" icon="pi pi-search" class="p-button-raised p-button-rounded"
            @click="formSubmit($event)" />

    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            contact: null,
            id: null,
            date: null,
            status: null,
            statusList: [
                "Active",
                "Non-Active",
                "Lead"
            ]
        }
    },
    methods: {
        formSubmit() {
            const filterParams = {
                name: this.name,
                contact: this.contact,
                id: this.id,
                createdTimestamp: this.date
            }
            this.$emit("filterCustomerInput", filterParams)
        },
        formReset() {
            this.name = null
            this.contact = null
            this.id = null
            this.createdTimestamp = null
            this.$emit("reloadCustomerTable")
        }
    },
    emits: ['filterCustomerInput', 'reloadCustomerTable'],
    name: "FilterForm",
}
</script>

<style scoped>
[type=text],
[type=date] {
    margin: 6px;
    width: auto;
}
div {
    border: 0.5px solid black;
    border-radius: 5px;
    padding: 10px;
    align-content: center;
}
button {
    margin: 6px
}
</style>