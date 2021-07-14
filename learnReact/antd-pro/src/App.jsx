/**
 * Author: TBY on 2021-07-03
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import Hello from "./components/Hello/Hello";

const App = () => {

  useEffect(() => {
    console.log('i am App')
    return () => {

    }
  }, [])


  return (
      <div>
        I am App.....
        <Hello/>
      </div>
  )
}
export default App

