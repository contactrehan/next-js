"use client"
import { useState } from "react"
export default function ImagePage() {

    const [file, setfile] = useState({})
  return (
    <div><h1>Saving Images in Database</h1>
    
    <br />
    <input type="file"
    onChange={(e)=>setfile(e.target.files)} 
    name="file"/>
    
    <img className="h-15 w-40"
        src="https://firebasestorage.googleapis.com/v0/b/something-798d9.appspot.com/o/_38e8ff73-ce4e-4a64-ae4c-6acb11c78a6a.jpeg?alt=media&token=52241a13-a82f-4947-b8f2-63c5a12e8e7b"
        
        alt=""
    />
    <img src="https://firebasestorage.googleapis.com/v0/b/something-798d9.appspot.com/o/nate-grant-QQ9LainS6tI-unsplash.jpg?alt=media&token=c3bff8e6-8a7b-4056-869d-98b21a1a5d7b"  className="h-15 w-60" alt="programming" />
    
    </div>
  )
}
