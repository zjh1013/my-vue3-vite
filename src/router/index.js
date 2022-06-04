import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import routes from './routes.js';

const router = createRouter({
    // history: createWebHashHistory(),  // hash路由模式
    history: createWebHistory(),  // history路由模式
    routes
});

export default router;