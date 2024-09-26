import React, { useContext } from 'react';
import { FoodRecipeContext } from '../context/FoodRecipeContext';

const Favorites = () => {
  const { favoritesArray, setFavoritesArray } = useContext(FoodRecipeContext);

  const handleRemove = (item) => {
    const newArr = [...favoritesArray];
    setFavoritesArray(newArr.filter((element) => element !== item));
  };

  return (
    <div className="container mx-auto py-8">
      {favoritesArray && favoritesArray.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {favoritesArray.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-bold text-gray-900">{item.title}</h1>
                <h2 className="text-md text-gray-600 mt-2">By {item.publisher}</h2>
                <button
                  onClick={() => handleRemove(item)}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out"
                >
                  Remove From Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-2xl text-gray-500 mt-16">
          No favorites yet. Add some recipes!
        </div>
      )}
    </div>
  );
};

export default Favorites;