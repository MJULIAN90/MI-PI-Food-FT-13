import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AddRecipe() {
  const [food, setfood] = useState({
    nombre: "",
    Resumen_plato: "",
    Puntuacion: "",
    nivel_comida: "",
    pasos: "",
  });
  async function handleSumit(e) {
    e.preventDefault();

    try {
      await axios({
        url: "http://localhost:3001/recipe",
        method: "Post",
        data: food,
      });
    } catch (err) {
      alert("ERROR AL CREAR ");
    }

    alert(`PLATO ${food.nombre} HA SIDO CREADO`);

    setfood({
      nombre: "",
      Resumen_plato: "",
      Puntuacion: "",
      nivel_comida: "",
      pasos: "",
    });
  }

  function handleOnchange(e) {
    setfood({
      ...food,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <h2>AGREGAR PLATO</h2>
      <form onSubmit={handleSumit}>
        <div>
          <label>Nombre Del Plato: </label>
          <input
            name="name"
            type="text"
            value={food.nombre}
            placeholder="Ingresa Nombre "
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label>Resumen Del Plato: </label>
          <textarea
            name="resumen"
            type="text"
            rows="10"
            cols="20"
            value={food.Resumen_plato}
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
            name="nivel_comida"
            type="number"
            max="100"
            min="1"
            value={food.nivel_comida}
            placeholder="Nivel de comida saludable"
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label>Paso a paso": </label>
          <input
            name="Pasos"
            type="text"
            value={food.Pasos}
            placeholder="Paso a paso"
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label>Dietas</label>
        </div>
        <button type="submit"> Crear</button>
      </form>
      <Link to="/Home">Volver </Link>

      <button> Crear Nuevo Plato</button>
    </div>
  );
}

export default AddRecipe;
