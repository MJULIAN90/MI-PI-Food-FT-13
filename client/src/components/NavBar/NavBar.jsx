import React from "react";
import { Link, useHistory } from "react-router-dom";
import Search from "../Search/Search";
import "./NavBar.css";

import img from "../../Images/logo2.png";

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
      <div className="menu">
        <div className="rutas">
          <button onClick={home}> Home</button>

          <button onClick={recetas}> Mis recetas </button>

          <button onClick={favoritos}> Mis favoritos </button>

          <button onClick={agregar}> Agregar Receta </button>
        </div>
        <div>
          <Link to="/">
            <img src={img} alt="error cargando" className="logo" />
          </Link>
        </div>

        <div className="rutas">
          <Search />{" "}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
