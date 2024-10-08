import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item, index) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is Added in Favorites
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
