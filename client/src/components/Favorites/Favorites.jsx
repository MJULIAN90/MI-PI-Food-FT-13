import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_FAVORITES } from "../../Redux/Actios/Actios";

function Favorites() {
  const state = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const remove_favorite = (e) => {
    console.log("aca el id ", e.target.id);

    dispatch(REMOVE_FAVORITES(e.target.id));
  };
  return (
    <div>
      {state.length > 0 ? (
        state.map((data, i) => (
          <div key={i}>
            <Link to={`/Home/Details/${data.id}`}>
              <h3>{data.title}</h3>

              <img
                src={data.image}
                alt="error cargando"
                width="80"
                height="80"
              />
            </Link>
            <h4>
              <br />
              {"Diets:"}
              {data.diets.map((e, i) => (
                <div key={i}>{e}</div>
              ))}
            </h4>
            <button type="button" id={data.id} onClick={remove_favorite}>
              {" "}
              ELIMINAR FAVORITO
            </button>
          </div>
        ))
      ) : (
        <h1>aca vienen los favoritos </h1>
      )}
      <Link to="/Home">Volver</Link>
    </div>
  );
}

export default Favorites;
