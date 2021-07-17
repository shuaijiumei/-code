/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";

const NotFound = () => {

  useEffect(() => {
    console.log('i am NotFound')
    return () => {

    }
  }, [])


  return (
    <div>
      I am NotFound.....
    </div>
  )
}
export default NotFound

