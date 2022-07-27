const routes = [
    {
        path: '/',
        redirect: '/login',
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
                    name: '练习vue3写法的基础知识'
                }
            },
            {
                path: '/one/one2',
                component: () => import('@view/one/one2/one2.vue'),
                meta: {
                    name: 'vue3父子之间通信'
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
    }, {    
        path: '/two',
        component: () => import('@layout/index.vue'),
        redirect: '/two/page1',
        meta: {
            isshow: true,
            name: '李宁'
        },
        children: [
            {
                path: '/two/page1',
                component: () => import('@view/putopage/index.vue'),
                meta: {
                    name: 'page1'
                }
            },
            {
                path: '/two/page2',
                component: () => import('@view/putopage2/index.vue'),
                meta: {
                    name: 'page2'
                }
            },
            {
                path: '/two/page3',
                component: () => import('@view/putopage3/index.vue'),
                meta: {
                    name: 'page3'
                }
            }
        ]
    },

]

export default routes