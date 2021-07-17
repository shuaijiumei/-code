/**
 * Author: TBY on 2021-07-05
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import request from "../../network";
import indexStyle from './index.module.css'

const Profile = () => {

  useEffect(() => {
    console.log('i am Profile')
    return () => {

    }
  }, [])
  // eslint-disable-next-line
  const instance = request({
    timeout:2000
  })

  return (
      <div className={indexStyle.page}>
        <div>

        </div>
        <div></div>
        <div></div>

      </div>
  )
}
export default Profile

