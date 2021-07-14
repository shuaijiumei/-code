/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import Style from '../../app.module.css'

const MyNavLink = (props) => {

  useEffect(() => {
    console.log('i am MyNavLink')
    return () => {

    }
  }, [])


  return (
      <NavLink activeClassName={Style.handsome} to={props.to}/>
  )
}
export default MyNavLink

