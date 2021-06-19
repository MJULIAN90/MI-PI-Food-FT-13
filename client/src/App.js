import React from "react";
import { Route } from "react-router";

import "./App.css";
import AddByUserDb from "./components/AddByUserDB/AddByUserDB";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Recipes from "./components/Recipes/Recipes";
import RecipesDetails from "./components/RecipesDetails/RecipesDetails";
import RecipesDetailSearch from "./components/Search/RecipesDetailSearch";
import Searched from "./components/Search/Searched";

import LoaderDiets from "./utils/LoaderDiets";
import LoaderRecipes from "./utils/LoaderRecipes";

function App() {
  LoaderDiets();
  LoaderRecipes();

  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/Home" component={NavBar} />
      <Route exact path="/Home" component={Recipes} />
      <Route exact path="/Home/AddRecipe" component={AddRecipe} />
      <Route exact path="/Home/Details/:id" component={RecipesDetails} />
      <Route exact path="/Home/Search" component={Searched} />
      <Route
        exact
        path="/Home/DetailSearch/:id"
        component={RecipesDetailSearch}
      />
      <Route exact path="/Home/DataBase" component={AddByUserDb} />
      <Route exact path="/Home/Favorites" component={Favorites} />
    </React.Fragment>
  );
}

export default App;
