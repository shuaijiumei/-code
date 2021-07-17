/**
 * Author: TBY on 2021-07-08
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React from "react";
import {AutoComplete} from "antd";




const MyAutoComplete = () => {
  const options = [
    {value:'tby'},
    {value:'handsome tby'},
    {value:'hx and tby'},
    {value:'hello tby'},
    {value:'hx hx'}
  ]


  const onSelect = (data) =>{
    console.log('onSelect',data)
  }

  return (
      <>
        <AutoComplete
          options={options}
          style={{
            width:200
          }}
          onSelect={onSelect}
          placeholder={'input here'}
          filterOption={(inputValue,option)=>option.value.indexOf(inputValue) !== -1}
        />
      </>
  )
}
export default MyAutoComplete

