import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADD_FAVORITES, GET_BY_ID } from "../../Redux/Actios/Actios";
import Swal from "sweetalert2";
import "./RecipesDetails.css";

function RecipesDetails(props) {
  const state = useSelector((state) => state);

  let history = useHistory();

  const dispatch = useDispatch();

  const { match } = props;

  let id = match.params.id;

  const { recipe_id, favorites } = state;

  useEffect(() => {
    dispatch(GET_BY_ID(id));
  }, [dispatch, id]);

  const Add_favorite = () => {
    let id_favorite = recipe_id.id;

    let info_repeat = favorites.find((e) => e.id === id_favorite);

    if (!info_repeat) {
      dispatch(ADD_FAVORITES(recipe_id));
      return Swal.fire({
        title: "AGREGADO A FAVORITOS",
        icon: "success",
        confirmButtonText: "OK",
        background: "white",
        confirmButtonColor: "#ff4720",
      });
    }
    return Swal.fire({
      title: "YA SE ENCUENTRA EN FAVORITOS",
      icon: "error",
      confirmButtonText: "Ok",
      background: "white",
      confirmButtonColor: "#ff4720",
    });
  };

  function volver() {
    history.push("/Home");
  }

  return (
    <div className="idRecipes">
      {recipe_id ? (
        <div className="id_text">
          <h1>{recipe_id.title}</h1>
          <div className="img_diets">
            <img
              src={recipe_id.image}
              alt="Error Loading"
              className="ima_size"
            />
          </div>

          <div className="subtitle">TIPOS DE PLATOS: </div>
          <ul>
            {recipe_id?.dishTypes?.map((e, i) => (
              <li key={i}>{e} </li>
            ))}
          </ul>

          <div className="subtitle">TIPOS DE DIETAS:</div>
          <div>
            <ul>
              {recipe_id.diets.map((e, i) => (
                <li key={i}>{e} </li>
              ))}
            </ul>
          </div>
          <div className="subtitle">RESUMEN :</div>
          <div className="text_p">{recipe_id.summary}</div>

          <div className="subtitle">PUNTUACION : </div>
          <div className="text">{recipe_id.Puntuation}</div>

          <div className="subtitle">NIVEL DE COMIDA SALUDABLE :</div>
          <div className="text">{recipe_id.lvl_healthScore}</div>

          {recipe_id.instructions && (
            <div>
              <div className="subtitle">PASO A PASO :</div>
              <div className="text">{recipe_id.instructions}</div>
            </div>
          )}
        </div>
      ) : (
        <h1>Cargando ...</h1>
      )}
      <div className="botones_recipes">
        <button type="button" onClick={Add_favorite} className="add_button">
          {"AGREGAR A FAVORITOS"}
        </button>
        <button type="button" onClick={volver} className="add_button">
          Volver
        </button>
      </div>
    </div>
  );
}

export default RecipesDetails;
