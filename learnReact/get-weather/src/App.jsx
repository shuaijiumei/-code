/**
 * Author: TBY on 2021-07-05
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import {Switch,NavLink,Route,Redirect} from "react-router-dom";
import {CloudTwoTone,ProfileTwoTone} from '@ant-design/icons'
import Profile from "./page/Profile";
import Weather from "./page/Weather";
import './App.css'

const App = (props) => {


  useEffect(() => {
    console.log('i am App')
    return () => {

    }
  }, [])

  return (
      <div className={'page'}>
        {/*  怎么实现错误边界？？？？ */}
        <Switch>
          <Route path={'/profile'} component={Profile}/>
          <Route path={'/weather'} component={Weather}/>
          {/*点进去默认重定向到profile*/}
          <Redirect from={'/'} to={'/weather'}/>
        </Switch>

        <ul className={'nav'}>
          <li>
            <NavLink to={'weather'} activeClassName={'active'}>weather <CloudTwoTone twoToneColor={'pink'} /></NavLink>

          </li>
          <li>
            <NavLink to={'/profile'} activeClassName={'active'}> profile<ProfileTwoTone twoToneColor={'pink'} /></NavLink>

          </li>

        </ul>

      </div>
  )
}
export default App

