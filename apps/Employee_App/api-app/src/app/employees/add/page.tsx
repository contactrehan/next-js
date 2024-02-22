import AddForm from "@/components/addForm";
import AddEmployee from "@/lib/addEmployee";

export default  function AddEmployeePage() {
  // const response = await AddEmployee({
  //   id: 0,
  //   employee_name: "",
  //   employee_age: 0,
  //   employee_salary: 0
  // });
  return (
    <div>
      {" "}
      <div className="text-center">
        <h1 className="text-3xl font-bold underline">Add Employee</h1>
      </div>


      <AddForm />
    </div>
  );
}
