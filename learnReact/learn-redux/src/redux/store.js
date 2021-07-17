/*
该文件用于暴露 store
 */

import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入为count服务的reducer
import countReducer from './count_reducer'
import thunk from "redux-thunk";

// 给异步任务加上中间件，让store可以接受一个函数
const store = createStore(countReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store