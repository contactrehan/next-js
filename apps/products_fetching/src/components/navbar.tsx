// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4">
      <div className="flex space-x-4">
        <Link href="/">
          <div className="text-white cursor-pointer hover:text-gray-300 transition">Home</div>
        </Link>
        <Link href="/about">
          <div className="text-white cursor-pointer hover:text-gray-300 transition">About</div>
        </Link>
        <Link href="/products">
          <div className="text-white cursor-pointer hover:text-gray-300 transition">Products</div>
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;

