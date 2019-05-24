import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        isCollapse : false
    },
    mutations:{
        newIsCollapse(state,msg){
            state.isCollapse = msg;
        }
    }
})

export default store