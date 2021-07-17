import React,{useRef} from "react";
// import store from "../../redux/store";

export default function Count(props){

  const selectRef = useRef(null)

  // 加
  function increment() {
    const {value} = selectRef.current
    // 通知redux去做这件事，更新存在store里的数据
    // store.dispatch(createIncrementAction(value*1))
    props.increment(value*1)
  }
  function decrement(){
    // eslint-disable-next-line
    const {value} = selectRef.current
    // store.dispatch(createDecrementAction(value*1))
    props.decrement(value*1)
  }
  // 当前求和为Odd再加
  function incrementIfOdd() {
    // eslint-disable-next-line
    const {value} = selectRef.current
    if ( props.count % 2 === 0){
    }else {
      // store.dispatch(createIncrementAction(value*1))
      props.increment(value*1)
    }
  }
  // 异步加

  function incrementAsync() {
    // eslint-disable-next-line
    const {value} = selectRef.current
    // store.dispatch(createIncrementAsyncAction(value*1,1000))
    props.incrementAsync(value*1,1000)
  }

  return(
      <div>
        <h1>当前求和为：{props.count}</h1>
        <select ref={selectRef} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={incrementIfOdd}>当前求和为奇数+</button>
        <button onClick={incrementAsync}>异步加</button>
      </div>
  )
}