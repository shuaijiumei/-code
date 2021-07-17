/**
 * Author: TBY on 2021-07-06
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import Header from "../../components/header";

const Home = () => {

  useEffect(() => {
    console.log('i am Home')
    return () => {

    }
  }, [])


  return (
    <div>
      <Header/>
    </div>
  )
}
export default Home

