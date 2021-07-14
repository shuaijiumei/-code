/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import {Link,BrowserRouter,Switch} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {

  useEffect(() => {
    console.log('i am App')
    return () => {

    }
  }, [])


  return (
      <div>
        <BrowserRouter>
          <Link to={'/about'}>About</Link>
          <Link to={'/home'}>Home</Link>
        </BrowserRouter>
        I am App.....
      </div>
  )
}
export default App

