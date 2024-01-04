"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)
  useEffect(()=>{
  console.log(" 1st use effect console");
  
},[count])
  useEffect(()=>{
  console.log(" 2nd use effect console");
  
},[count2])
  return (
    <>
      <h1>Use State</h1>
      <br />
      <h1>React Hook</h1>
      <br />
      <br />
      {count} <br />
     <button onClick={()=>setCount(count+1)}>add +1</button>
     <br />
     {count2}
     <br />
     <button onClick={()=>setCount2(count2+1)}>2nd add +1</button>
      <br />
      <br />
    </>
  );
}
