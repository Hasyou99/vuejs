import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../page/Hello'

import Friends from "../page/Friends.vue"
import Trends from "../page/Trends"
import Setting from '../page/Setting'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Hello
        },
        {
            path: "/friends",
            component: Friends
        },
        {
            path: "/star",
            component: Trends
        },
        {
            path: "/slider",
            component: Setting
        }
    ]
})