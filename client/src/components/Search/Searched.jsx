import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { DELETE_SEARCHED } from "../../Redux/Actios/Actios";
import "./Search_css/Searched.css";

function Searched() {
  const state = useSelector((state) => state.searched);
  const dispatch = useDispatch();
  let history = useHistory();

  function volver() {
    dispatch(DELETE_SEARCHED());
    history.push("/Home");
  }

  return (
    <div className="container">
      <div>
        {state?.length > 0 ? (
          <div className="recipeCreate">
            {state.map((data) => (
              <div key={data.id} className="recipeCard">
                <Link to={`/Home/DetailSearch/${data.id}`} className="links">
                  <div className="titulo">
                    <h1>{data.title}</h1>
                  </div>
                  <div className="contenido">
                    <div className="img_diets">
                      <img
                        src={data.image}
                        alt="error cargando"
                        width="100%  "
                        height="100%"
                      />{" "}
                    </div>

                    <div className="text_diets">
                      {"Diets:"}
                      {data.diets.map((e, i) => (
                        <div key={i}>{e}</div>
                      ))}
                    </div>
                  </div>
                </Link>
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
