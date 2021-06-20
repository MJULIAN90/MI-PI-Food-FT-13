import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADD_FAVORITES, GET_BY_ID } from "../../Redux/Actios/Actios";

//falta organizar lo de tipos de dietas
function RecipesDetails(props) {
  const state = useSelector((state) => state);

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
      return alert("AGREGADO A FAVORITOS");
    }

    return alert("YA SE ENCUENTRA EN FAVORITOS");
  };
  return (
    <div>
      {recipe_id ? (
        <div>
          <h2>{recipe_id.title}</h2>
          <img src={recipe_id.image} alt="Error Loading" />
          <h3>TIPOS DE PLATOS: </h3>
          <p>{recipe_id.type_dish}</p>
          <h3>TIPOS DE DIETAS:</h3>
          <div>
            <ul>
              {recipe_id.diets.map((e, i) => (
                <li key={i}>{e} </li>
              ))}
            </ul>
          </div>
          <h3>RESUMEN :</h3>
          <p>{recipe_id.summary}</p>
          <h3>PUNTUACION : {recipe_id.Puntuation}</h3>
          <h3>NIVEL DE COMIDA SALUDABLE : {recipe_id.lvl_healthScore}</h3>
          <h3>PASO A PASO :</h3>
          <p>{recipe_id.instructions} </p>
        </div>
      ) : (
        <h1>Cargando ...</h1>
      )}

      <button type="button" onClick={Add_favorite}>
        {"AGREGAR A FAVORITOS"}
      </button>
      <Link to="/Home">Volver A Home</Link>
    </div>
  );
}

export default RecipesDetails;
