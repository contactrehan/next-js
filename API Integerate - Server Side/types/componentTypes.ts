export type ContactInfoType = {
   
   contactInfo: {
    name:string,
    message:string,
    email:string
   }
    
}
export type  contactInfo= {
   name:string,
   message:string,
   phone:number,
   email:string
  }
export type OnChangeEventType = {
    target: {
      name:string
      value:string
} 
}
export interface expenseList {
   id: string;
   amount: number;
   category: string;
   note: string;
   date: string;
 }
 export type expenseModalProps= {
    isOpen:boolean
     onClose: ()=> void
     onSubmit : any
   
 }
 export type directorType = {
   name: string,
   title: string,
   intro: string,
   facebookUrl: string
}

export type studentType = {
   name: string,
   gender: string,
   physics: number,
   maths: number,
   english: number
}

export type contactTypes = {
       name: string,
       email:string,
       phone:number,
       message:string

}


export type onChangeEventType = {
    target: { value: string, name:string } 
}

export type ExpenseType = {
   note: string,
   date: string,
   amount: number,
   category: string,
   id: string
}
import { ExpenseType } from "./commonTypes"

export type ButtonProps = {
    title: string
    data?:string,
    onClickHandler: ()=> void
}

export type CardPropsType = {
    courseTitle: string,
    tag:string,
    description: string,
    showTag?: boolean,
    isDescription?: boolean,
    style:{}
}


export type TagPropsType = {
    tagText: string
}


export type ExpensePropsType = {
    note: string,
    date: string,
    amount: number,
    category: string,
    id: string
}

export type ExpenseModalProps = {
    isOpen: boolean,
    onClose: ()=> void,
    expense: ExpenseType
    onAddExpense: (expense:ExpenseType)=> void
    onUpdateExpense: (expense:ExpenseType)=> void
}