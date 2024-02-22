// pages/services/index.js

import Link from "next/link";




const Services = () => {
  return (
    <div>
     <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <ul>
        <li className="mb-2">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring focus:border-blue-300">
           <Link href={"/services/web-development"}>Web Development</Link> 
          </button>
        </li>
        <li className="mb-2">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring focus:border-blue-300">
            <Link href={"/services/graphic-design"}>Graphic Design</Link>
          </button>
        </li>
        <li className="mb-2">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring focus:border-blue-300">
            <Link href={"/services/digital-marketing"}>Digital Marketing</Link>
          </button>
        </li>
      </ul>
       
          </div>
       
  )
}

export default Services;
