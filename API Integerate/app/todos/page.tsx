"use client"
import axios from "axios"
import { useState } from "react"
    
export default function Todos() {
// https://dummyjson.com/todos
const getTodos  = async()=>{
    try {
      const result = await axios.get("https://dummyjson.com/todos")
      console.log("Data from Api",result.data.todos)
      setTodos(result.data.todos)
   } catch (error) {
       console.log("error",error );
       
   }
}
const [todos ,setTodos] = useState([])
  return (
    <div>
       <h1 className="text-center text-5xl font-bold m-4 p-2" >Todos</h1>

       <button className="bg-red-600" onClick={getTodos}>
        Todos
       </button>
       {todos.map((todo,id)=>{
        return (
            <div key={id}>
    
            {todo?.id} - {todo.todo} 
            </div>
              
                

        )
       })}
       
        </div>
  )
}
