import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
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
    },
    actions: {
        asyncIncrement (context, callback) {
            return new Promise(resolve => {
                setTimeout(() => {
                    context.commit('increment')
                    resolve()
                }, 1500)
            })
            // setTimeout(() => {
            //     context.commit('increment')
            //     callback()
            // }, 1500)
        }
    }
}

const store = new Vuex.Store({
    modules: {
        a: moduleA
    }
})

export default store
