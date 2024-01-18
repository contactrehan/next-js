"use client"

import { SetStateAction, useState } from "react"
import DisplayContact from "./displayContactForm"
import { OnChangeEventType, contactInfo } from "@/types/componentTypes"
import * as yup from "yup"


export default function ContactForm()
{
  const contactInfoSchema = yup.object().shape({
    name:yup.string().required().min(5).max(10),
    email:yup.string().required().email(),
    message:yup.string().required(),
    phone:yup.number().integer().positive().min(10)
     
  })

  const [errors , setErrors] = useState<string[]>([])


  const [contactInfo,setContactInfo] = useState<contactInfo>({
    name:"",
    email:"",
    message:"",
    phone:0
})

const [contactList, setContactList] = useState<contactInfo[]>([])

  const onChangeHandler = (e:OnChangeEventType)=>{
    let userDetail = {
     ...contactInfo ,
      [e.target.name] : e.target.value,
      


    }
   return (setContactInfo(userDetail))
  
  }  

  const onClickHandler = async()=>{


    try {

      const result = await contactInfoSchema.validate(contactInfo)
      console.log(result);
      
      let newContactList:contactInfo[] = [...contactList ,contactInfo]
    setContactList(newContactList)
    setContactInfo({
      email:"",
      message:"",
      name:"",
      phone:0
    })
    // console.log("newContactList",newContactList)
      
    } catch (err) {
      setErrors(err.errors)
      console.log("Error",err.errors)
     
    }
    






    
  }
 
  // console.log(contactInfo)
 
    return(
        <>
        
        <form  className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
        value={contactInfo.name}
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
        value={contactInfo.email}
        onChange={onChangeHandler}
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Phone
        </label>
        <input
        value={contactInfo.phone}
        onChange={onChangeHandler}
          type="number"
          id="phone"
          name="phone"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
        value={contactInfo.message}
        onChange={onChangeHandler}
          id="message"
          name="message"
        //   rows="4"
          className="w-full px-3 py-2 border rounded-md"
          required
        ></textarea>
      </div>

      <div className="mb-6">

        {errors.map((err)=>{
          return(
            < >
            <h3 className="text-red-700">{err}</h3>
            </>
          )
        })}
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
    <DisplayContact contactData={contactList}         />
        </>
    )
}