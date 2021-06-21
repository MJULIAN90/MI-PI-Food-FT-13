import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { DELETE_SEARCHED } from "../../Redux/Actios/Actios";

function Searched() {
  const state = useSelector((state) => state.searched);
  const dispatch = useDispatch();
  let history = useHistory();

  function volver() {
    dispatch(DELETE_SEARCHED());
    history.push("/Home");
  }

  return (
    <div>
      <div>
        {state?.length > 0 ? (
          <div className="recipeCreate">
            {state.map((data) => (
              <div key={data.id} className="recipeCard">
                <div className="titulo">
                  <Link to={`/Home/Details/${data.id}`}>
                    <h3>{data.title}</h3>
                  </Link>
                </div>
                <div className="contenido">
                  <div className="img_diets">
                    <img
                      src={data.image}
                      alt="error cargando"
                      width="120"
                      height="120"
                    />{" "}
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
          <h1>No se encontraron coincidencias</h1>
        )}
      </div>
      <button type="button" onClick={volver} className="volver">
        Volver
      </button>
    </div>
  );
}

export default Searched;
