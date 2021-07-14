/**
 * Author: TBY on 2021-07-09
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";

const Profile = () => {

  useEffect(() => {
    console.log('i am Profile')
    return () => {

    }
  }, [])


  return (
      <div>
        I am Profile.....
      </div>
  )
}
export default Profile

