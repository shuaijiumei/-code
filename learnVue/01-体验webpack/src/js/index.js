const { add, mul } = require('./math');

console.log(add(20, 30));
console.log(mul(2, 8));

//3.依赖css文件
require('../css/normal.css');

//4.依赖less文件
require('../css/special.less')


//5.使用vue进行开发
import Vue from 'vue'
import App from './vue/App.vue'

const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App,
    }

})

document.writeln("<h2>何欣大坏蛋，想睡觉</h2>")