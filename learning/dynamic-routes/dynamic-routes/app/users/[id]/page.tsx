import { userData } from "@/app/api/userData";
import SingleUserPage from "@/app/components/singleUserPage";

export async function generateStaticParams() {
  const user = await userData
  return user.map((user: { id: any; }) => ({
    id: (user.id).toString()
  }))
}

export default async function UserPage({params}:{params:{id:string}}) {
  const fetchData = await userData;

  const data = fetchData.filter((user:any) =>   user.id === parseFloat(params.id));
  
  
  return (
    <div>

      <SingleUserPage name={data[0]?.firstname + data[0]?.lastname} id={data[0]?.id} username={data[0]?.username} phone={data[0]?.phone} firstname={data[0]?.firstname} lastname={data[0]?.lastname} birthdate={data[0]?.birthDate}/>
      
    </div>
  );
}
