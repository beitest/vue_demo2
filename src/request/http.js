
//引入axios
import $axios from 'axios'

import store from '../store.js'
import router from '../router';
import Vue from 'vue';

// 使用element-ui Message做消息提醒
import { Message } from 'element-ui';


$axios.interceptors.response.use(
    response => {
        if (response.data.code === 200) {//登陆成功
            return response;
        }else if (response.data.code === 101) {//重新登
            Message.error(response.data.message);
            // window.localStorage.removeItem('loginData');
            router.push({path: 'login'});
            return "";
        }else if (response.data.code === 500) {
            Message.error(response.data.message);
            return '';
        }else if (response.data.code === 10005) {
            Message.error(response.data.message);
            return '';
        }else {
            Message.error(response.data.message);
            return '';
        }
    },
    error => {
        // Message.error("服务器异常") // 返回接口返回的错误信息
    });
Vue.config.productionTip = false;


export default {
    // get请求
    get (url, param = {}) {
        return new Promise((resolve, reject) => {
            Vue.prototype.$axios.get(url,{params:param})
                .then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
        })
    },
    // post请求
    post (url, param = {}) {
        return new Promise((resolve, reject) => {
            Vue.prototype.$axios.post(
                url,
                param
            ).then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
        })
    },
    // put请求
    put (url, param = {}) {
        return new Promise((resolve, reject) => {
            Vue.prototype.$axios.put(url, param)
                .then(response => {
                    resolve(response)
                }, err => {
                    reject(err)
                })
        })
    },
    // delete
    delete (url,param = {}){
        return new Promise((resolve, reject) => {
            Vue.prototype.$axios.delete(url, param)
                .then(response => {
                    resolve(response)
                }, err => {
                    reject(err)
                })
        })
    }
}