// 引入CountUI 组件
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/actions/count";

// 引物 connect 用于链接UI组件和Redux
import {connect} from "react-redux";
import React, {useRef} from "react";

function Count(props){

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

// 创建并暴露一个Count的容器组件

// mapStateToProps 函数的返回值作为状态传递给UI组件
// 把撞他带给 UI 子组件
const mapStateToProps = state => ({count:state.count})

// mapDispatchToProps 传方法给 UI

// function mapDispatchToProps(dispatch){
//   return {
//     // 通知redux 执行
//     increment:(data)=>dispatch(createIncrementAction(data)),
//     decrement:(data)=>dispatch(createDecrementAction(data))
// }
// }

// 也可以只传一个对象过去，把W action 的方法传过去, 底层自动帮忙分发
const mapDispatchToProps = {
  increment:createIncrementAction,
  decrement:createDecrementAction,
  incrementAsync:createIncrementAsyncAction
}

// 第一次调用传两个 函数，第二次调用传入UI组件
// store 在父组件那里调用

export default connect(mapStateToProps,mapDispatchToProps)(Count)
