import React,{Component} from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import {NavLink,Route} from 'react-router-dom'
import {Button} from 'antd'
// 引入antd 样式
import 'antd/dist/antd.css'
import './App.less'


export default class App extends Component{
  render() {
    return(
        <div>
          <Button>你好</Button>
          {/* 动态添加class name高亮 */}
          <NavLink activeClassName="highLight" to="/about">Abou</NavLink>
          <NavLink to="/Home">Home</NavLink>
          {/*注册路由*/}
            <Route path="/about" component={About} />
            <Route path="/home" component={Home}/>

          App
        </div>
    )
  }
}