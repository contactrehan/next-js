// components/Card.js
"use client"
import React from 'react';
import {Card} from "@/types/componentTypes"
const CardComponent = (prop:Card) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-4">
      <h2 className="text-xl font-semibold mb-4">{prop.title}</h2>
      <p className="text-gray-600 mb-4">{prop.description}</p>
      <div className="flex flex-wrap">
        
          <span  className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm mr-2 mb-2">
            {prop.tag}
          </span>
        
      </div>
    </div>
  );
};

export default CardComponent;
