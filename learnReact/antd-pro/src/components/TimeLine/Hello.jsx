/**
 * Author: TBY on 2021-07-03
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import {Timeline} from "antd";

const Hello = () => {

  useEffect(() => {
    console.log('i am Hello')
    return () => {

    }
  }, [])

  const {Item} = Timeline

  return (
      <div>
        <Timeline>
          <Item>something</Item>
          <Item>something</Item>
          <Item>something</Item>
          <Item>something</Item>
          <Item>something</Item>
        </Timeline>
      </div>
  )
}
export default Hello

