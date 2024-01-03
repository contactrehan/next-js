import { pageCardType } from '@/types/componentTypes';
import React from 'react';

const PageCard = (prop:pageCardType) => {
  return (
    <div  className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 hover:bg-${bgcolor}-100 hover:shadow-lg hover:scale-105 hover:cursor-pointer">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {/* Content for the left side of the card */}
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{prop.title}</div>
          {prop.description ? <p className="mt-2 text-gray-500">{prop.description}</p> : "No description"}
        </div>
      </div>
    </div>
  );
};

export default PageCard