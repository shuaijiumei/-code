/**
 * Author: TBY on 2021-07-03
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import './App.css'
import ProTable from "./components/MyTable";
const App = () => {

  useEffect(() => {
    console.log('i am App')
    return () => {

    }
  }, [])



  return (
     <div>
       <ProTable/>
     </div>
  )
}
export default App

