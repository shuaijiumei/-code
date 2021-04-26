const axios = require('axios');

const btns = document.querySelectorAll('button')

btns[0].onclick = function() {
    axios.get('http://127.0.0.1:8000/axios-server', {
        params: {
            lover: 'hx',
            date: '2021-1-28'
        }
    })
}