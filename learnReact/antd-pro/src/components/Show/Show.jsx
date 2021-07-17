/**
 * Author: TBY on 2021-07-03
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";

const Show = () => {

  useEffect(() => {
    console.log('i am Show')
    return () => {

    }
  }, [])


  return (
      <div>
        I am Show.....
      </div>
  )
}
export default Show

