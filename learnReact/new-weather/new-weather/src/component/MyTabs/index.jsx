/**
 * Author: TBY on 2021-07-09
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import {Tabs} from 'antd-mobile'
import Weather from "../../pages/Weather";
import Profile from "../../pages/Profile";

const MyTabs = () => {

  useEffect(() => {
    return () => {

    }
  }, [])

  const tabs = [
    { title: '天气情况', sub: '1' },
    { title: '个人详情', sub: '2' }
  ];


  return (
      <div>
        <Tabs tabs={tabs}
              initialPage={'1'}
              tabBarPosition="bottom"
              renderTab={tab => <span>{tab.title}</span>}
              swipeable={false}
              tabBarTextStyle={{letterSpacing:'.1em',fontWeight:'600',height:'8vh'}}
        >
          <div style={{ height: '92vh', backgroundColor: '#f1c40f' }}>
            <Weather/>
          </div>
          <div style={{ height: '92vh', backgroundColor: '#3498db' }}>
            <Profile/>
          </div>
        </Tabs>
      </div>
  )
}
export default MyTabs

