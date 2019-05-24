
//引入axios
import axios from 'axios'

import store from '../store.js'
import router from '../router';

// 使用element-ui Message做消息提醒
import { Message } from 'element-ui';

// 设置baseURL
//axios.defaults.baseURL = '/api'

//设置默认请求头
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'
};


// 设置请求过期时间
axios.defaults.timeout = 10000;

//请求拦截器
axios.interceptors.request.use(config => {

    config.headers = {
        'Content-Type': 'application/json'
    }
    if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `token ${store.state.token}`;
    }
    // 配置token
    // if(store.state.token){
    //   config.token = {'token':store.state.token}
    // }
    return config
}, error => {
    return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
        // 根据后端接口code执行操作
        switch(response.data.code) { //重新登
            case 101:
                Message.error("登录超时，请重新登录");
                // 401 清除token信息并跳转到登录页面
                //store.commit(types.LOGOUT)

                // 只有在当前路由不是登录页面才跳转
                router.currentRoute.path !== 'login' && router.replace({path: 'login',query: { redirect: router.currentRoute.path }})
                return Promise.resolve(response);
                break;
            case 0:
                return Promise.resolve(response);
                break;
            default:
                Message.error(response.data.msg);
                return "";
        }
    } else {
        Message.error(err.message)
        return Promise.reject(response);
    }
}, error => {
    if(error && err.response) {
        switch(err.response.status) {
            case 400:
                err.message = '错误请求'
                break;
            case 401:
                err.message = '未授权，请重新登录'
                break;
            case 403:
                err.message = '拒绝访问'
                break;
            case 404:
                err.message = '请求错误,未找到该资源'
                break;
            case 405:
                err.message = '请求方法未允许'
                break;
            case 408:
                err.message = '请求超时'
                break;
            case 500:
                err.message = '服务器端出错'
                break;
            case 501:
                err.message = '网络未实现'
                break;
            case 502:
                err.message = '网络错误'
                break;
            case 503:
                err.message = '服务不可用'
                break;
            case 504:
                err.message = '网络超时'
                break;
            case 505:
                err.message = 'http版本不支持该请求'
                break;
            default:
                err.message = `连接错误${err.response.status}`
        }
    } else {
        err.message = "连接到服务器失败"
    }
    Message.error(err.message)
    return Promise.resolve(error.response)
})

export default {
    // get请求
    get (url, param = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url,{params:param})
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
            axios.post(
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
            axios.put(url, param)
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
            axios.delete(url, param)
                .then(response => {
                    resolve(response)
                }, err => {
                    reject(err)
                })
        })
    }
}