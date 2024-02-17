import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">My Website</h1>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="nav-link hover:text-gray-400">Home</a>
            <a href="#" className="nav-link hover:text-gray-400">About</a>
            <a href="#" className="nav-link hover:text-gray-400">Services</a>
            <a href="#" className="nav-link hover:text-gray-400">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
