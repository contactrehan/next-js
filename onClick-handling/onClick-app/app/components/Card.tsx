// DirectorCard.js
import React from 'react';
import { directorType } from '@/types/commonTypes';

const DirectorCard = (prop: directorType) => {
  return (
    
    <div className="bg-white shadow-md rounded-md p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{prop.name}</h2>
      <p className="text-gray-600 text-sm mb-4">Age: {prop.age}</p>
      <p className="text-gray-600 mb-4">{prop.intro}</p>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Title:</span>
        <span className="text-blue-500 font-semibold">{prop.title}</span>
      </div>
      <div className="mt-4">
        <a
          href={`https://${prop.fb_url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {prop.fb_url}
        </a>
      </div>
    </div>
  );
};

export default DirectorCard;
