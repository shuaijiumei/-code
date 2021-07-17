import React,{Component} from "react";


export default class Header extends Component{
  state = {
    list: this.props.list
  }

  // 成功获取到输入的数据，并且添加一条数据即可实现页面刷新一次
  enter = (e)=>{
    if (e.which === 13){
      let value = e.target.value
      if (value === ''){
        alert('请输入内容！！！')
      }else {
        this.props.addToDo(e.target.value)
        e.target.value =''
      }
    }
  }

  render() {
    return(
        <div className="todo-header">
          <input type="text" onKeyPress={this.enter} placeholder="请输入你的任务，按回车确认"/>
        </div>
    )
  }
}