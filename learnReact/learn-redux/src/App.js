import React from "react";
import Count from './containers/Count'
import store from "./redux/store";


export default function App(){
  return(
      <div>
        {/* store需要用上侧传来 */}
        <Count store={store}/>
      </div>
  )
}