import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Recipes() {
  const state = useSelector((state) => state);

  const { recipes } = state;

  return (
    <div>
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/Home/Details/${recipe.id}`}>
          <div>
            <h2>{recipe.title}</h2>
            <img
              src={recipe.image}
              alt="error cargando"
              width="160"
              height="160"
            />
            <h3>
              Diets: <br /> {recipe.diets}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Recipes;
