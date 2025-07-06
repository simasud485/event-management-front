import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import MemberRegistration from "@/views/MemberRegistration.vue";


const routes = [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginView },
    { path: '/registration', component: MemberRegistration },
]

const router = createRouter({
    history: createWebHistory(),
    routes,

})

export default router;
