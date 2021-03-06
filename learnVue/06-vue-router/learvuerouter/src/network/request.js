import axios from 'axios';

export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'https://httpbin.org',
        timeout: 5000
    })

    return instance(config);
}