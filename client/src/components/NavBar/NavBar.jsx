import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <h3>
        <Link to="/"> Home </Link>
      </h3>
      <Search />

      <button>
        <Link to="/Home/AddRecipe">Agregar Receta </Link>
      </button>

      <button>
        <Link to="/Home/DataBase"> Recetas Creadas DB</Link>
      </button>
    </div>
  );
}

export default NavBar;
