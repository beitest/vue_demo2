import Vue from 'vue'
import VueRouter from 'vue-router'

import  Home from './view/Home'
//import  login from './view/login/login'
import UserManageList from './view/userManage/UserManageList'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'Home'
        },
        {
            path:'/login',
            name:'login',
            meta: {
                requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
            },
            component: (resolve) => require(['./view/login/login'],resolve), //路由懒加载方式
            //component:login,
        },
        {
            path:'/Home',
            name:'Home',
            component:Home,
            children:[{
                    path:'/Home',
                    name:'defaultPage',
                    meta: {
                        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                    },
                    //component:UserManageList,
                    component: (resolve) => require(['./components/common/default'],resolve), //路由懒加载方式

                },
                {
                    path:'/user-manage-list',
                    name:'user-manage-list',
                    component:UserManageList,
            }]
        },

    ]
})
