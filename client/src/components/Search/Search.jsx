import React, { useRef } from "react";
import axios from "axios";
//import { useDispatch } from "react-redux";

//? pendiente crear las actios para poder enviar al reducers.

function Search() {
  let refInput = useRef();
  //const dispatch = useDispatch();

  async function handleSumit(e) {
    e.preventDefault();

    let value = refInput.current.value;
    console.log();

    let data = await axios(
      `http://localhost:3001/recipes?name=${
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      }`
    );

    refInput.current.value = "";
    console.log(data);
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
