/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";

const Test = () => {

  useEffect(() => {
    console.log('i am Test')
    return () => {

    }
  }, [])


  return (
      <div>
        I am Test.....
      </div>
  )
}
export default Test

