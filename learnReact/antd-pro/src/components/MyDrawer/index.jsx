/**
 * Author: TBY on 2021-07-08
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect, useState} from "react";
import {Drawer,Button} from "antd";

const MyDrawer = () => {
  const [visible,setVisible] = useState(false)

  useEffect(() => {
    console.log('i am MyDrawer')
    return () => {

    }
  }, [])

  const show = ()=>{
    setVisible(true)
  }
  const hidden = ()=>{
    setVisible(false)
  }


  return (
      <>
        <Button type={'primary'} onClick={show}>Open</Button>
        <Drawer
          title={'something hidden'}
          placement={'top'}
          closable={true}
          onClose={hidden}
          visible={visible}
          maskStyle={{backgroundColor:'pink'}}
        >
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </Drawer>
      </>
  )
}
export default MyDrawer

