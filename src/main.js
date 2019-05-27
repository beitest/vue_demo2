import Vue from 'vue';
import Vuex from 'vuex'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css'
import App from './App.vue';
import Api from './request/api'
import http from './request/http'

//引进新建store.js
import store from './store.js'


Vue.use(ElementUI,Vuex);

Vue.config.productionTip = false;
Vue.prototype.Api = Api;
Vue.prototype.http = http;

import axios from 'axios'
import qs from 'qs'

Vue.prototype.axios = axios;
Vue.prototype.qs = qs;

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            next();
        }else {
            console.log(to.fullPath)
            next({
                // replace:true,
                // name:'login',
                path: '/login',
                query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
        //next();
    }else {
        next();
    }
});

new Vue({
  render: h => h(App),
    router,
    store
}).$mount('#app');

// new Vue({
//     el: '#app',
//     VueRouter,
//     template: '<App/>',
//     components: {
//         App
//     }
//
// })
