import Vue from 'vue'
import VueRouter from 'vue-router'

import UserManageList from '../components/userManage/UserManageList'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {path:'/',redirect:'/user-manage-list'},
        {path:'/user-manage-list',name:'user-manage-list',component:UserManageList}
    ]
})