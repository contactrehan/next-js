import { employeeType } from "../../../../type";

export default async function Employee({ params }: { params: { id: string } }) {
  // Fetch data from the API
  const response = await fetch(`https://dummy.restapiexample.com/api/v1/employee/${params.id}`);
  
  // Check if the response was successful
  if (!response.ok) {
    throw new Error('Failed to fetch employee data');
  }

  // Parse the JSON response
  const {data} = await response.json();
  console.log(data);

  // Return the component with the fetched data
  return (
    <div className="bg-gray-100 p-4 rounded-md">
    <h1 className="text-2xl font-bold">Id :{data.id}</h1>
    <h1 className="text-xl font-bold">Name :{data.employee_name}</h1>
    <h2 className="text-lg">Age: {data.employee_age}</h2>
    <h2 className="text-lg">Salary: {data.employee_salary}</h2>
  </div>
  
  );
}


// import GetEmployees from "@/lib/employees"
  // console.log(data)
    // const employee = data.find((elem:employeeType) => elem.id === parseInt(params.id) )