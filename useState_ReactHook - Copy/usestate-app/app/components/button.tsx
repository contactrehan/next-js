"use client";

import { useState } from "react";


export default function Button(prop:{name:string,age:number}) {
    const [name1, setName1] = useState(prop.name)
    const [age,setAge] = useState(prop.age)
    


const nameChange = ()=>{
    setName1("Rehan")
    setAge(19)
   
    
}
  return (
    <>
      {name1} is {age}
      <br /><br />

      <button onClick={nameChange}>click me</button>
    </>
  );
}
