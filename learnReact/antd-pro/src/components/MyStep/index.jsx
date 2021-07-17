/**
 * Author: TBY on 2021-07-08
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import {Steps} from "antd";

const MyStep = () => {

  useEffect(() => {
    console.log('i am MyStep')
    return () => {

    }
  }, [])

const {Step} = Steps
  return (
      <div>
        <Steps current={0}>
          <Step title={'Finished'} description={'something have been done'}/>
          <Step title={'Now'} description={'something need to do'}/>
          <Step title={'Future'} description={'something need to do'}/>
        </Steps>
      </div>
  )
}
export default MyStep

