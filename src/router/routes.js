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
        meta: {
            title: '修页面'
        },
        component: () => import('@view/putopage/index.vue')
    },
    // {
    //     path:'/child',
    //     meta:{
    //         title:'子页面'
    //     },
    //     component:() => import('@view/putopage/child.vue')
    // }
]

export default routes