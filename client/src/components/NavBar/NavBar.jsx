import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <h3>
        <Link to="/"> Iniciar </Link>
      </h3>
      <Search />

      <button>
        <Link to="/Home/AddRecipe">Agregar Receta </Link>
      </button>

      <button>
        <Link to="/Home/DataBase"> Recetas Creadas DB</Link>
      </button>

      <button>
        <Link to="/Home/Favorites"> Mis favoritos</Link>
      </button>

      <button>
        <Link to="/Home"> Volver a Home</Link>
      </button>
    </div>
  );
}

export default NavBar;
