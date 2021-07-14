/*
   为count生成action对象
 */
import {INCREMENT,DECREMENT} from '../constaint'
import store from "../store";

// 1.传给reducer 一个action对象 为object类型的一般对象
export const createIncrementAction = data =>({type:INCREMENT,data})
export const createDecrementAction = data =>({type:DECREMENT,data})

// 2. 传给reducer 一个action函数
// 所谓的异步action 就是action的值为函数
// 等待网络请求拿到数据，再进行处理
export const createIncrementAsyncAction = (data,time) =>{
  return ()=>{
    setTimeout(()=>{
      store.dispatch(createIncrementAction(data))
    },time)
  }
}
