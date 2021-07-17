/**
 * Author: TBY on 2021-07-09
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import Style from './Warning.module.css'

const Warning = (props) => {

  useEffect(() => {
    return () => {

    }
  }, [])

  return(
      <div className={Style.tips}>这是一条温馨提示</div>
  )

}
export default Warning

