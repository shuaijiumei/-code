import Vue from 'vue'
import App from './App'
import router from './router'
import { request } from './network/request';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

request({
    url: '/get'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})