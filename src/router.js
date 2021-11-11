import { createRouter, createWebHistory } from "vue-router";
import Login from './components/Login.vue'
import Main from './components/Main.vue'
import Graph from './components/Graph.vue'
import Calender from './components/Calender.vue'
import Task from './components/task.vue'
import Backlog from './components/backlog.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/app',
            name: 'main',
            component: Main,
            children:[
                {
                    path: '/app/graph',
                    component: Graph,
                    name: 'graph'
                },
                {
                    path: '/app/calender',
                    component: Calender,
                    name: 'calender'
                },
                {
                    path: '/app/task',
                    component: Task,
                    name: 'task'
                },
                {
                    path: '/app/backlog',
                    component: Backlog,
                    name: 'backlog'
                },
            ]
        }, 
    ]
})