import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADDED_BY_USER_DB } from "../../Redux/Actios/Actios";
import { Link } from "react-router-dom";

function AddByUserDb() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ADDED_BY_USER_DB());
  }, [dispatch]);

  const state = useSelector((state) => state.createByUserDb);

  return (
    <div>
      {state.length > 0 ? (
        state.map((data) => (
          <Link key={data.id} to={`/Home/Details/${data.id}`}>
            <div>
              <h3>{data.title}</h3>
              <img
                src={data.image}
                alt="error cargando"
                width="80"
                height="80"
              />
              <h4>
                <br />
                {"Diets:"}
                {data.diets.map((e, i) => (
                  <div key={i}>{e}</div>
                ))}
              </h4>
            </div>
          </Link>
        ))
      ) : (
        <>
          <h1>NO SE ENCONTRARON RECETAS EN LA BASE DE DATOS</h1>
        </>
      )}
      <Link to="/Home">Volver</Link>
    </div>
  );
}

export default AddByUserDb;
