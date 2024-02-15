"use client"
import { FiLoader } from "react-icons/fi";
import axios from "axios";
import { useState,useEffect } from "react";

export default function TodoAxios() {
  const [getTodoList, setgetTodoList] = useState([])
  const [loader,setLoader] = useState(false)
  const [update, setUpdate] = useState(false)

 
  useEffect(()=>{
    const getFetchTodo = async () => {
      try {
        setLoader(true);
        const result = await axios.get("https://dummyjson.com/todos");
      const todosByApi = result.data.todos
      setgetTodoList(todosByApi)
      console.log(result.data.todos);
      } catch (error) {
        console.log("error",error);
        
      }
      finally{setLoader(false)
      setUpdate(false)}
      
    };
    getFetchTodo()
  },[update])
  const deleteTodo = ()=>{
    setgetTodoList([])
  }
  const reFetchTodo = ()=>{
    setUpdate(true)
  }
  
  return (
    <div>

      <h1>Todo Axios</h1>

      {loader && <>Loading<FiLoader /></> }
      <br /><br />
      <button onClick={deleteTodo} className="font-bold text-red-700 bg-black">Delete Todo</button>   
      <button onClick={reFetchTodo} className="m-5 font-bold text-red-700 bg-black">Refetch Todo</button>   


      {
       getTodoList.map((todos,key)=>{return(

        <div key={key} className="font-bold">
          {todos.id} - {todos.todo}
        </div>
       )})
      }
    </div>
  );
}
