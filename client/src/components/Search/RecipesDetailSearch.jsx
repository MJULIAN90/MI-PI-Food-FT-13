import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADD_FAVORITES, GET_BY_ID } from "../../Redux/Actios/Actios";

//falta organizar lo de tipos de dietas
function RecipesDetailSearch(props) {
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
      return alert("AGREGADO A FAVORITOS");
    }

    return alert("YA SE ENCUENTRA EN FAVORITOS");
  };

  function volverSearch() {
    history.push("/Home/Search");
  }

  return (
    <div className="idRecipes">
      {recipe_id ? (
        <div className="id_text">
          <br />
          <h2>{recipe_id.title}</h2>
          <div className="img_diets">
            <img
              src={recipe_id.image}
              alt="Error Loading"
              className="ima_size"
            />
          </div>

          <h3>TIPOS DE PLATOS: </h3>
          <ul>
            {recipe_id?.dishTypes?.map((e, i) => (
              <li key={i}>{e} </li>
            ))}
          </ul>

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
      <button type="button" onClick={Add_favorite} className="add_button">
        {"AGREGAR A FAVORITOS"}
      </button>
      <button type="button" onClick={volverSearch} className="add_button">
        VOLVER A BUSQUEDA
      </button>
    </div>
  );
}

export default RecipesDetailSearch;
