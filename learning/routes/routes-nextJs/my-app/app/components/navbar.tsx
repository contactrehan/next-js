"use client"
// components/Navbar.tsx
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    // Get the current page path on component mount
    setCurrentPage(window.location.pathname);

    // Update the current page path on route change
    const handleRouteChange = () => {
      setCurrentPage(window.location.pathname);
    };

    // Add the event listener for route change
    window.addEventListener('popstate', handleRouteChange);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li className={currentPage === '/' ? 'font-bold' : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={currentPage === '/contact' ? 'font-bold' : ''}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={currentPage === '/Services' ? 'font-bold' : ''}>
          <Link href="/Services">Services</Link>
        </li>
        <li className={currentPage === '/about' ? 'font-bold' : ''}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
