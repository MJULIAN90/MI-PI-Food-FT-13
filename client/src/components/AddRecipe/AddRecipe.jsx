import React from "react";
import { Link } from "react-router-dom";

function AddRecipe() {
  function handleSumit() {}

  return (
    <div>
      agregar comida formulario
      <Link to="/Home">Volver </Link>
      <form onSubmit={handleSumit}>
        <label></label>
      </form>
    </div>
  );
}

export default AddRecipe;
