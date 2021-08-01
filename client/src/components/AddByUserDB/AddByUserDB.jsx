import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADDED_BY_USER_DB } from "../../Redux/Actios/Actios";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
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

  let vacio = () => {
    Swal.fire({
      title: "NO SE ENCONTRARON RECETAS EN LA BASE DE DATOS",
      icon: "error",
      confirmButtonText: "Ok",
      background: "white",
      confirmButtonColor: "#ff4720",
    });
    return history.push("/home");
  };

  return (
    <div>
      <div className="dbCreates">
        {state.length > 0 ? (
          state.map((data) => (
            <div key={data.id} className="recipeCard">
              <Link to={`/Home/Details/${data.id}`} className="links">
                <div className="img_diets">
                  <img
                    src={data.image}
                    alt="error cargando"
                    width="300px  "
                    height="200px"
                  />
                </div>

                <div className="titulo">
                  <h2>{data.title}</h2>
                </div>

                <div className="text_diets">
                  {"Diets:"}
                  {data.diets.map((e, i) => (
                    <div key={i}>{e}</div>
                  ))}
                </div>
              </Link>
            </div>
          ))
        ) : (
          <>{vacio()}</>
        )}
      </div>

      <button type="button" onClick={volver} className="volver">
        Volver
      </button>
    </div>
  );
}

export default AddByUserDb;
