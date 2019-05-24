import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        isCollapse : false,
        token:'root123'
    },
    mutations:{
        newIsCollapse(state,msg){
            state.isCollapse = msg;
        }
    }
})

export default store