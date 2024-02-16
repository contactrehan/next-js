import { error } from "console"
import UserCard from "../components/userCard"
import { userData } from "../api/userData"


export default async function Users() {
   
   const data = await userData
   
  return (
    <div className="flex flex-wrap justify-center p-2">
     {data.map((users:any,index:number)=>{
        return <UserCard key={users.id} name={users.firstname} email={users.email} username={users.login.username} id={users.id}/>
     })}
        
    </div>
  )
}
