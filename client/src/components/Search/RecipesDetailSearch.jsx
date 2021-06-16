import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GET_BY_ID } from "../../Redux/Actios/Actios";

//falta organizar lo de tipos de dietas
function RecipesDetailSearch(props) {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const { match } = props;

  let id = parseInt(match.params.id);

  const { recipe_id } = state;

  useEffect(() => {
    dispatch(GET_BY_ID(id));
  }, [dispatch, id]);

  console.log("aca estamosasdf");

  return (
    <div>
      {recipe_id ? (
        <div>
          <h2>{recipe_id.title}</h2>
          <img src={recipe_id.img} alt="Error Loading" />
          <h3>TIPOS DE PLATOS: </h3>
          <p>{recipe_id.type_dish}</p>
          <h3>TIPOS DE DIETAS:</h3>
          <div>
            <ul>
              {recipe_id.type_diet.map((e, i) => (
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
      <Link to="/Home/Search">Volver</Link>
    </div>
  );
}

export default RecipesDetailSearch;
