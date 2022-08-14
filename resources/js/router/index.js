import { createWebHistory, createRouter } from "vue-router";
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Home from "../views/home/index.vue";
import Welcome from "../components/Welcome.vue";

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: { forGuest: true }
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        meta: { forGuest: true }
    },
    {
        name: 'welcome',
        path: '/welcome',
        component: Welcome,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth) && auth.isAuthenticated()) {
//         return next({path: '/login'});
//     }
//     if (to.matched.some(record => record.meta.forGuest) && auth.isAuthenticated()) {
//         return next({path: '/admin'});
//     }
//     next();
// });

export default router;
