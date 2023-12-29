// StudentCard.js
import React from 'react';
import { Student } from '@/types/commonTypes';

const StudentCard = (prop: Student) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{prop.name}</h2>
      <p className="text-gray-600 text-sm mb-4">Gender: {prop.gender}</p>
      <p className="text-gray-600 mb-4">
        Physics: {prop.physics}, Maths: {prop.maths}, English: {prop.english}
      </p>
      {/* You can customize the content based on your needs */}
    </div>
  );
};

export default StudentCard;
