/**
 * Author: TBY on 2021-07-05
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";

const Slider = () => {

  useEffect(() => {
    console.log('i am Slider')
    return () => {

    }
  }, [])


  return (
      <div>
        I am Slider.....
      </div>
  )
}
export default Slider

