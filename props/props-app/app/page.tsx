// pages/about.js

import React from 'react';
import CardComponent from './components/Card';

const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">HomePage</h1>
      <p className="text-gray-700">
        Welcome to your HomePage! We are a dedicated team passionate about providing valuable information and services.
      </p>
      
      <CardComponent title={'Home Title'} description={'Home Description'} tag={'Home Tags'} />
    </div>
  );
};

export default Home;
