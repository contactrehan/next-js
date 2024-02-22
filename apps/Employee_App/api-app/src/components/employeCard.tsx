// src\components\employeCard.tsx
import React from "react";
import { FaUser } from "react-icons/fa";
import { employeeType } from "../../type";
import CardButton from "./button";
const EmployeeCard = ({
  employee_name,
  id,
  employee_age,
  employee_salary,
}: employeeType) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 max-w-sm w-full">
      <div className="flex items-center justify-center bg-gray-200 p-4">
        <FaUser className="text-4xl text-gray-400 rounded-full" />
      </div>
      <div className="p-4">
        <h2 className="text-black font-bold text-xl mb-2 text-center">
          {employee_name}
        </h2>
        <p className="text-gray-700 mb-2">ID: {id}</p>
        <p className="text-gray-700 mb-2">Age: {employee_age}</p>
        <p className="text-gray-700 mb-2">Salary: ${employee_salary}</p>
        <div className="flex justify-end">
        
        
          <CardButton btn_text="Update" btn_class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded" />
          <CardButton btn_text="Delete" btn_class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" />
          <CardButton btn_text="Detail" btn_class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-2 rounded" id={id} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;


// unused Buttons in Card
// <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">Update</button>
// <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
// <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-2 rounded">
//   <Link href={`/employees/${id}`}>Detail</Link>
// </button>