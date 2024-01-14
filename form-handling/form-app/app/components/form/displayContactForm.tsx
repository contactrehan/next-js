import { ContactInfoType, contactInfo } from "@/types/componentTypes";



export default function DisplayContact(props: contactInfo){
    return (<>
        <h1>User Name : {props.name}</h1>
        <h1>User Email : {props.email}</h1>
        <h1>User Mes : {props.message}</h1>
        </>
    )
}