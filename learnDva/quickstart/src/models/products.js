/**
 * Author: TBY on 2021-07-06
 * note 笔记
 * tips 特别注意
 * example 例子
 */
export default {
  namespace:'products',
  state:[],
  reducers:{
    'delete'(state,{payload:id}){
      return state.filter(item=>item.id !== id)
    }
  }
}
