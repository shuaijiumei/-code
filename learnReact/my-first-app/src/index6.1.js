import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Toggle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn:true};

    // 绑定事件的时候需要给该函数指定this
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState(
        prevState =>({
          isToggleOn:!prevState.isToggleOn
        })
    )
  }
  render() {
    return(
        <button
            // 复杂解决方案
            // onClick={()=>{this.handleClick()}}
          // 简单解决方案
            onClick={this.handleClick /* 使用之前必须给他绑定this */ }
        >
          {this.state.isToggleOn ? 'ON':'OFF'}
        </button>
    )
  }
}

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
)