import React, { useContext } from "react";
import { FoodRecipeContext } from "../context/FoodRecipeContext";
import { NavLink } from 'react-router-dom';

const Home = () => {
  const { content, loading, favoritesArray, setFavoritesArray } = useContext(FoodRecipeContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-blue-500 font-semibold">Loading... Please Wait</div>
      </div>
    );
  }

  const AddToFavorites = (item) => {
    const newArr = [...favoritesArray];
    const index = newArr.indexOf(item);
    if (index !== -1) {
      setFavoritesArray(newArr.filter(Element => Element !== item));
    } else {
      newArr.push(item);
      setFavoritesArray(newArr);
    }
  };

  return (
    <div className="container mx-auto py-8">
      {content && content?.data?.recipes && content.data.recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {content.data.recipes.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <NavLink to={`/${item.id}`}>
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </NavLink>
              <div className="p-4">
                <h1 className="text-lg font-bold text-gray-900">{item.title}</h1>
                <h2 className="text-md text-gray-600 mt-2">By {item.publisher}</h2>
                <button 
                  onClick={() => AddToFavorites(item)}
                  className={`mt-4 py-2 px-4 rounded focus:outline-none focus:ring-2 transition duration-200 ease-in-out ${favoritesArray.indexOf(item) === -1 ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400' : 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400'}`}
                >
                  {favoritesArray.indexOf(item) === -1 ? `Add To Favorites` : `Remove From Favorites`}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-2xl text-gray-500 mt-16">
          Search Recipes...
        </div>
      )}
    </div>
  );
};

export default Home;