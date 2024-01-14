"use client"

import { SetStateAction, useState } from "react"
import DisplayContact from "./displayContactForm"
import { OnChangeEventType, contactInfo } from "@/types/componentTypes"



export default function ContactForm()
{
  
  const [contactInfo,setContactInfo] = useState<contactInfo>({
    name:"default",
    email:"default",
    message:"default"
})

  const onChangeHandler = (e:OnChangeEventType)=>{
    let userDetail = {
     ...contactInfo ,
      [e.target.name] : e.target.value,
      


    }
   return (setContactInfo(userDetail))
  
  }  
  // var [userName,setUserName] = useState<string>("Name")
  // var [userEmail,setUserEmail] = useState<string>("Email")
  // var [userMessage,setUserMessage] = useState<string>("Message")
  const onClickHandler = ()=>{
    alert("clicked")
  }
  // const getUserNameHandler = (event:OnChangeEventType )=>{
  //   console.log("getUserNameHandler Call",event.target.value)
  //   setUserName(event.target.value)
    
  // }
  // const getUserEmailHandler = (event:OnChangeEventType)=>{
  //   console.log("getUserEmailHandler Call",event.target.value)
  //   setUserEmail(event.target.value)
  // }
  // const getUserMessageHandler = (event:OnChangeEventType)=>{
  //   console.log("getUserMessageHandler Call",event.target.value)
  //   setUserMessage(event.target.value)
  // }
  console.log(contactInfo)
 
    return(
        <>
        
        <form  className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
        onChange={onChangeHandler}
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
        onChange={onChangeHandler}
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
        onChange={onChangeHandler}
          id="message"
          name="message"
        //   rows="4"
          className="w-full px-3 py-2 border rounded-md"
          required
        ></textarea>
      </div>

      <div className="mb-6">
        <button 
        onClick={onClickHandler}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
    {/* {contactInfo=} */}
    <DisplayContact name={contactInfo.name} message={contactInfo.message} email={contactInfo.email}       />
        </>
    )
}