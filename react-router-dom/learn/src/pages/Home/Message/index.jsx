/**
 * Author: TBY on 2021-07-07
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect, useState} from "react";
import {nanoid} from "nanoid";
import {Link,Route} from "react-router-dom";
import Detail from "./Detail";

const Message = (props) => {
  const [msg,setMsg] = useState([
      {id:nanoid(),title:'消息1'},
      {id:nanoid(),title:'消息2'},
      {id:nanoid(),title:'消息3'},
  ])

  useEffect(() => {
    console.log('i am Message')
    return () => {

    }
  }, [])

  function pushShow(id,title){
    props.history.push(`/home/message/detail/${id}/${title}`)
  }
  function replaceShow(id,title){
    props.history.replace(`/home/message/detail/${id}/${title}`)
  }


  return (
      <div>
        {
          msg.map(item=>{
            return(
                /*向路由组件传递params 参数*/
                <div  key={item.id}>
                  <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
                  <button onClick={()=>pushShow(item.id,item.title)}>push查看</button>
                  <button onClick={()=>replaceShow(item.id,item.title)}>replace查看</button>
                </div>

                // 向组件传递 search参数
                //<Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`} key={item.id}>{item.title}</Link>
                // 传递 state参数
             /*   <Link to={{
                  pathname:'/home/message/detail',
                  state:{id:item.id,title:item.title}
                }} key={item.id}>{item.title}</Link>*/
            )
          })

        }
        {/*声明params参数*/}
        <Route path={'/home/message/detail/:id/:title'} component={Detail}/>

        {/* search无需声明接受 正常接受即可*/}
        {/*<Route path={'/home/message/detail'} component={Detail}/>*/}
      {/*  <Route path={'/home/message/detail'} component={Detail}/>*/}
      </div>
  )
}
export default Message

