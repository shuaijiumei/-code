/**
 * Author: TBY on 2021-07-09
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect, useState} from "react";
import {Picker,List} from 'antd-mobile'

const CityPicker = (props) => {

  const [value,setValue] = useState(['10127','0101'])

  useEffect(() => {
  // eslint-disable-next-line
    props.onOk(value)
    return () => {

    }
    // eslint-disable-next-line
  }, [])

  const cities =[
    [
      {
        label:'四川',
        value:'10127',
      }
    ],
    [
      {
        label:'成都',
        value:'0101'
      },
      {
        label: '双流',
        value: '0106'
      },
      {
        label: '郫县',
        value: '0107'
      },
      {
        label: '广元',
        value: '2101'
      }
    ]
  ]

  const onOk = (e)=>{
    setValue(e)
    props.onOk(e)
  }
  const {Item} = List

  return (
      <>
        <Picker
        extra={'请选择城市'}
        value={value}
        cascade={false}
        data={cities}
        cols={2}
        title={'Cities'}
        onOk={onOk}
        onDismiss={e => console.log('dismiss',e) }
        >
          <Item>选择城市</Item>
        </Picker>
      </>
  )
}
export default CityPicker

