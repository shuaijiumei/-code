/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";

const Home = () => {

  useEffect(() => {
    console.log('i am Home')
    return () => {

    }
  }, [])


  return (
      <div>
        I am Home.....
      </div>
  )
}
export default Home

