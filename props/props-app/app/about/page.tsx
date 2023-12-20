// pages/about.js

import React from 'react';
import CardComponent from '../components/Card';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700">
        Welcome to our About page! We are a dedicated team passionate about providing valuable information and services.
      </p>
      
      <CardComponent title={'About Tile'} description={'About Description'} tag={'About Tags'} />
    </div>
  );
};

export default AboutPage;
