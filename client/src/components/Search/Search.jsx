import React, { useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SEARCHED } from "../../Redux/Actios/Actios";
import { useHistory } from "react-router-dom";
import "./Search_css/Search.css";

//? pendiente crear las actios para poder enviar al reducers.

function Search() {
  let refInput = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleSumit(e) {
    e.preventDefault();

    if (refInput.current.value !== "") {
      let value = refInput.current.value;
      refInput.current.value = "";
      let data = await axios(
        `http://localhost:3001/recipes?name=${
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        }`
      );

      if (data.data !== "No se encontraron coincidencias") {
        dispatch(SEARCHED(data.data));

        return history.push("/Home/Search");
      }
      if (data.data === "No se encontraron coincidencias") {
        alert("Receta no encontrada");
        return history.push("/Home");
      }
    }
    alert("Ingresa un valor para la busqueda");
    return history.push("/Home");
  }
  return (
    <div>
      <form onSubmit={handleSumit}>
        <input
          className="buscador"
          type="text"
          placeholder="Busca por receta , ingrediente , palabra clave ..."
          ref={refInput}
        />
        <button type="submit">{"Buscar"}</button>
      </form>
    </div>
  );
}

export default Search;
