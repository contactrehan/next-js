
import { Student } from "@/types/commonTypes";
import React from "react";

const studentRecord: Student[] = [
  {
    name: "arun",
    gender: "Male",
    physics: 88,
    maths: 87,
    english: 78,
  },
  {
    name: "rajesh",
    gender: "Male",
    physics: 96,
    maths: 100,
    english: 95,
  },
  {
    name: "moorthy",
    gender: "Male",
    physics: 89,
    maths: 90,
    english: 70,
  },
  {
    name: "raja",
    gender: "Male",
    physics: 30,
    maths: 25,
    english: 40,
  },
  {
    name: "usha",
    gender: "Female",
    physics: 67,
    maths: 45,
    english: 78,
  },
  {
    name: "priya",
    gender: "Female",
    physics: 56,
    maths: 46,
    english: 78,
  },
  {
    name: "Sundar",
    gender: "Male",
    physics: 12,
    maths: 67,
    english: 67,
  },
  {
    name: "Kavitha",
    gender: "Female",
    physics: 78,
    maths: 71,
    english: 67,
  },
  {
    name: "Dinesh",
    gender: "Male",
    physics: 56,
    maths: 45,
    english: 67,
  },
  {
    name: "Hema",
    gender: "Female",
    physics: 71,
    maths: 90,
    english: 23,
  },
  {
    name: "Gowri",
    gender: "Female",
    physics: 100,
    maths: 100,
    english: 100,
  },
  {
    name: "Ram",
    gender: "Male",
    physics: 78,
    maths: 55,
    english: 47,
  },
  {
    name: "Murugan",
    gender: "Male",
    physics: 34,
    maths: 89,
    english: 78,
  },
  {
    name: "Jenifer",
    gender: "Female",
    physics: 67,
    maths: 88,
    english: 90,
  },
];

const Students = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Student Records</h1>

      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Physics</th>
            <th className="py-2 px-4 border-b">Maths</th>
            <th className="py-2 px-4 border-b">English</th>
          </tr>
        </thead>
        <tbody>
          {studentRecord.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="py-4 px-4 border-b text-center">{item.name}</td>
              <td className="py-4 px-4 border-b text-center">{item.gender}</td>
              <td className="py-4 px-4 border-b text-center">{item.physics}</td>
              <td className="py-4 px-4 border-b text-center">{item.maths}</td>
              <td className="py-4 px-4 border-b text-center">{item.english}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
