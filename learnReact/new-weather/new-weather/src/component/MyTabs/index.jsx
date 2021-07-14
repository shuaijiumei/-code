/**
 * Author: TBY on 2021-07-09
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect} from "react";
import {Tabs,Badge} from 'antd-mobile'

const MyTabs = () => {

  useEffect(() => {
    console.log('i am MyTabs')
    return () => {

    }
  }, [])

  const tabs2 = [
    { title: '天气情况', sub: '1' },
    { title: '个人详情', sub: '2' }
  ];


  return (
      <div>
        <Tabs tabs={tabs2}
              initialPage={1}
              tabBarPosition="bottom"
              renderTab={tab => <span>{tab.title}</span>}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of first tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of second tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of third tab
          </div>
        </Tabs>
      </div>
  )
}
export default MyTabs

