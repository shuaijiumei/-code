/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";

const Message = () => {

  useEffect(() => {
    console.log('i am Message')
    return () => {

    }
  }, [])


  return (
    <div>
      I am Message.....
    </div>
  )
}
export default Message

