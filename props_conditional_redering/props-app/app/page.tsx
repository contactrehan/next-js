import React from 'react';
import CardComponent from './components/Card';
const homeTitle: string = "Home Title" 

const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">HomePage</h1>
      <p className="text-gray-700">
        Welcome to your HomePage! We are a dedicated team passionate about providing valuable information and services.
      </p>
      
      <CardComponent title = {homeTitle} description='Home Description' tag='Home Tags' />
      <CardComponent title = {homeTitle} description='Home Description 2' tag='Home Tags 2 ' />
    </div>
  );
};

export default Home;
