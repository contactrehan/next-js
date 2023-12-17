// CardComponent.js
import { cardComponent } from "@/types/componentTypes";
import React from "react";
import Tag from "../tag/tag";

const CardComponent = (props:cardComponent) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{props.title}</h2>
      <p className="text-gray-600 mb-4">
       {props.description}
      </p>
      <div className="flex flex-wrap gap-2">
        <Tag />
        <Tag />
        <Tag />
        <span className="text-lg font-semibold text-blue-500">12-17-2023</span>
        {/* <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm">
          React
        </span>
        <span className="bg-green-500 text-white px-2 py-1 rounded-md text-sm">
          Tailwind CSS
        </span>
        <span className="bg-yellow-500 text-white px-2 py-1 rounded-md text-sm">
          Next.js 
         </span> */}
      </div>
    </div>
  );
};

export default CardComponent;
