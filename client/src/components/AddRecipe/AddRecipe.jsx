import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipe() {
  const [food, setfood] = useState({
    nombre: "",
    Resumen_plato: "",
    Puntuacion: "",
    nivel_comida: "",
    pasos: "",
  });
  function handleSumit(e) {
    e.preventDefault();
  }

  function handleOnchange(e) {
    setfood({
      ...food,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
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
      </form>
      <Link to="/Home">Volver </Link>
    </div>
  );
}

export default AddRecipe;
