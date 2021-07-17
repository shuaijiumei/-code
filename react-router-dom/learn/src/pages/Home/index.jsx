/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import {Route,Switch,Redirect} from 'react-router-dom'
import Message from "./Message";
import News from "./News";
import MyNavLink from "../../components/MyNavLink";
import Style from './home.module.css'

const Home = () => {

  useEffect(() => {
    console.log('i am Home')
    return () => {

    }
  }, [])


  return (
      <div>
        <MyNavLink to={'/home/news'}>News</MyNavLink>
        <MyNavLink to={'/home/message'}>About</MyNavLink>

      {/*  注册路由  */}
        <div className={Style.show}>
          <Switch>
            <Route path={'/home/news'} component={News}/>
            <Route path={'/home/message'} component={Message}/>
            <Redirect to={'home/news'}/>
          </Switch>
        </div>
      </div>
  )
}
export default Home

