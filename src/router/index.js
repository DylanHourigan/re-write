import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '..views/Homepage.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage,
    }
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: () => import('../views/About.vue'),
    // },
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;