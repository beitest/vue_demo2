import Vue from 'vue'
import VueRouter from 'vue-router'

import  Home from './view/Home'
import  login from './view/login/login'
import UserManageList from './components/userManage/UserManageList'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'login'
        },
        {
            path:'/login',
            name:'login',
            component:login,
        },
        {
            path:'/Home',
            name:'Home',
            component:Home,
            children:[{
                path:'/user-manage-list',
                name:'user-manage-list',
                component:UserManageList,
            }]
        },

    ]
})