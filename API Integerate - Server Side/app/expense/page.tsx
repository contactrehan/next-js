import ExpenseList from "../components/expenseList/expense";



export default function Expense() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold text-center m-8">Expense Tracker App</h1>
      <br />
      
      

      <ExpenseList />
    </div>
  );
}
