
import {buttonComponent} from "../../../types/componentTypes"
import { log } from "console";
import React from "react";

const Button = (props:buttonComponent) => {
    
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{props.title}</button>
  );
};

export default Button;
