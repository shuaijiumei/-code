/**
 * Author: TBY on 2021-07-09
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import Style from './Turns.module.css'

const Turns = (props) => {

  useEffect(() => {

    return () => {
    }
  }, [])

  const {wden,pm25,prcp24h,wdenimg} = props


  return (
      <div className={Style.moreInfo}>
      <div>风向：{wden}
          <img src={wdenimg} alt="风向图片"/>
        </div>
        <div>
          PM2.5值: {pm25}
        </div>
        <div>24h降雨量:{prcp24h}</div>
      </div>

  )
}
export default Turns

