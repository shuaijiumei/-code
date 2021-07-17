import React,{Component} from 'react'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component{
  state = {
    list:[],
    doneNum:0
  }
  // 数据在哪，方法就在哪
  addToDo = (toDoList)=>{
    this.setState({
      list:[toDoList,...this.state.list]
    })
  }
  changeDoneNum = (doneNum)=>{
    this.setState({
      doneNum:doneNum
    })
    console.log(this.state.doneNum)
  }

  render() {
    return(
        <div>
          <Header addToDo={this.addToDo} list={this.props.list} />
          <List doneNum={this.state.doneNum} changeDoneNum={this.changeDoneNum} value={this.state.list} />
          <Footer value={this.state.list}/>
        </div>
    )
  }
}