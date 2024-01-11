import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <Link className="font-bold text-xl" href="/">
        Form Handling
      </Link>
      <ul className="flex items-center">
        <li className="mx-4">
          <Link className="hover:text-gray-300" href="/">
             Home
          </Link>
        </li>
        <li className="mx-4">
          <Link className="hover:text-gray-300" href="/about">
             About Us
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
