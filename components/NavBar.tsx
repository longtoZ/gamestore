// components/NavBar.tsx

import React from 'react';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';

const NavBar: React.FC = () => {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between fixed z-20 top-0 backdrop-blur-md">
      {/* Logo */}
      <Link href="/" className="text-white text-2xl font-bold">
        Logo
      </Link>

      {/* Search Bar */}
      <div className="relative flex-grow mx-10" style={{ margin: "0 10rem"}}>
        <SearchIcon className='absolute top-1/4 right-1 text-neutral-300'/>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-md bg-neutral-700 opacity-40"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        <Link href="/products" className="text-white">
          Products
        </Link>
        <Link href="/about" className="text-white">
          About
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
