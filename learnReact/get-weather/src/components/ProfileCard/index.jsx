/**
 * Author: TBY on 2021-07-05
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";

const ProfileCard = () => {

  useEffect(() => {
    console.log('i am ProfileCard')
    return () => {

    }
  }, [])


  return (
      <div>
        <img src="https://i.loli.net/2021/07/05/sZUkXzIn3M4FoYy.jpg" alt="加载中"/>
        <p>姓名：{}</p>
      </div>
  )
}
export default ProfileCard

