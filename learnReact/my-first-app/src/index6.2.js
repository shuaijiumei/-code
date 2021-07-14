import React from 'react';
import ReactDOM from 'react-dom';

class Send extends React.Component{
  constructor(props) {
    super(props);
  }
  show(arg1,arg2){
    console.log(arg1)
    console.log(arg2)
  }
  render() {
    return(
        <div>
          <button onClick={this.show.bind(this,1)}>Delete</button>
          <button>Delete2</button>
        </div>
    )
  }
}