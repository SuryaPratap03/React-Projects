import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-red-600 flex items-center justify-between px-6 shadow-lg'>
      <h1 className='text-white text-2xl font-bold'>
        <Link to={'/'}>Aravali</Link>
      </h1>
      <div className='space-x-6'>
        <Link 
          to={'/'}
          className={
            `text-white font-semibold hover:text-yellow-400 transition duration-300 `
          }
        >
          Home
        </Link>
        <Link 
          to={'/cart'}
          className={
            `text-white font-semibold hover:text-yellow-400 transition duration-300 `
          }
        >
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
