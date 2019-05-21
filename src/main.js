import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css'
import App from './App.vue';


Vue.use(ElementUI);

Vue.config.productionTip = false;

// import axios from 'axios'
// import qs from 'qs'
// Vue.prototype.$axios = axios;
// Vue.prototype.qs = qs;



new Vue({
  render: h => h(App),
    router,
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
