/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";

const Detail = () => {

  useEffect(() => {
    console.log('i am Detail')
    return () => {

    }
  }, [])


  return (
      <ul>
        ID:
        <hr/>
        TITLE:
        <hr/>
        CONTENT:
      </ul>
  )
}
export default Detail

