/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import {history} from "umi";
import {Button} from 'antd'

const About = () => {

  useEffect(() => {
    console.log('i am About')
    return () => {

    }
  }, [])

  function toNews(){
    history.push('/About/News')
  }
  function toMessage(){
    history.push('/About/Message')
  }

  return (
    <div>
      I am About.....
      <Button onClick={toNews}>去News</Button>
      <Button onClick={toMessage}>去Message</Button>
    </div>
  )
}
export default About

