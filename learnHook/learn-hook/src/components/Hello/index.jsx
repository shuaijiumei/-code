/**
 * Author: TBY on 2021-07-08
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {forwardRef, useEffect, useImperativeHandle, useRef} from "react";

let Hello = (props,ref) => {

  useEffect(() => {
    console.log('i am Hello')
    return () => {

    }
  }, [])
  const inputRef = useRef()
  useImperativeHandle(ref,()=>({
    focus:()=>{
      inputRef.current.focus()
    },
    show:()=>{
      console.log(inputRef)
    }
  }))




  return (
      <input ref={inputRef} type="text" name="" id=""/>
  )
}

Hello = forwardRef(Hello)
export default Hello

