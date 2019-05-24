import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        isCollapse : false,
        token:JSON.parse(window.localStorage.getItem('userInfos')) && JSON.parse(window.localStorage.getItem('userInfos')).accountId
    },
    mutations:{
        newIsCollapse(state,msg){
            state.isCollapse = msg;
        }
    }
})

export default store