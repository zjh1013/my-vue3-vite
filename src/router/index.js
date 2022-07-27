import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import routes from './routes.js';

const router = createRouter({
    // history: createWebHashHistory(),  // hash路由模式
    history: createWebHistory(),  // history路由模式
    routes
});
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        // 登录或者注册才可以往下进行
        next();
    } else {
        // 获取 token
        const token = sessionStorage.getItem('Authorization');
        // token 不存在
        if (token === null || token === '') {
            next('/login');
        } else {
            next();
        }
    }
});

export default router;