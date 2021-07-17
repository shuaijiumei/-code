/**
 * Author: TBY on 2021-07-08
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect, useState} from "react";
import {message,Button,Space} from "antd";

const MyMessage = () => {

  useEffect(() => {
    console.log('i am MyMessage')
    return () => {

    }
  }, [])

  const [flag,setFlag] = useState(true)

  // example 防抖
  const reduceClick = (fun,msg)=>{
    if (flag){
      setFlag(false)
      setTimeout(()=>setFlag(true),1000)
      fun(msg)
    }
  }

  const success = ()=> reduceClick(message.success,'you succeed!!!')
  const error = ()=> reduceClick(message.error,'you failed!!!!')
  const warning = ()=> reduceClick(message.warn,'some warning here')


  return (
      <div>
        <Space>
          <Button onClick={success}>success</Button>
          <Button onClick={error}>error</Button>
          <Button onClick={warning}>warning</Button>
        </Space>
      </div>
  )
}
export default MyMessage

