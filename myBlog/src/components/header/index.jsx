/**
 * Author: TBY on 2021-07-06
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import {PageHeader} from "antd";
import styles from './Header.css'
import {history} from "umi";

const Header = () => {

  useEffect(() => {

    return () => {

    }
  }, [])


  return (
      <PageHeader
        className={styles.sitePageHeader}
        onBack={() => history.goBack()}
        title="Title"
        subTitle="This is a subtitle"
      />
  )
}
export default Header

