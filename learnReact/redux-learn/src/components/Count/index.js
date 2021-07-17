import React,{Component} from 'react'

export default class Count extends Component{
  state = {
    count:0
  }

  increment = ()=>{
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({
      count: count + value*1
    })
  }
  decrement = ()=>{

  }
  incrementIfOdd = ()=>{

  }
  incrementAsync = ()=>{

  }
  render() {
    return(
        <div>
          <h1>当前求和：0</h1>
          <select ref={c=>this.selectNumber = c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>
          <button onClick={this.incrementAsync}>异步加</button>
        </div>
    )
  }
}