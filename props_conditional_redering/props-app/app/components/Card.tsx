// components/Card.js
"use client"
import React from 'react';
import {CardType} from "@/types/componentTypes"
import Tag from './tag';
const CardComponent = (prop:CardType) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-4">
      <h2 className="text-xl font-semibold mb-4">{prop.title}</h2>
      <p className="text-gray-600 mb-4">{prop.description}</p>
      <div className="flex flex-wrap">
        
         <Tag tagtext={prop.tag}/>
        
      </div>
    </div>
  );
};

export default CardComponent;
