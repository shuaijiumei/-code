/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import {Link,history} from 'umi'
import {Button} from 'antd'
import '../global.css'


const App = () => {

  useEffect(() => {
    console.log('i am App')
    return () => {

    }
  }, [])

  function goHello(){
    history.push('/hello')
  }


  return (
    <div>
      I am App.....
      <Link to={'/about'}>Go to About</Link>
      <Button onClick={goHello}>你好</Button>
    </div>
  )
}
export default App

