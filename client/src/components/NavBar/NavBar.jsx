import React from "react";
import { useHistory } from "react-router-dom";
import Search from "../Search/Search";
import "./NavBar.css";

function NavBar() {
  const history = useHistory();

  function home() {
    history.push("/Home");
  }

  function recetas() {
    history.push("/Home/DataBase");
  }

  function favoritos() {
    history.push("/Home/Favorites");
  }

  function agregar() {
    history.push("/Home/AddRecipe");
  }

  return (
    <div className="NavBar">
      <div className="logo"></div>
      <div className="menu">
        <div className="rutas">
          <button onClick={home}> Inicio</button>
          <button onClick={recetas}> Mis recetas </button>
          <button onClick={favoritos}> Mis favoritos </button>
          <button onClick={agregar}> Agregar Receta </button>
        </div>

        <div>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
