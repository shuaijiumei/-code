/**
 * Author: TBY on 2021-07-08
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect, useRef} from "react";
import Hello from "./components/Hello";

const App = () => {

  useEffect(() => {
    console.log('i am App')
    console.log(inputRef.current);
    return () => {

    }
  }, [])
  const inputRef = useRef()
  const buttonRef = useRef()

  function show(){
    console.log(buttonRef)
  }

  return (
      <div>
        I am App.....
        <Hello ref={inputRef}/>
        <button ref={buttonRef} onClick={show}>展示Ref</button>
      </div>
  )
}
export default App

