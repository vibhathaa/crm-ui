//import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Message from 'primevue/message';
import Button from "primevue/button";
import Listbox from 'primevue/listbox';
import FieldSet from "primevue/fieldset"
import Divider from 'primevue/divider';
import ToolBar from 'primevue/toolbar';
import Dialog from "primevue/dialog";
import SelectButton from 'primevue/selectbutton'


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.use(router);

app.use(PrimeVue);
app.component('DataTable', DataTable);
app.component('DataColumn', Column);
app.component('ViewSplitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('InputText', InputText);
app.component('DropDown', Dropdown);
app.component('InputCalendar', Calendar);
app.component('InfoMessage', Message)
app.component('InputButton', Button)
app.component('FieldSet', FieldSet)
app.component("ListBox", Listbox)
app.component("ViewDivider", Divider)
app.component("ViewToolbar", ToolBar)
app.component("ViewDialog", Dialog)
app.component("SelectButoon", SelectButton)

app.mount('#app')

