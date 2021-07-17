/**
 * Author: TBY on 2021-07-05
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React from "react";
import {Progress,Card} from "antd";
import indexShow from './index.module.css'

const Show = (props) => {

  let {weatherInfo} = props
  const { city, humidity, pm25, temp,weather,prcp24h,today} = weatherInfo
  return (
      <div className={indexShow.info} id={'app'}>
       <div>日期：{today}</div>
        <div style={{fontSize:'larger',fontWeight:'600'}}>城市：{city}</div>
        <div className={indexShow.card}>
          <Card title="天气乱报" bordered={false} style={{ width: 300 }}>
            <p>实时温度：{temp} </p>
            <p>天气状况：{weather}</p>
            <p>24h降雨量：{prcp24h}</p>
          </Card>
        </div>
        <div style={{color:"white",letterSpacing:'.1em'}}>
          详细信息
        </div>
        <div className={indexShow.circle}>
          <Progress type={'circle'} percent={Number.parseInt(humidity)} strokeColor='#74b9ff' format={percent => `湿度${percent}% `}/>
          <Progress type={'circle'} percent={Number.parseInt(pm25)} strokeColor={{'0%':'#00b894','100%':'#ff7675'}} format={percent => `PM2.5:${percent} `}/>
        </div>
      </div>
  )
}
export default Show

