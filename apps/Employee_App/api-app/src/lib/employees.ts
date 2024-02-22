export default async function GetEmployees() {
    const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
    const data = await response.json();
    return data;
}