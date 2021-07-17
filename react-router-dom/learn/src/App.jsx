/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";
import Style from './app.module.css'

const App = () => {

  useEffect(() => {
    console.log('i am App')
    return () => {

    }
  }, [])

  return (
      <div>
        <Header/>
        {/*编写路由链接 Router 路由器*/}
          <MyNavLink to={'/about'}>About</MyNavLink>
          <MyNavLink  to={'/home'}>Home</MyNavLink>
        {/*注册路由*/}
        <div className={Style.show}>
          <Switch>
            <Route  path={'/about'} component={About}/>
            <Route  path={'/home'} component={Home} />
            <Redirect to={'/about'}/>
          </Switch>
        </div>
      </div>
  )
}
export default App

