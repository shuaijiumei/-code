import {ADD_PERSON} from "../constaint";
// 初始化人的列表
const initState = []
export default function personReducer(preState=initState,action){
  const {type,data} = action
  switch (type){
    case ADD_PERSON:
      return  [...preState,data]
    default:
      return preState
  }
}
