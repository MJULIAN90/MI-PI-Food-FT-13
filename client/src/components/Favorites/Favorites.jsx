import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { REMOVE_FAVORITES } from "../../Redux/Actios/Actios";
import "./Favorites.css";

function Favorites() {
  const state = useSelector((state) => state.favorites);
  let history = useHistory();

  const dispatch = useDispatch();

  const remove_favorite = (e) => {
    dispatch(REMOVE_FAVORITES(e.target.id));
  };

  function volver() {
    history.push("/Home");
  }
  return (
    <div className="favorites">
      {state.length > 0 ? (
        <div className="recipeCreate">
          {state.map((data) => (
            <div key={data.id} className="recipeCard">
              <div className="titulo">
                <h3>{data.title}</h3>
              </div>

              <div className="contenido">
                <div className="img_diets">
                  <img
                    src={data.image}
                    alt="error cargando"
                    width="100%"
                    height="100%"
                  />{" "}
                </div>

                <div className="opciones">
                  <Link to={`/Home/Details/${data.id}`} className="links">
                    <button> VER DETALLES</button>
                  </Link>
                  <button type="button" id={data.id} onClick={remove_favorite}>
                    {"ELIMINAR FAVORITO"}
                  </button>
                </div>

                <div className="text_diets">
                  {"Diets:"}
                  {data.diets.map((e, i) => (
                    <div key={i}>{e}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>NO HAY FAVORITOS </h1>
      )}
      <button type="button" onClick={volver} className="volver">
        Volver
      </button>
    </div>
  );
}

export default Favorites;
