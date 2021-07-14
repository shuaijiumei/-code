/**
 * Author: TBY on 2021-07-09
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";

const CityPicker = () => {

  useEffect(() => {
    console.log('i am CityPicker')
    return () => {

    }
  }, [])


  return (
      <div>
        I am CityPicker.....
      </div>
  )
}
export default CityPicker

