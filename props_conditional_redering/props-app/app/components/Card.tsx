"use client"
import React from 'react';
import {CardType} from "@/types/componentTypes"
import Tag from './tag';
var cardTitle = "Home Title"
var count :number = 8
const CardComponent = (prop:CardType) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-4">
      <h2 className="text-xl font-semibold mb-4">{prop.title}</h2>
      <p className="text-gray-600 mb-4">
        {(prop.description) ? prop.description : "No Description Found"  }
        </p>
      <div className="flex flex-wrap">
        
         <Tag tagtext={prop.tag ? prop.tag : "No Tags Found"}/>
        
      </div>
      {count<10 ?<span>{count}</span> : ""}
    </div>
  );
};

export default CardComponent;
