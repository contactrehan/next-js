"use client"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Todos() {
  const [todos, setTodo] = useState([]);
  const [loader, setLoader] = useState(false)
  const [reFetchTodo, setRefetchTodo] = useState(false)
  useEffect(()=>{

    const fetchTodo = async () => {
      try {
        setLoader(true)
        const response = await axios.get("https://dummyjson.com/todos");
        const data = response.data;
        setTodo(data.todos);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
      finally{
        setLoader(false)
        setRefetchTodo(false)
      }
    };
    fetchTodo()
  },[reFetchTodo])
  // delete todo function
  const deleteTodo = ()=>{
    setTodo([])
  }
  //refetching todo function for onclick
  const reFetchingTodo = ()=>{
    setRefetchTodo(true)
  }
  return <><h1>Fetching Todo</h1>
  {loader && "Loading..."}
  <br />
  <button type="button" onClick={deleteTodo} className="text-red-500 bg-black"> Delete Todo</button>
  <button type="button" onClick={reFetchingTodo} className="text-red-500 bg-black ml-2"> Refetch Todo</button>

  {todos.map((elem:{id:number,todo:string})=>{
    return <div key={elem.id} >
    {elem.id} - {elem.todo}

    </div>
  })}
  
  </>;
}
