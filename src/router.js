import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:resolve => require(['./components/common/Home.vue'], resolve),
            children:[
                {
                    path:'',
                    component:resolve => require(['./view/dashboard/dashboard.vue'],resolve),
                    meta:{title:'dashboard'}
                },
                {
                    path:'/dashboard',
                    component:resolve => require(['./view/dashboard/dashboard.vue'],resolve),
                    meta:{title:'dashboard'}
                },
                {
                    path: '/user-manage-list',
                    name: '用户管理',
                    //component:UserManageList,
                    meta: {
                        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                    },
                    component: (resolve) => require(['./view/userManage/UserManageList'], resolve), //路由懒加载方式
                }
            ]
        },
        {
            path:'/login',
            name:'登陆',
            component: (resolve) => require(['./view/login/login'],resolve), //路由懒加载方式
        },

    ]
})

