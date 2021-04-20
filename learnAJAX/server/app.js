const { response } = require('express');
const express = require('express');
const { request } = require('http');

const path = require('path');

const app = express();

app.get('/server', (request, response) => {
    // 设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('Hello,AJAX');

});
//接受任意请求
app.all('/server', (request, response) => {
    // 设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    response.send('Hello,AJAX--POST');


});

app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中...");
})