import React, { useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SEARCHED } from "../../Redux/Actios/Actios";
import { useHistory } from "react-router-dom";

//? pendiente crear las actios para poder enviar al reducers.

function Search() {
  let refInput = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleSumit(e) {
    e.preventDefault();

    let value = refInput.current.value;

    let data = await axios(
      `http://localhost:3001/recipes?name=${
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      }`
    );

    refInput.current.value = "";
    dispatch(SEARCHED(data.data));

    history.push("/Home/Search");
  }
  return (
    <div>
      <form onSubmit={handleSumit}>
        <input
          type="text"
          placeholder="Busca una receta , ingrediente , palabra clave ..."
          ref={refInput}
        />
        <button type="submit"> Buscar</button>
      </form>
    </div>
  );
}

export default Search;
