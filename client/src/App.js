import React from "react";
import { Route } from "react-router";

import "./App.css";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import Filters from "./components/Filters/Filters";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Recipes from "./components/Recipes/Recipes";
import RecipesDetails from "./components/RecipesDetails/RecipesDetails";

import LoaderDiets from "./utils/LoaderDiets";
import LoaderRecipes from "./utils/LoaderRecipes";

function App() {
  LoaderDiets();
  LoaderRecipes();

  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/Home" component={NavBar} />
      <Route exact path="/Home" component={Filters} />
      <Route exact path="/Home" component={Recipes} />
      <Route exact path="/Home/AddRecipe" component={AddRecipe} />
      <Route exact path="/Home/Details/:id" component={RecipesDetails} />
    </React.Fragment>
  );
}

export default App;
