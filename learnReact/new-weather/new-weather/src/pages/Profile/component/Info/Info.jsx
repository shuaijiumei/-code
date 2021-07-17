/**
 * Author: TBY on 2021-07-09
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import Style from './Info.module.css'
import {Alert} from "antd";

const Info = (props) => {

  useEffect(() => {
    return () => {

    }
  }, [])

  if (props.flag)
    return(
      <div className={Style.page}>
        <img className={Style.img} src="https://i.loli.net/2021/07/09/ZiSFdunL3zfv2xC.jpg" alt={'图片加载失败'}/>
        <Alert message={'你是好弟弟'} type={'success'}/>
      </div>
    )
  else return (
      <div className={Style.page}>
        <img className={Style.img} src="https://i.loli.net/2021/07/09/Ga2WtD864rEABIv.jpg" alt={'图片加载失败'}/>
        <Alert message={'各单位请注意，坏姐姐上线了！！！'} type={'error'}/>
      </div>
  )

}
export default Info

