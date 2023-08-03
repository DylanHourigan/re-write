import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/Homepage.vue';
import loginPage from '../views/LoginPage.vue';
import store from '../store';

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
];

const router = createRouter({
    history: createWebHashHistory(),
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach(async (to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    store.dispatch('auth/fetchLoggedIn');
    const auth = store.getters['auth/getLoggedIn'];

    if (authRequired && auth === 'false') {
        next('/login');
    } else if (to.path === '/login' && auth === 'true'){
        next('/home');
    } 
    else {
        next();
    }
});


export default router;