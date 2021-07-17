// 引入CountUI 组件
import CountUI from "../../components/Count";

import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action";

// 引物 connect 用于链接UI组件和Redux
import {connect} from "react-redux";
// 创建并暴露一个Count的容器组件

// mapStateToProps 函数的返回值作为状态传递给UI组件
// 把撞他带给 UI 子组件
const mapStateToProps = state=> ({count:state})

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
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
