"use client";

import { counterButton } from "@/types/componentTypes";
import { useState } from "react";


export default function Button(props:counterButton) {
  
     const onClickHandler = ()=>{
      return (alert("Clicked"))
     }



  return (
    <>
    <button onClick={onClickHandler}>Click me </button>
    </>
  );
}
