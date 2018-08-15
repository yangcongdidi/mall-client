import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import character from '@/views/character'
import house from '@/views/house'
import shopping from '@/views/shopping'
import user from '@/views/user'
import deal from '@/views/deal'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/character',
            name: 'character',
            component: character
        },
        {
            path: '/house',
            name: 'house',
            component: house
        },
        {
            path: '/shopping',
            name: 'shopping',
            component: shopping
        },
        {
            path: '/user',
            name: 'user',
            component: user
        },
        {
            path: '/deal',
            name: 'deal',
            component: deal
        },
    ]
})
