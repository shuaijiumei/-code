import React,{Component} from "react";
import Item from "../Item";
import {nanoid} from 'nanoid'

export default class List extends Component{

  done = (e)=>{
    if (e.target.style.color === 'red'){

    }else {
      console.log(e)
      let doneNum = this.props.doneNum
      doneNum +=1
      e.target.style.color = 'red'
      this.setState({
        refresh:0
      })
      // 把 doneNum 传给父组件
      this.props.changeDoneNum(doneNum)
    }

  }
  render() {
    const list = this.props.value
    if (list.length === 0){
      return (
          <ul>
            任务列表为空
          </ul>
      )
    }else {

      const listItems = list.map((li,index)=>{
            return <Item value={li} key={nanoid()} i={index} />
          }

      )

      return(
          <ul onClick={this.done}>
            {listItems}
          </ul>
      )
    }

  }
}