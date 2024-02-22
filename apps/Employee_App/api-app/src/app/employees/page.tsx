import EmployeeCard from "@/components/employeCard";

import GetEmployees from "@/lib/employees";
import { employeeType } from "../../../type";
import CardButton from "@/components/button";
import Link from "next/link";

// export async function generateStaticParams() {
//   const employees = await GetEmployees();

//   return employees.map((employee: employeeType) => ({
//     id: employee.id,
//   }));
// }
export default async function Home() {
  let { data } = await GetEmployees();

  // console.log(data)

  return (
    <>
      <div className="text-center">
        {" "}
        <h1 className="text-3xl font-bold underline">Employee Data</h1>
      </div>
      <br />
      <div className="text-center">
        <Link href="/employees/add">
          <CardButton
            btn_text="Add Employee"
            btn_class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {data.map((elem: employeeType) => (
          <EmployeeCard key={elem.id} {...elem} />
        ))}
      </div>
    </>
  );
}
