


import Link from "next/link";


export default async function Home() {

//  console.log(emplooyees.data)


  return (
    <>
    <div className="text-center"> <h1 className="text-3xl font-bold underline">Home Page Data</h1></div>
<br />
<div className="text-center ">
    <Link href="/employees" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Employees</Link>
    </div>

    </>
  );
}
