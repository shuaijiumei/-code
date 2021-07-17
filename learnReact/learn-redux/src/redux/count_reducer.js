/*
    1.为count服务的reducer
    2. 接到两个参数 preState 动作对象action
 */
import {INCREMENT,DECREMENT} from './constaint'
const initState =0

export default function countReducer(preState=initState,action){
  // 从action对象中获取 如何加工数据
  const {type,data} = action
  switch (type){
    case INCREMENT:
      return  preState + data
    case DECREMENT:
      return  preState - data
    default:   // 初始化
      return preState
  }
}