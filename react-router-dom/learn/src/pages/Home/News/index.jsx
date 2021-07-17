/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";

const News = () => {

  useEffect(() => {
    console.log('i am News')
    return () => {

    }
  }, [])


  return (
      <div>
        I am News.....
      </div>
  )
}
export default News

