import React from 'react'

export default function Demo1(props){

  const {lover} = props

  return(
      <div>
        我是Demo1组件
        <p>{lover}</p>
      </div>
  )
}