import React from "react";
import Count from './containers/Count'
import Person from "./containers/Person";

export default function App(){
  return(
      <div>
        {/* store需要用上侧传来 */}
          <Count />
          <br/>
          <Person/>
      </div>
  )
}