import { employeeType } from "../../type";

export default async function AddEmployee(employee: employeeType) {
    const response = await fetch("https://dummy.restapiexample.com/api/v1/create", {
        method: "POST",
        body: JSON.stringify(employee),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const {status,data} = await response.json();
    
    return alert(`Employee added successfully,Status : ${status},  Employee Name : ${data.employee_name} Employee Age : ${data.employee_age} Employee Salary : ${data.employee_salary}`);
    
}