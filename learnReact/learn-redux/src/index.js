import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>,document.getElementById('root'))

// 监听redux中状态的改变,用react-redux 的时候就不需要自动监测
// store.subscribe(()=>{
//   ReactDOM.render(<App/>,document.getElementById('root'))
// })

