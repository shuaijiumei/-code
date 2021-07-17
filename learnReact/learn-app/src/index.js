import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date:new Date()}
  }

  // 当组件挂载到 DOM 上的时候调用的生命周期函数
  componentDidMount() {
    this.timerID = setInterval(
        ()=> this.tick(),
        1000
    )
  }
  componentWillMount() {
    clearInterval(this.timerID)
  }
  tick(){
    this.setState({
      date:new Date()
    })
  }

  render() {
    return(
        <div>
          <h1>Hello,World</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
    )
  }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
)