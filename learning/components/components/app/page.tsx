// pages/index.js

import Button from "./components/button/button";
import Card from "./components/card/card";

const Home = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-2 leading-tight">Welcome to Your Homepage</h1>
        <Card title="Home Page Card" description="Welcome to the exciting world of Next.js and Tailwind CSS! Create stunning web applications with ease.
          Tailwind CSS provides a utility-first approach for building modern designs, while Next.js offers a powerful
          and flexible framework for React applications."/>
        <br />
        <Button title="Home"  />
       
      </div>
    </div>
  );
};

export default Home;
