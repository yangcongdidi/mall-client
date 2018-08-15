import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        houses:[],
        cities:[],
        characters:[],
        products:[],
        product:[],
        user:null,
        orders:[]
    },
    actions,
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

export default store