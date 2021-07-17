/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
// import qs from 'querystring'

const Detail = (props) => {

  useEffect(() => {
    console.log('i am Detail',props)
    return () => {

    }
  }, [])
  // 接 state 参数
  // const {id,title} = props.location.state
  // 接qs参数
  // const {search} = props.location
  // const result = qs.parse(search.slice(1))
  // console.log(result)
  const {id,title} = props.match.params

  return (
      <ul>
        ID:{id}
        <hr/>
        TITLE:{title}
        <hr/>
        CONTENT:
      </ul>
  )
}
export default Detail

