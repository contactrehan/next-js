// pages/services.js

import Button from "../components/button/button";
import CardComponent from "../components/card/card";

const Services = () => {
    return (<>
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="text-center mt-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2 leading-tight">Our Services</h1>
          <CardComponent title="Services Card" description=" Explore our range of services designed to meet your business needs. From web development to graphic design and digital marketing,
            we've got you covered. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget elit ac ex lobortis commodo."/>
          <Button title="Services"/>
        </div>
      </div>
      </>
    );
  };
  
  export default Services;
  