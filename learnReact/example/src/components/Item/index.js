import React,{Component} from "react";

export default class Item extends Component{


  render() {
    // 只有在render里面可以接收到值
    // 懵了。。。   为什么that可以输出，里面有值，that.props不可以

    return(
        <li> {this.props.value} </li>
    )
  }
}