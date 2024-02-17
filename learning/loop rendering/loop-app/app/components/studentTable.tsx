"use client"
import React from 'react';
import { Student } from '@/types/commonTypes';

const StudentTable = (prop:Student) => {
  return (
    <table className="min-w-full border border-gray-200">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Gender</th>
          <th className="py-2 px-4 border-b">Physics</th>
          <th className="py-2 px-4 border-b">Maths</th>
          <th className="py-2 px-4 border-b">English</th>
        </tr>
      </thead>
      <tbody>
       
          <tr >
            <td className="py-2 px-4 border-b">{prop.name}</td>
            <td className="py-2 px-4 border-b">{prop.gender}</td>
            <td className="py-2 px-4 border-b">{prop.physics}</td>
            <td className="py-2 px-4 border-b">{prop.maths}</td>
            <td className="py-2 px-4 border-b">{prop.english}</td>
          </tr>
       
      </tbody>
    </table>
  );
};

export default StudentTable;
