import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DELETE_SEARCHED } from "../../Redux/Actios/Actios";

function Searched() {
  const state = useSelector((state) => state.searched);
  const dispatch = useDispatch();

  console.log("aca buscado ", state.data);

  return (
    <div>
      <div>
        {state.data.map((data) => (
          <Link key={data.id} to={`/Home/DetailSearch/${data.id}`}>
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
        ))}
      </div>
      <Link to="/Home" onClick={() => dispatch(DELETE_SEARCHED())}>
        Volver A Home
      </Link>
    </div>
  );
}

export default Searched;