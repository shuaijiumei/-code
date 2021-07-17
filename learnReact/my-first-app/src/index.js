import React from 'react';
import ReactDOM from 'react-dom';

const numbers =[1,2,3,4,5,6]

function NumberList(props){
  const numbers = props.numbers
  const listItem = numbers.map(number=> <li>{number}</li>)
  return(
      <ul>{listItem}</ul>
  )
}

ReactDOM.render(
    <NumberList numbers={numbers}/>,
    document.getElementById('root')
)