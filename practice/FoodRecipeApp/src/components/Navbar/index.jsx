import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FoodRecipeContext } from '../context/FoodRecipeContext';

const Navbar = () => {
  const { setSearchParam, searchApi } = useContext(FoodRecipeContext);
  const [inputValue, setInputValue] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setSearchParam(inputValue);
    searchApi();
  };

  return (
    <div className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-600">
          <NavLink to="/">FoodRecipe</NavLink>
        </h1>

        {/* Search Input */}
        <form onSubmit={handleClick} className="flex items-center">
          <input
            type="text"
            className="border border-gray-300 rounded-l-md py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Enter recipes..."
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Search
          </button>
        </form>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `text-gray-700 hover:text-blue-600 text-lg font-medium ${isActive ? 'font-bold' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) => 
              `text-gray-700 hover:text-blue-600 text-lg font-medium ${isActive ? 'font-bold' : ''}`
            }
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;