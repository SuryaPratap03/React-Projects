import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FoodRecipeContext } from "../context/FoodRecipeContext";

const Details = () => {
  const { content } = useContext(FoodRecipeContext);
  const params = useParams();
  const [curritem, setCurrItem] = useState(null);

  useEffect(() => {
    const element = content?.data?.recipes?.filter(
      (Element) => Element.id === params.id
    );
    console.log(element ? element[0] : null, "element");
    setCurrItem(element ? element[0] : null);
  }, [content, params.id]); // Added dependencies for effect

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {curritem && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl w-full">
          <img
            src={`${curritem.image_url}`}
            alt={curritem.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{curritem.title}</h1>
            <h2 className="text-xl text-gray-600 mb-4">Published by: {curritem.publisher}</h2>
            <p className="text-gray-700">
              {/* You can add more details about the recipe here */}
              This is where you can describe the recipe in detail. Include ingredients, preparation steps, and any other relevant information.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;