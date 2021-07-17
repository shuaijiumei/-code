/**
* Author: TBY on 2021-07-05
* note 笔记
* tips 特别注意
* example 例子
*/
import React, {useEffect, useState} from "react";
import {Select,Spin,Alert,notification} from "antd";
import indexStyle from './index.module.css'
import request from "../../network";
import Show from "../../components/WeatherShow";

const Weather = ()=>{
  const [weatherInfo,setWeatherInfo] = useState({})
  // eslint-disable-next-line
  const [Ncity,setCity] = useState('101270101')

  const [flag,setFlag] = useState('false')

  useEffect(()=>{
    console.log('i am Weather')
    const axios = request({
      baseURL:`https://api.help.bj.cn/apis/weather`,
      timeout:2000
    })
    let url = `?id=`+Ncity

    axios(url).then(res=>{
      if (res.data.status === '0') {
        setFlag('true')
        return res.data
      }
      else console.log(res.data.status)
    }).then(res=>{
      setWeatherInfo(res)
    }).catch(err=>{
      console.log(err)
      notification.open({
        message:'请求失败',
        description:"请检查您的网络情况,再刷新试试"
      })
    })

    return()=>{
    }
  },[Ncity])

  const {Option} = Select
  function handleChange(value){
    setCity(value)
  }
  if (flag === 'false'){
    return(
        <Spin className={indexStyle.page}/>
    )
  }else if (flag === 'true'){
    return(
        <div className={indexStyle.page}>
          <nav>
            选择您的城市：
            <Select defaultValue={'成都'} style={{width:120}} onChange={handleChange}>
              <Option value={'101270101'}>成都</Option>
              <Option value={'101270106'}>成都~双流</Option>
              <Option value={'101040100'}>重庆</Option>
            </Select>
          </nav>
          <main>
            <Show weatherInfo={weatherInfo}/>
          </main>
          <footer>
            <Alert
                message="温馨提示"
                description="天冷加衣，天热减衣，下雨带伞，早点回家"
                type="error"
                closable
            />
          </footer>
        </div>
    )
  }

}
export default Weather

