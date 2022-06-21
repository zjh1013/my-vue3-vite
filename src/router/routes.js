const routes = [
    {
        path: '/',
        redirect: '/one',
        meta: {
            isshow: false
        }
    },
    {
        path: '/login',
        component: () => import('@view/login/login.vue'),
        meta: {
            isshow: false
        }
    },
    {
        path: '/one',
        component: () => import('@layout/index.vue'),
        redirect: '/one/one1',
        meta: {
            isshow: true,
            name: '左家辉'
        },
        children: [
            {
                path: '/one/one1',
                component: () => import('@view/one/one1.vue'),
                meta: {
                    name: 'one1'
                }
            },
            {
                path: '/one/one2',
                component: () => import('@view/one/one2.vue'),
                meta: {
                    name: 'one2'
                }
            },
            {
                path: '/one/one3',
                component: () => import('@view/one/one3.vue'),
                meta: {
                    name: 'one3'
                }
            }
        ]
    },  {
        path: '/pages',
        component: () => import('@layout/index.vue'),
        redirect: '/pages/page1',
        meta: {
            isshow: true,
            name: '李宁'
        },
        children: [
            {
                path: '/pages/page1',
                component: () => import('@view/putopage/index.vue'),
                meta: {
                    name: 'page1'
                }
            }
        ]
    },

]

export default routes