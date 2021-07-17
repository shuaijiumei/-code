/*
该文件用于暴露 store
 */

import {createStore,applyMiddleware,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入为count服务的reducer
import countReducer from './reducers/count'
import personReducer from "./reducers/person";
import thunk from "redux-thunk";

// 合并reducer 来为多个状态提供服务
const allReducer = combineReducers({
  count:countReducer,
  person:personReducer
})

// 给异步任务加上中间件，让store可以接受一个函数
const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store