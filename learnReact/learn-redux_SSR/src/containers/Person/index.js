import React, {useRef} from "react";
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {addPersonAction} from "../../redux/actions/person";

function Person(props){
  let nameNode = useRef(null)
  let ageNode = useRef(null)

  function addPerson(){
    const name = nameNode.current.value
    const age = ageNode.current.value
    const personObj = {
      id:nanoid(),
      name:name,
      age:age
    }
    props.addPerson(personObj)
  }

  return(
      <div>
        <input ref={nameNode} type="text" placeholder='输入名字'/>
        <input ref={ageNode} type="text" placeholder='输入年龄'/>
        <button onClick={addPerson}>添加</button>
        <ul>
          {
            props.personList.map(p=>{
              return <li key={p.id}>{p.name}--{p.age}</li>
            })
          }
        </ul>
      </div>
  )
}

export default connect(
    state =>({personList:state.person}),
    {
      addPerson:addPersonAction
    }
)(Person)
