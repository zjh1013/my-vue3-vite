const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: () => import('@view/index.vue')
    },
    {
        path: '/pages',
        component: () => import('@view/putopage/index.vue')
    }
]

export default routes