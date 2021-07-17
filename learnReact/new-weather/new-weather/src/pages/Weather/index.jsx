/**
 * Author: TBY on 2021-07-09
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect, useState} from "react";
import request from "../../network";
import CityPicker from "./component/CityPicker";
import Turns from "./component/Turns";
import {ActivityIndicator, Toast} from "antd-mobile";
import Style from './Weather.module.css'
import Warning from "./component/Warning";

const Weather = () => {

  const [City,setCity] = useState(null)

  useEffect(() => {
    axios('?id=101270101').then(res=>{
      if (res.data.status === '0') setCity(res.data)
    })
    return () => {
    }
    // eslint-disable-next-line
  }, [])

  const config = {
    baseURL:`https://api.help.bj.cn/apis/weather`,
    timeout:2000
  }

  const axios = request(config)
  let url = `?id=`

  const getUrl = (e)=>{
    url = url+e[0]+e[1]

    axios(url).then(res=>{
      if (res.data.status === '0') {
        setCity(res.data)
        return res.data
      }
      else {
        setCity(true)
        Toast.info('出错啦')
      }
    }).catch(err=>{
      Toast.info('出错啦')
    })
  }

  if (City){
    const {city,temp,today,weather,weatherimg} = City
    return (
        <div >
          <CityPicker onOk={getUrl}/>
          <div className={Style.page} >
            <div className={Style.card}>
              <div>{today}</div>
              <div className={Style.line}/>
              <div>城市：{city}</div>
              <div>天气：{weather}</div>
              <div>
                <img src={weatherimg} alt="天气图片"/>
              </div>
              <div>温度：{temp}℃</div>
            </div>
            <p style={{fontWeight:600,fontSize:"large"}}>详细情况</p>

              <Turns {...City}/>
            <Warning {...City}/>
          </div>

        </div>
    )
  }else {
    return (
        <ActivityIndicator text="正在加载" />
    )

  }






}
export default Weather

