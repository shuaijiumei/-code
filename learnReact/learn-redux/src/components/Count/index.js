import React,{useRef} from "react";

export default function Count(){
  const selectRef = useRef(null)

  return(
      <div>
        <h1>当前求和为：</h1>
        <select ref={selectRef} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button>+</button>
        <button>-</button>
        <button>当前求和为奇数+</button>
        <button>异步加</button>
      </div>
  )
}