/**
 * Author: TBY on 2021-07-03
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";

const Name = () => {

  useEffect(() => {
    console.log('i am Name')
    return () => {

    }
  }, [])


  return (
      <div>
        I am Name.....
      </div>
  )
}
export default Name

