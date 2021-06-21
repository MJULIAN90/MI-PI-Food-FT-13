import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADDED_BY_USER_DB } from "../../Redux/Actios/Actios";
import { Link, useHistory } from "react-router-dom";
import "./AddByUserDB.css";

function AddByUserDb() {
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch(ADDED_BY_USER_DB());
  }, [dispatch]);

  const state = useSelector((state) => state.createByUserDb);

  function volver() {
    history.push("/Home");
  }

  return (
    <div className="dbCreates">
      {state.length > 0 ? (
        state.map((data) => (
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
        ))
      ) : (
        <>
          <h1>NO SE ENCONTRARON RECETAS EN LA BASE DE DATOS</h1>
        </>
      )}
      <button type="button" onClick={volver} className="volver">
        Volver
      </button>
    </div>
  );
}

export default AddByUserDb;
