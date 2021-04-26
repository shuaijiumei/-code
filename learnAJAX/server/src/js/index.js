const axios = require('axios');

const btns = document.querySelectorAll('button');

btns[0].onclick = function() {
    //GET请求
    axios.get('http://127.0.0.1:8000/axios-server', {
        //url 参数
        params: {
            id: 100,
            vip: 7
        },
        //头信息
        headers: {
            name: 'tby',
            lover: 'hx'
        }
    });
}