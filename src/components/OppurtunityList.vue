<template>
    <div  v-if="oppurtunities" > 
    <ViewToolbar class="mb-4">
                <template #start>
                    <InputButton label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="showAddOppurtunity" />                    
                </template>                
    </ViewToolbar>     
    <DataTable :value="oppurtunities" :resizableColumns="true" class="p-datatable-md" columnResizeMode="fit" showGridlines responsiveLayout >
        <DataColumn field="id" header="ID" :sortable="true"/>
        <DataColumn field="name" header="Name" :sortable="true"/>
        <DataColumn field="status" header="Status" />        
        <DataColumn field="action" header="Action">
        <template #body="slotProps">
            <InputButton  icon="pi pi-pencil"  class="p-button-rounded p-button-success" @click="showEditOppurtunity(slotProps.data)" /> 
            <br>
            <InputButton  icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="showDeleteOppurtunity(slotProps.data)" />                       
        </template>
        </DataColumn>
    </DataTable>    
    </div>

    <div v-else>
        <InfoMessage> Sorry, We do not have any oppurtunities to show!</InfoMessage>
    </div>

    <ViewDialog v-model:visible="newOppurtunityDialog" header="New Oppurtunity" :modal="true" class="p-fluid">
        
        <div class="field">
                <label for="name">Name</label>
                <InputText id="name" v-model.trim="oppurtunity.name" required="true" autofocus :class="{'p-invalid': submitted && !oppurtunity.name}" />
                <small class="p-error" v-if="submitted && !oppurtunity.name">Name is required.</small>
        </div> 

        <div class="field">
                <label for="status">Status</label>
                <ListBox id="status" v-model="oppurtunity.status" :options=oppurtunityStatusList required="true" autofocus :class="{'p-invalid': submitted && !oppurtunity.name}" />
                <small class="p-error" v-if="submitted && !oppurtunity.status">Status is required.</small>
        </div>    
        
        <template #footer>
                <InputButton label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                <InputButton label="Save" icon="pi pi-check" class="p-button-text" @click="addOppurtunity" />
        </template>
        
        
    </ViewDialog>

        
    <ViewDialog v-model:visible="editOppurtunityDialog" header="Edit Oppurtunity" :modal="true" class="p-fluid">
        <div class="field">
                <label for="id">Id</label>
                <InputText id="id" v-model="oppurtunity.id" disabled="true" autofocus />                
        </div> 

        <div class="field">
                <label for="name">Name</label>
                <InputText id="name" v-model.trim="oppurtunity.name" required="true" autofocus :class="{'p-invalid': submitted && !oppurtunity.name}" />
                <small class="p-error" v-if="submitted && !oppurtunity.name">Name is required.</small>
        </div> 

        <div class="field">
                <label for="">Status</label>
                <ListBox id="status" v-model="oppurtunity.status" :options=oppurtunityStatusList required="true" autofocus :class="{'p-invalid': submitted && !oppurtunity.name}" />
                <small class="p-error" v-if="submitted && !oppurtunity.status">Status is required.</small>
        </div>    
        
        <template #footer>
                <InputButton label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                <InputButton label="Save" icon="pi pi-check" class="p-button-text" @click="addOppurtunity" />
        </template>
        
    </ViewDialog>

    <ViewDialog v-model:visible="deleteOppurtunityDialog" header="Confirm Delete?" :modal="true" class="p-fluid">
        
        <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete <b>{{oppurtunity.name}}</b>?</span>
            </div>
            <template #footer>
                <InputButton label="No" icon="pi pi-times" class="p-button-text" @click="deleteOppurtunityDialog = false"/>
                <InputButton label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteOppurtunity" />
            </template>
    </ViewDialog>

</template>

<script>
    export default{
        data(){
            return {
                newOppurtunityDialog: false,
                editOppurtunityDialog: false,
                deleteOppurtunityDialog: false,
                submitted: false,
                oppurtunity: {
                    id: null,
                    name: null,
                    status: null
                },
                oppurtunityStatusList: [
                    "New",
                    "Closed Won",
                    "Closed Lost"
                ],
                BrandnewOppurtunity: {
                    name: null,
                    sttaus: null
                },
            }
        },
        props: {
            oppurtunities : {
                type: Array
            }
        },
        methods: { 
            showAddOppurtunity(data){                 
                this.oppurtunity.name = data.name
                this.oppurtunity.status = data.status

                this.newOppurtunityDialog= true
            },
            showEditOppurtunity(data){
                this.oppurtunity.id = data.id
                this.oppurtunity.name = data.name
                this.oppurtunity.status = data.status

                this.editOppurtunityDialog = true
            },
            showDeleteOppurtunity(data){
                this.oppurtunity.id = data.id
                this.oppurtunity.name = data.name
                this.oppurtunity.status = data.status

                this.deleteOppurtunityDialog = true
            },
            addOppurtunity(){
                

            },
            updateOppurtunity(){

            },
            deleteOppurtunity(){

            }

        },
        mounted(){            
        },

        created(){            
        }
    }
</script>

<style></style>