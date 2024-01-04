"use client"
import Button from "../counter/button";


export default function CounterSection() {
  const count:number = 0
  const onClickHandler = ()=>{
     count
  }
  return (
    <div>
      <Button title={"+"} onClickHandler={()=>(count+1)}   />
      {count}
      <Button title={"-"} onClickHandler={()=>(count-1)}   />
    </div>
  )
}
