import { createContext, useEffect, useState } from "react";

export const FoodRecipeContext = createContext();

export const FoodRecipeContextProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoritesArray, setFavoritesArray] = useState([]);

  const searchApi = async () => {
    setLoading(true);
    if (!searchParam) {
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      setContent(data);
      console.log(data);
      setLoading(false);
      setSearchParam("");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    searchApi();
  }, [searchParam]);
  return (
    <FoodRecipeContext.Provider
      value={{
        searchParam,
        setSearchParam,
        searchApi,
        content,
        setContent,
        loading,
        favoritesArray,
        setFavoritesArray,
      }}
    >
      {children}
    </FoodRecipeContext.Provider>
  );
};
