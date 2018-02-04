import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        typeCount: 0,
        list: [1, 3, 5, 7, 9]
    },
    mutations: {
        increment (state, n = 1) {
            state.count += n
        },
        decrement (state, n = 1) {
            state.count -= n
        },
        typeIncrement (state, params) {
            state.typeCount += params.count
        }
    },
    getters: {
        filteredList: state => {
            return state.list.filter(item => item < 8)
        },
        listCount: state => {
            return state.list.length
        }
    }
})

export default store
