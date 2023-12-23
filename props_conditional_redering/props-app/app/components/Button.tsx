
"use client"

import { ButtonType } from "@/types/componentTypes";
const Button = (prop:ButtonType) => {
  return (
    <button
      className={`bg-blue-500 text-white rounded-full px-4 py-2 mt-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 `}
      
    >
      {prop.label}
    </button>
  );
};

export default Button;
