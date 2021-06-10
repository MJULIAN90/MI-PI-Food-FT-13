import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//!-----------------------------------------------
/* pendiente que hacer con los botones para ver si puedes crear enviar alerta y a home
 */

//! pendiente hacer la validacion del formulario
///! pendiente agregar varias dietas

function AddRecipe() {
  const [food, setfood] = useState({
    Name: "",
    Resumen_del_plato: "",
    Puntuacion: "",
    Nivel_de_comida_saludable: "",
    Paso_a_paso: "",
    diets: [],
  });

  function handleOnchange(e) {
    setfood({
      ...food,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      await axios({
        url: "http://localhost:3001/recipe",
        method: "Post",
        data: food,
      });

      alert(`PLATO ${food.Name} HA SIDO CREADO`);
    } catch (err) {
      alert("ERROR AL CREAR ");
    }

    setfood({
      Name: "",
      Resumen_del_plato: "",
      Puntuacion: "",
      Nivel_de_comida_saludable: "",
      Paso_a_paso: "",
    });
  }

  return (
    <div>
      <h2>AGREGAR PLATO</h2>
      <form onSubmit={handleSumit}>
        <div>
          <label>Nombre Del Plato: </label>
          <input
            name="Name"
            type="text"
            value={food.Name}
            placeholder="Ingresa Nombre "
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label>Resumen Del Plato: </label>
          <textarea
            name="Resumen_del_plato"
            type="text"
            rows="10"
            cols="20"
            value={food.Resumen_del_plato}
            placeholder="Ingresa Resumen"
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label>Puntuacion: </label>
          <input
            name="Puntuacion"
            type="number"
            max="10"
            min="1"
            value={food.Puntuacion}
            placeholder="Ingresa Puntuacion Del PLato 1 a 10"
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label>Nivel de "comida saludable : </label>
          <input
            name="Nivel_de_comida_saludable"
            type="number"
            max="100"
            min="1"
            value={food.Nivel_de_comida_saludable}
            placeholder="Nivel de comida saludable"
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label>Paso a paso": </label>

          <textarea
            name="Paso_a_paso"
            type="text"
            rows="10"
            cols="20"
            value={food.Paso_a_paso}
            placeholder="Paso a paso"
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label>Dietas</label>
        </div>
        <button type="submit">Crear</button>
      </form>
      <Link to="/Home">Volver </Link>

      <button onClick={handleSumit}> Crear Nuevo Plato</button>
    </div>
  );
}

export default AddRecipe;
