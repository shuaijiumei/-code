/**
 * Author: TBY on 2021-07-16
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";

const Weather = () => {

  useEffect(() => {
    console.log('i am Weather')
    return () => {

    }
  }, [])


  return (
    <div>
      I am Weather.....
    </div>
  )
}
export default Weather

