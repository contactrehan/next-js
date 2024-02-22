"use client";
import AddEmployee from "@/lib/addEmployee";
import { useState, useEffect } from "react";
import { employeeType, eventType } from "../../type";
import { AnyARecord } from "dns";
const AddForm = () => {
  const [employee_Data, setEmployee_Data] =  useState<employeeType>({
    employee_name: "",
    employee_age: 0,
    employee_salary: 0,
  });
  const onChangeHandler = (e: eventType) => {
    const { name, value } = e.target;
    setEmployee_Data({ ...employee_Data, [name]: value });
  };

  const onSubmit = async (e:any) =>{
    e.preventDefault();

    await AddEmployee(employee_Data);

const response = await AddEmployee(employee_Data);
  

    // Reset the form
    setEmployee_Data({
      employee_name: "",
      employee_age: 0,
      employee_salary: 0,
    });
  };

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="mb-4">
          <label
            htmlFor="employee_name"
            className="block text-gray-700 font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="employee_name"
            name="employee_name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter employee name"
            onChange={onChangeHandler}
            value={employee_Data.employee_name}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="employee_age"
            className="block text-gray-700 font-bold mb-2"
          >
            Age
          </label>
          <input
            type="number"
            id="employee_age"
            name="employee_age"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter employee age"
            onChange={onChangeHandler}
            value={employee_Data.employee_age}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="employee_salary"
            className="block text-gray-700 font-bold mb-2"
          >
            Salary
          </label>
          <input
            type="number"
            id="employee_salary"
            name="employee_salary"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter employee salary"
            onChange={onChangeHandler}
            value={employee_Data.employee_salary}
          />
        </div>
        <button
          type="submit"
          onClick={onSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      {employee_Data.employee_name}
      <br />
      {employee_Data.employee_age}
      <br />
      {employee_Data.employee_salary}
    </div>
  );
};

export default AddForm;
