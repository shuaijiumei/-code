/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React from "react";
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    ,
    document.getElementById('root')
)
