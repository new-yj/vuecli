import Vue from 'vue'
import router from './router'
import store from './store'

import App from './app'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        next()
    } else {
        // 如果未登录就跳转到login页面
        next('/login')
    }
})

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
