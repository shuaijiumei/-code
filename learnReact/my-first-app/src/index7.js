import React from 'react';
import ReactDOM from 'react-dom';

function UserGreeting(props){
  return <h1>Welcome back!</h1>
}
function GuestGreeting(props){
  return <h1>Please sign up.</h1>
}
function change(){
  this.isLoggedIn = !this.isLoggedIn
}

function Greeting(props){

  let isLoggedIn = props.isLoggedIn
  if (isLoggedIn){
    return <UserGreeting/>
  }
  else {
    return <GuestGreeting/>
  }

}

ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
)