"use client"

import { useState } from "react";


export default function CounterButton() {
  
  const [count,setCount] = useState(0)
  return (


    <div>
     
      <br />
      <button onClick={()=>{console.log ("OnClickButton 1")
        setCount(count+1)}} >+</button> 
      {count}
      <button onClick={()=>{console.log ("OnClickButton 2")
        setCount(count-1)}} >-</button> 
      <br />
      <button onClick={()=>{console.log ("OnClickButton 3")
        setCount(0)}} >Reset</button> 
    </div>
  );
}
