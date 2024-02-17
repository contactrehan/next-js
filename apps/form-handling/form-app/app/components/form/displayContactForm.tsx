import { ContactInfoType, contactInfo } from "@/types/componentTypes";



export default function DisplayContact(props: contactInfo){
    return (<>
        <h1>User Name : {props.name}</h1>
        <h1>User Email : {props.email}</h1>
        <h1>User Phone : {props.phone}</h1>
        <h1>User Message : {props.message}</h1>
        </>
    )
}