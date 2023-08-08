import React, { useEffect } from "react";
import { useState } from "react";
import Search from "../components/common/Search";
import RecipeList from "../components/common/RecipeList";
import { getRecipes } from "../services/Api";

function Recipes() {
  const [searchedQuerry, setSearchedQuerry] = useState("pizza");
  const [recipes, setRecipes] = useState([]);

  const getSearchedResult = async () => {
    let result = await getRecipes(searchedQuerry);
    console.log(result);
    if (result && result.recipes) {
      setRecipes(result.recipes);
    }
  };

  useEffect(() => {
    getSearchedResult();
  }, [searchedQuerry]);
  return (
    <>
      <Search setSearchedQuerry={setSearchedQuerry} />
      <RecipeList recipes={recipes} searchedQuerry={searchedQuerry} />
    </>
  );
}

export default Recipes;
