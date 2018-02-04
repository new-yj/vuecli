import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
import About from '@/components/about'
import User from '@/components/user'

Vue.use(Router)

const Routers = [
    {
        path: '/',
        meta: {
            title: '主页'
        },
        component: Index
    },
    {
        path: '/about',
        meta: {
            title: '关于'
        },
        component: About
    },
    {
        path: '/user/:id',
        meta: {
            title: '用户'
        },
        component: User
    },
    {
        path: '*',
        redirect: '/'
    }
]

const RouterConfig = {
    mode: 'history',
    routes: Routers
}

const router = new Router(RouterConfig)

export default router
