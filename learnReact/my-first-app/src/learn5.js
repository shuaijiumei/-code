import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{

  render(){
    return(
        <button className="square"
                onClick={()=> this.props.onClick()
            // 为什么用箭头函数的this 不是指向button ？ 而是Square对象

          // ? 用普通函数 会 造成this的问题
            // 用普通函数 的 this 指向 undefined ？ 严格模式下
        }>
          {/*// 通过这个方法获取到了 Board 传来的值*/}
          {this.props.value}
        </button>
    )
  };

}

// Board 组件
class Board extends React.Component{
  // 定义了一个 renderSquare函数来渲染Sq组件
  // 那为什么 Square 是 Board 的子组件？？？

  renderSquare(i){
    return (
        <Square
            // value 里的值可以传到子组件里面
            value={this.props.squares[i]}
            onClick={()=> this.props.onClick(i)}
        />
    )

  }
  // 判断条件

  render() {
    return(
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
    )
  }
}


class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      history:[{
        squares: Array(9).fill(null)
      }],
      xIsNext:true,
      stepNumber:0
    }
  }
  jumpTo(step){
    this.setState({
      stepNumber:step,
      xIsNext:(step % 2) === 0,
    })
  }
  handleClick(i){
    // 得到一个新的数组，slice方法返回浅拷贝内容，为后续做退回功能做铺垫
    const history = this.state.history.slice(0,this.state.stepNumber + 1);
    const current = history[history.length - 1]
    const squares = current.squares.slice()

    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X':'O'
    // 更新数据状态
    // 有点像小程序
    this.setState({
      history:history.concat([{squares:squares}]),
      xIsNext:!this.state.xIsNext,
      stepNumber:history.length
    })
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step,move)=>{
      const desc = move ? 'Go to move #'+move : 'Go to game start';
      return(
          <li key={move}>
            <button onClick={()=> this.jumpTo(move)}>{desc}</button>
          </li>
      )
    })

    let status;
    if (winner){
      status = 'Winner: '+ winner
    }else {
      status = 'Next player: '+ (this.state.xIsNext ? 'X':'O')
    }
    return (
        <div className="game">
          <div className="game-board">
            <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
    );

  }
}

function calculateWinner(squares){
  const lines = [
      // 三个连着的 数组下标志
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++){
    // 用 for 循环判断相连的数组下表是否相同，如果相同就返回数组的内容X or O
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a]
    }
  }
  return null
}

// ===============================
ReactDOM.render(
    <Game/>,
    document.getElementById('root')
)