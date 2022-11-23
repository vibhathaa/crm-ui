// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
//import App from '../App.vue'
import CustomerDetail from "@/components/CustomerDetail"
import CustomerView from "@/components/CustomerView"

const routes = [
    {
        path: '/',
        name: 'root',
        component: CustomerView
    },
    {
        path: '/customer-detail/:id',
        name: 'customerdetails',
        component: CustomerDetail,
        props: true
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router