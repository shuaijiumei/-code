/**
 * Author: TBY on 2021-07-05
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import axios from "axios";

export default function request(config){
  const instance = axios.create({
    baseURL:config.baseURL,
    timeout:config.timeout,
    headers:config.headers
  })
  return instance
}