/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";

const Header = () => {

  useEffect(() => {
    console.log('i am Header')
    return () => {

    }
  }, [])


  return (
      <div>
        I am Header.....
      </div>
  )
}
export default Header

