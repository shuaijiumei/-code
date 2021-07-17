const { response } = require('express');
const express = require('express');
const { request } = require('http');

const path = require('path');

const app = express();

app.get('/server', (request, response) => {
    // 设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    response.send('Hello,AJAX');

});
//接受任意请求
app.post('/json-server', (request, response) => {
    // 设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    const data = {
        name: 'tby',
        lover: 'hx'
    };
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);

});

app.all('/axios-server', (request, response) => {
    // 设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    const data = {
        name: 'tby',
        lover: 'hx'
    };
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);

});




app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中...");
})