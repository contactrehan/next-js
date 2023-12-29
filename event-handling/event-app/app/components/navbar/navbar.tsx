import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center">
        <Link href="/">
          <div className="text-white font-bold text-lg cursor-pointer mr-4">
            Home
          </div>
        </Link>
        <Link href="/student">
          <div className="text-white font-bold text-lg cursor-pointer mr-4">
            Student
          </div>
        </Link>
        <Link href="/counter">
          <div className="text-white font-bold text-lg cursor-pointer mr-4">
            Counter
          </div>
        </Link>
        <Link href="/about">
          <div className="text-white cursor-pointer">About</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
