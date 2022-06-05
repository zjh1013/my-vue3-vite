const routes = [
    {
        path:'/',
        redirect:'/pages'
    },
    {
        path: '/index',
        component: () => import('@view/index.vue')
    },
    {
        path:'/pages',
        component:() => import('@view/putopage/index.vue')
    }
]

export default routes