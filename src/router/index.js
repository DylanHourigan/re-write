import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Homepage.vue';
import loginPage from '../views/LoginPage.vue';

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'Login',
        component: loginPage,
    },
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: () => import('../views/About.vue'),
    // },
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes,
});

export default router;