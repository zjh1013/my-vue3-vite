const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        meta: {
            title: 'index主页面'
        },
        component: () => import('@view/index.vue')
    },
    {
        path: '/pages',
        component: () => import('@view/putopage/index.vue')
    }
]

export default routes