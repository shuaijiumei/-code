/**
 * Author: TBY on 2021-07-05
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import {Switch,Route,NavLink} from "react-router-dom";
import Hello from "./components/Hello/Hello";
import Slider from "./components/Slider/Slider";
import AppStyle from './App.css'

const App = () => {

  useEffect(() => {
    console.log('i am App')
    return () => {

    }
  }, [])


  return (
      <div>
        <Hello/>
        <Slider/>
        <Switch>
          <Route component={Hello} path={'/hello'}/>
          <Route component={Slider} path={'/slider'}/>
        </Switch>
        <NavLink activeClassName={'routeNow'} to={'/hello'}>Hello</NavLink>
        <NavLink activeClassName={'routeNow'} to={'/slider'}>Slider</NavLink>
        I am App.....
      </div>
  )
}
export default App

