
const SingleUserPage = (props:{name:string,id:number,username:string,firstname:string,lastname:string,phone:number,birthdate:string}) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden p-6">
      <h1 className="text-3xl font-semibold mb-4">{props.name}</h1>
      <p className="text-gray-600">ID: {props.id}</p>
      <p className="text-gray-600">First Name: {props.firstname}</p>
      <p className="text-gray-600">Last Name: {props.lastname}</p>
      <p className="text-gray-600">Phone No: {props.phone}</p>
      <p className="text-gray-600">Birth Date: {props.birthdate}</p>
      
    </div>
  )
}

export default SingleUserPage